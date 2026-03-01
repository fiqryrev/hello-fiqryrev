import { cn } from "@/lib/utils";

describe("cn() utility", () => {
  it("merges multiple class strings", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn("base", isActive && "active", isDisabled && "disabled")).toBe(
      "base active"
    );
  });

  it("resolves Tailwind conflicts via twMerge (last wins)", () => {
    expect(cn("px-4", "px-8")).toBe("px-8");
  });

  it("resolves conflicting color classes", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles empty and falsy inputs", () => {
    expect(cn("", null, undefined, false, "px-4")).toBe("px-4");
  });

  it("merges object syntax from clsx", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("returns empty string for no inputs", () => {
    expect(cn()).toBe("");
  });
});
