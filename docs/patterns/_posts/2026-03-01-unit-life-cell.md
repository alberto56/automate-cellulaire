---
name: unit Life cell
id: unit-life-cell
permalink: /patterns/unit-life-cell
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A rectangular pattern, of size greater than 1x1, that
  can simulate Life in the following sense.  The pattern by itself
  represents a dead Life cell, and some other pattern represents a live
  Life cell.  When the plane is tiled by these two patterns (which then
  represent the state of a whole Life universe) they evolve, after a
  fixed amount of time, into another tiling of the plane by the same
  two patterns which correctly represents the Life generation following
  the one they initially represented.
  It is usual to use the prefix "meta-" for simulated Life features,
  so, for example, for the first known unit Life cell (constructed by
  David Bell in January 1996), one metatick is 5760 [tick](/patterns/tick)s, and one
  [metacell](/patterns/metacell) is 500x500 cells.  Capital letters were originally used to
  make this distinction - e.g., Generation, Cell - but this usage is no
  longer common.
  In December 2005, Jason Summers constructed an analogous unit cell
  for Wolfram's Rule 110, a one-dimensional [cellular automaton](/patterns/cellular-automaton) that
  is known be universal.  See also [OTCA metapixel](/patterns/otca-metapixel), [p1 megacell](/patterns/p1-megacell).
...
