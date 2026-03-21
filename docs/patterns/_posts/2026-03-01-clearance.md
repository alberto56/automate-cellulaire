---
name: clearance
id: clearance
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  In signal circuitry, the distance from an [edge shooter](/patterns/edge-shooter)
  output [lane](/patterns/lane) to the last unobstructed lane adjacent to the
  edge-shooter circuitry.  For example, an [Fx119 inserter](/patterns/fx119-inserter) has an
  unusually high 27[hd](/patterns/hd) clearance.
  Also, oscillator and eater variants may be said to have better
  clearance if they allow [glider](/patterns/glider)s or other [signal](/patterns/signal)s to pass closer
  to them than the standard variant allows.  The following
  high-clearance [eater1](/patterns/eater1) variant by Karel Suhajda allows gliders to
  pass one lane closer on the southeast side, than is allowed by the
  standard fishhook shape.
variants:
- pattern:
  - '.*......**'
  - '..*..**..*'
  - '***...*.*.'
  - '......*.**'
  - '...**.*...'
  - '...*..*...'
  - '....**....'
  description: |
    This is considered to be a variant of the eater1 because the
    reaction's [rotor](/patterns/rotor) is exactly the same, even though three cells in
    this variant are too overpopulated to allow a birth, instead of
    underpopulated as in a standard eater1 glider-eating reaction.
...
