---
name: 2-glider collision
id: 2-glider-collision
permalink: /patterns/2-glider-collision
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Two gliders can react with each other in many
  different ways, either at right angles, or else head-on.  A large
  number of the reactions cleanly destroy both gliders leaving nothing.
  Many of the remaining reactions cleanly create some common objects,
  and so are used as the first steps in [glider synthesis](/patterns/glider-synthesis) or as part
  of constructing interesting objects using [rake](/patterns/rake)s.  Only a small
  number of collisions can be considered [dirty](/patterns/dirty) due to creating
  multiple objects or a mess.
  Here is a list of the possible results along with how many
  different ways they can occur (ignoring reflections and rotations).
  -------------------------------
  result     right-angle  head-on
  -------------------------------
  nothing             11       17
  [beehive](/patterns/beehive)            1        0
  [B-heptomino](/patterns/b-heptomino)        1        2
  [bi-block](/patterns/bi-block)           1        0
  [blinker](/patterns/blinker)            2        1
  [block](/patterns/block)              3        3
  [boat](/patterns/boat)               0        1
  [eater1](/patterns/eater1)             1        0
  [glider](/patterns/glider)             1        1
  [honey farm](/patterns/honey-farm)         3        2
  [interchange](/patterns/interchange)        1        0
  [loaf](/patterns/loaf)               0        1
  [lumps of muck](/patterns/lumps-of-muck)      1        0
  [octomino](/patterns/octomino)           0        1
  [pi-heptomino](/patterns/pi-heptomino)       2        1
  [pond](/patterns/pond)               1        1
  [teardrop](/patterns/teardrop)           1        0
  [traffic light](/patterns/traffic-light)      2        1
  [four skewed blocks](/patterns/four-skewed-blocks) 0        1
  [dirty](/patterns/dirty)              6        0
  -------------------------------
  The messiest of the two-glider collisions in the "dirty" category is
  [2-glider mess](/patterns/2-glider-mess).
...
