#!/usr/bin/env bash
#
# install-agent-skills.sh
#
# Wires committed agent skills into every agent's expected lookup path.
#
# Canonical source of truth : .agents/skills/<name>/     (Codex, Cursor, Copilot, Gemini CLI)
# Bridged to                : .claude/skills/<name>      (Claude Code, symlink or copy)
#
# Idempotent. Safe to run on every clone, in postinstall, or in CI.
# Symlinks are committed to git, so on macOS and Linux this script is usually a
# no-op. It exists for Windows checkouts, where git materialises symlinks as
# plain text files unless core.symlinks is enabled.
#
# Usage:
#   ./scripts/install-agent-skills.sh            # bridge every skill in .agents/skills
#   ./scripts/install-agent-skills.sh --check    # verify only, non-zero exit on drift (CI)
#   ./scripts/install-agent-skills.sh --copy     # force copy instead of symlink

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="${REPO_ROOT}/.agents/skills"
CLAUDE_DIR="${REPO_ROOT}/.claude/skills"

MODE="link"
for arg in "$@"; do
  case "$arg" in
    --check) MODE="check" ;;
    --copy)  MODE="copy" ;;
    -h|--help) sed -n '2,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "unknown flag: $arg" >&2; exit 2 ;;
  esac
done

if [[ ! -d "$SRC_DIR" ]]; then
  echo "no .agents/skills directory at ${SRC_DIR}, nothing to install" >&2
  exit 0
fi

mkdir -p "$CLAUDE_DIR"

drift=0
count=0

for skill_path in "$SRC_DIR"/*/; do
  [[ -d "$skill_path" ]] || continue
  name="$(basename "$skill_path")"
  target="${CLAUDE_DIR}/${name}"

  if [[ ! -f "${skill_path}SKILL.md" ]]; then
    echo "skip ${name}: no SKILL.md" >&2
    continue
  fi
  count=$((count + 1))

  # Already a correct symlink pointing at the canonical copy
  if [[ -L "$target" ]]; then
    resolved="$(cd "$(dirname "$target")" && cd "$(readlink "$target")" 2>/dev/null && pwd || true)"
    canonical="$(cd "$skill_path" && pwd)"
    if [[ "$resolved" == "$canonical" ]]; then
      [[ "$MODE" == "check" ]] && echo "ok   ${name} (symlink)"
      continue
    fi
  fi

  # Already a copy that matches
  if [[ -d "$target" && ! -L "$target" ]]; then
    if diff -rq "$skill_path" "$target" >/dev/null 2>&1; then
      [[ "$MODE" == "check" ]] && echo "ok   ${name} (copy)"
      continue
    fi
  fi

  if [[ "$MODE" == "check" ]]; then
    echo "DRIFT ${name}: .claude/skills/${name} missing or out of sync"
    drift=1
    continue
  fi

  rm -rf "$target"
  if [[ "$MODE" == "copy" ]]; then
    cp -R "$skill_path" "$target"
    echo "copied  ${name} -> .claude/skills/${name}"
  else
    # Relative symlink so the repo stays portable across clone locations
    if ln -s "../../.agents/skills/${name}" "$target" 2>/dev/null; then
      echo "linked  ${name} -> .claude/skills/${name}"
    else
      cp -R "$skill_path" "$target"
      echo "copied  ${name} -> .claude/skills/${name} (symlink unsupported on this filesystem)"
    fi
  fi
done

if [[ "$count" -eq 0 ]]; then
  echo "no skills found under .agents/skills" >&2
  exit 0
fi

if [[ "$MODE" == "check" && "$drift" -ne 0 ]]; then
  echo "" >&2
  echo "Agent skills are out of sync. Run ./scripts/install-agent-skills.sh" >&2
  exit 1
fi

echo "${count} skill(s) available to Claude Code and Codex."
