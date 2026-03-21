---
name: slow glider construction
id: slow-glider-construction
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Construction an object by a "slow salvo" of
  [glider](/patterns/glider)s all coming from the same direction, in such a way that
  timing of the gliders does not matter as long as they are not too
  close behind one another.  This type of construction requires an
  initial seed object, such as a [block](/patterns/block), which is modified by each
  glider in turn until the desired object is produced.
  In May 1997, Nick Gotts produced a slow glider construction of a
  block-laying switch engine from a block, using a slow salvo of 53
  gliders.  Constructions like this are important in the study of
  [sparse Life](/patterns/sparse-life), as they will occur naturally as gliders created in the
  first few generations collide with [blonk](/patterns/blonk)s and other debris.
  Slow glider constructions are also useful in some designs for
  [universal constructor](/patterns/universal-constructor)s.  However, in this case the above definition
  is usually too restrictive, and it is desirable to allow
  constructions in which some gliders in the salvo are required to have
  a particular timing modulo 2 (a "p2 slow salvo").  This gives much
  greater flexibility, as [blinker](/patterns/blinker)s can now be freely used in the
  intermediate construction steps.  The [Snarkmaker](/patterns/snarkmaker) is a very large p2
  slow salvo.  A much smaller example is the following [edgy](/patterns/edgy)
  construction of an [eater1](/patterns/eater1) starting from a block.
variants:
- pattern:
  - '.*..***...............................................'
  - '**..*.................................................'
  - '.....*................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '................***...................................'
  - '................*.....................................'
  - '.................*....................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '.......................***............................'
  - '.......................*..............................'
  - '........................*.............................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '......................................................'
  - '..............................*.......................'
  - '........................*....**.......................'
  - '.......................**....*.*......................'
  - '.......................*.*............................'
  - '......................................................'
  - '......................................................'
  - '..........................*...........................'
  - '.........................**...........................'
  - '.........................*.*..........................'
  - '......................................................'
  - '.............................***....................**'
  - '.............................*.....................**.'
  - '..............................*......................*'
  description: |
    Adam P. Goucher's [slmake](/patterns/slmake) [search program](/patterns/search-program), made available in May
    2017, makes it much easier to find a slow glider construction for a
    wide variety of [stable](/patterns/stable) [circuit](/patterns/circuit)ry.
...
