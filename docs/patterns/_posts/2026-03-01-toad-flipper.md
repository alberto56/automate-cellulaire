---
name: toad-flipper
id: toad-flipper
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [toad](/patterns/toad) [hassler](/patterns/hassler) that works in the manner of the
  following example.  Two [domino](/patterns/domino) [sparker](/patterns/sparker)s, here [pentadecathlon](/patterns/pentadecathlon)s,
  apply their [spark](/patterns/spark)s to the toad in order to flip it over.  When the
  sparks are applied again it is flipped back.  Either or both domino
  sparkers can be moved down two spaces from the position shown and the
  toad-flipper will still work, but because of symmetry there are
  really only two different types.  Compare [toad-sucker](/patterns/toad-sucker).
variants:
- pattern:
  - '.*..............*.'
  - '.*..............*.'
  - '*.*............*.*'
  - '.*..............*.'
  - '.*......*.......*.'
  - '.*......**......*.'
  - '.*......**......*.'
  - '*.*......*.....*.*'
  - '.*..............*.'
  - '.*..............*.'
...
