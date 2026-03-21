---
name: converter
id: converter
permalink: /patterns/converter
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [conduit](/patterns/conduit) in which the input object is not of the same
  type as the output object.  This term tends to be preferred when
  either the input object or the output object is a [spaceship](/patterns/spaceship).
  The following diagram shows a p8 [pi-heptomino](/patterns/pi-heptomino)-to-[HWSS](/patterns/hwSs)
  converter.  This was originally found by Dave Buckingham in a larger
  form (using a [figure-8](/patterns/figure-8) instead of the [boat](/patterns/boat)).  The improvement
  shown here is by Bill Gosper (August 1996).  Dieter Leithner has
  since found (much larger) [oscillator](/patterns/oscillator)s of periods 44, 46 and 60 that
  can be used instead of the [Kok's galaxy](/patterns/kok-s-galaxy).
variants:
- pattern:
  - '.*.*..*........'
  - '.***.*.**......'
  - '*......*.....*.'
  - '.*.....**...*.*'
  - '.............**'
  - '**.....*.......'
  - '.*......*......'
  - '**.*.***.......'
  - '..*..*.*.......'
  - '............***'
  - '............*.*'
  - '............*.*'
  description: |
    For another periodic converter, see the glider-to-LWSS example in
    [queen bee shuttle pair](/patterns/queen-bee-shuttle-pair).  However, many converters are [stable](/patterns/stable).
    Examples of [elementary conduit](/patterns/elementary-conduit) converters include [BFx59H](/patterns/bfx59h),
    [135-degree MWSS-to-G](/patterns/135-degree-mwSs-to-g), and [45-degree MWSS-to-G](/patterns/45-degree-mwSs-to-g).
    The earliest and simplest stable converters known are shown below.
    These are an HWSS-to-loaf, MWSS-to-beehive, and LWSS-to-blinker.
    These can serve as [memory cell](/patterns/memory-cell)s, or as the first steps in
    constructing objects using [salvo](/patterns/salvo)s.
- pattern:
  - '.........................*..............................'
  - '..**...................*...*.................*..*.......'
  - '*....*......................*....................*......'
  - '......*................*....*................*...*......'
  - '*.....*.................*****.................****......'
  - '.******.................................................'
  - '.........**....................**...................**..'
  - '.........*.*...................*....................*...'
  - '...........*....................***..................***'
  - '...........**.....................*....................*'
...
