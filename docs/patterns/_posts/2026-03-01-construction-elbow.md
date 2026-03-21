---
name: construction elbow
id: construction-elbow
permalink: /patterns/construction-elbow
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  One of the components of a [construction arm](/patterns/construction-arm) in a
  [universal constructor](/patterns/universal-constructor).  The elbow usually consists of a single
  [Spartan](/patterns/spartan) still life or small constellation.  It accepts
  [elbow operation](/patterns/elbow-operation) recipes, in the form of [salvo](/patterns/salvo)s coming from the
  construction arm's [shoulder](/patterns/shoulder).
  These recipes may do one of several things:  1) [pull](/patterns/pull) the elbow
  closer to the shoulder, 2) [push](/patterns/push) the elbow farther from the
  shoulder, 3) emit a glider on a particular output [lane](/patterns/lane) (while also
  optionally pushing or pulling the elbow); 4) create a "[hand](/patterns/hand)" target
  block or other useful object as a target for output gliders, to one
  side of the [construction lane](/patterns/construction-lane); 5)  duplicate the elbow, or 6)
  destroy the elbow.
  Elbows that receive and emit orthogonally-travelling [spaceship](/patterns/spaceship)s
  instead of gliders are technically possible, but no working examples
  are currently known.  The discussion below assumes that gliders are
  used to communicate between the shoulder, elbow, and hand locations.
  If a mechanism can be programmed to generate recipes for at least
  the first three options listed above, it is generally capable of
  functioning as a [universal constructor](/patterns/universal-constructor).  The main requirement is
  that push and pull [elbow operation](/patterns/elbow-operation)s should be available that are
  either minimal (1[fd](/patterns/fd)) or the distances should be relatively prime.
  Depending on the [elbow operation](/patterns/elbow-operation) library, there may be only one
  type of elbow, or there may be two or more elbow objects, with
  recipes that convert between them.  The [9hd](/patterns/9hd) library had just one
  elbow type, a block.  The original 10[hd](/patterns/hd) library had two elbows,
  blocks in mirror-symmetric locations; this was expanded to a larger
  list for the [10hd Demonoid](/patterns/10hd-demonoid).  The [0hd Demonoid](/patterns/0hd-demonoid) also has a
  multi-elbow recipe library.  A [slow elbow](/patterns/slow-elbow) toolkit may make use of
  an even larger number of glider output recipes, because the [target](/patterns/target)
  elbow object in that case is not restricted to a single diagonal
  line.
  If only one colour, parity, or phase of glider can be emitted, then
  the mechanism will be limited to producing [monochromatic salvo](/patterns/monochromatic-salvo)s or
  [monoparity salvo](/patterns/monoparity-salvo)s.  These are less efficient at most construction
  tasks, but are still generally accepted to enable
  [universal toolkit](/patterns/universal-toolkit)s.  See also [half-baked knightship](/patterns/half-baked-knightship).
...
