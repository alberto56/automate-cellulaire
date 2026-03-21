---
name: reverse caber tosser
id: reverse-caber-tosser
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A storage mechanism for data feeding a
  [universal constructor](/patterns/universal-constructor) designed by Adam P. Goucher in 2018.  A very
  large integer can be encoded in the position of a very faraway
  object.  If the distance to that object is measured using [circuit](/patterns/circuit)ry
  designed to be as simple as possible, a complete decoder and
  universal constructor can be created by colliding a small number of
  gliders - no more than 329 according to a June 2018
  [glider synthesis](/patterns/glider-synthesis), and exactly 43 according to a July 1 redesign by
  Chris Cain using eight far-distant [GPSE](/patterns/gpse)s and, amazingly, no
  stationary circuitry except for a single [catalyst](/patterns/catalyst) [block](/patterns/block).  Some
  intermediate designs with 50+ gliders need no stationary circuitry at
  all.
  With the correct placement of the faraway object, the complete
  pattern is theoretically capable of building any glider-constructible
  object.  This means that 43 is the maximum number of gliders required
  to build any constructible object, no matter what size.  However, it
  is not possible to determine in practice what the locations of these
  43 gliders should be, even for a relatively simple construction.
...
