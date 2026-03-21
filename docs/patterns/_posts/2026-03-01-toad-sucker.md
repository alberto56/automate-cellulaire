---
name: toad-sucker
id: toad-sucker
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [toad](/patterns/toad) [hassler](/patterns/hassler) that works in the manner of the
  following example.  Two [domino](/patterns/domino) [sparker](/patterns/sparker)s, here [pentadecathlon](/patterns/pentadecathlon)s,
  apply their [spark](/patterns/spark)s to the toad in order to shift it.  When the
  sparks are applied again it is shifted back.  Either or both domino
  sparkers can be moved down two spaces from the position shown and the
  toad-sucker will still work, but because of symmetry there are really
  only three different types.  Compare [toad-flipper](/patterns/toad-flipper).
variants:
- pattern:
  - '.*................'
  - '.*..............*.'
  - '*.*.............*.'
  - '.*.............*.*'
  - '.*......*.......*.'
  - '.*......**......*.'
  - '.*......**......*.'
  - '*.*......*......*.'
  - '.*.............*.*'
  - '.*..............*.'
  - '................*.'
...
