---
name: transparent lane
id: transparent-lane
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A path through a signal-producing [circuit](/patterns/circuit) that can
  be used to merge signal streams.  The signal is usually a
  [standard spaceship](/patterns/standard-spaceship) such as a [glider](/patterns/glider).  It can either be produced
  by the circuit, or it can come from elsewhere, passing safely through
  on the same [lane](/patterns/lane) without interacting with the circuit.  A good
  example is the NW31 converter, which has two glider outputs on
  transparent lanes.
variants:
- pattern:
  - '.*.......................'
  - '.*.......................'
  - '.*.*.....................'
  - '..**.....................'
  - '.........................'
  - '.........................'
  - '.........................'
  - '.......................**'
  - '.......................**'
  - '.........................'
  - '..*......................'
  - '..*.*....................'
  - '..***....................'
  - '....*....................'
  - '.........................'
  - '.........................'
  - '.........................'
  - '.........................'
  - '.........................'
  - '.........................'
  - '.........................'
  - '.........................'
  - '.............**..........'
  - '.............**..........'
  description: |
    The optional third output shown in [NW31](/patterns/nw31) is non-transparent,
    because the upper [eater1](/patterns/eater1) catalyst would get in the way of a passing
    glider on the same lane.
...
