---
version: 1
name: <Product>-design-system
description: >
  One paragraph. What the surface feels like, what the dominant material is, what the
  type voice is, and what the single decorative system is. Write it so an agent that reads
  only this paragraph still picks the right direction.

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"          # primary text
  body: "#4d4d4d"         # secondary text
  mute: "#888888"         # tertiary text / captions
  hairline: "#ebebeb"     # 1px borders
  hairline-strong: "#a1a1a1"
  canvas: "#ffffff"       # page background
  canvas-soft: "#fafafa"  # raised / alternate section
  accent: "#000000"       # exactly one accent. Locked page-wide.
  link: "#0000ee"
  success: "#12a150"
  warning: "#f5a623"
  error: "#ee0000"
  selection-bg: "#000000"
  selection-fg: "#ffffff"

typography:
  display-xl:
    fontFamily: <Display>, system-ui, sans-serif
    fontSize: 64px
    fontWeight: 600
    lineHeight: 64px
    letterSpacing: -2.4px
  display-lg: { fontFamily: <Display>, fontSize: 48px, fontWeight: 600, lineHeight: 52px, letterSpacing: -1.6px }
  heading-md: { fontFamily: <Display>, fontSize: 24px, fontWeight: 600, lineHeight: 32px, letterSpacing: -0.4px }
  body-md:    { fontFamily: <Text>,    fontSize: 16px, fontWeight: 400, lineHeight: 26px, letterSpacing: 0px }
  body-sm:    { fontFamily: <Text>,    fontSize: 14px, fontWeight: 400, lineHeight: 22px, letterSpacing: 0px }
  mono-sm:    { fontFamily: <Mono>,    fontSize: 13px, fontWeight: 400, lineHeight: 20px, letterSpacing: 0px }

spacing:
  unit: 4px
  section-y-desktop: 128px
  section-y-mobile: 72px
  container-max: 1400px
  gutter: 24px

radius:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  pill: 999px

elevation:
  flat: none
  raised: 0 1px 2px rgb(0 0 0 / .06)
  overlay: 0 12px 32px rgb(0 0 0 / .12)
---

## Overview

What kind of product this is, who it is for, and the one-sentence design thesis.
Name the dominant material (flat paper / glass / dark chrome / print grid) and the
single decorative system (mesh gradient / photography / illustration / nothing).

## Colors

How the tokens above are actually deployed. Which token is the page background, which
is the alternate band, what the accent is allowed to touch (CTA only? links too?), and
the dark mode strategy (token swap vs separate palette). State the WCAG floor: body text
4.5:1, large text 3:1.

## Typography

The scale in use, the responsive ramp (mobile -> desktop), when display vs text face is used,
max measure for body copy (65ch default), numeric handling (`tabular-nums` in tables),
and heading wrap rules (`text-wrap: balance`).

## Layout

Grid, container width, breakpoints, section rhythm, and which layout families this system
uses. Name the families explicitly so an agent can rotate between them instead of repeating
one pattern down the page.

## Elevation & Depth

When shadows are allowed and what replaces them when they are not (hairlines, background
shift, spacing). Z-index tiers.

## Shapes

One corner-radius system, applied consistently. Which radius each component class gets.
Border weights and where hairlines appear.

## Components

Per component: anatomy, sizes, states (default / hover / focus-visible / active / disabled /
loading / error), and the exact tokens each state uses. Cover at minimum: button, link,
input, select, card, badge, nav, footer, modal.

## Do's and Don'ts

Concrete and testable. "Do use the accent on the primary CTA only." "Don't place a second
accent in the footer." "Don't wrap a CTA label to two lines at desktop."
