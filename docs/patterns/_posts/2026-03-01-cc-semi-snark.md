---
name: CC semi-Snark
id: cc-semi-snark
permalink: /patterns/cc-semi-snark
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A small 90-degree [colour-changing](/patterns/colour-changing) [glider reflector](/patterns/glider-reflector)
  requiring two input gliders on the same lane for each output glider.
  It was discovered by Sergei Petrov on 1 July 2013, using a
  custom-written search utility.  It functions as a very compact
  [period doubler](/patterns/period-doubler) in some [signal](/patterns/signal) [circuit](/patterns/circuit)ry, for example the
  [linear propagator](/patterns/linear-propagator).  The semi-Snark can period-double a regular
  glider [stream](/patterns/stream) of period 51 or more, or an [intermittent stream](/patterns/intermittent-stream)
  with two gliders every 67 ticks or more, since the block reset glider
  can be sent just 16 ticks before its partner.
variants:
- pattern:
  - '......*..........**'
  - '.......**........*.'
  - '......**.......*.*.'
  - '...............**..'
  - '..........*........'
  - '**.........**......'
  - '**........**.......'
  - '...................'
  - '...................'
  - '.................**'
  - '..........**.....**'
  - '..........**.......'
  - '...................'
  - '.....*.............'
  - '....*.*............'
  - '....**......**.....'
  - '............*......'
  - '.............***...'
  - '...............*...'
...
