---
name: partial result
id: partial-result
permalink: /patterns/partial-result
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  An intermediate object found by a [search program](/patterns/search-program)
  which might be a substantial part of a complete [spaceship](/patterns/spaceship) or
  [oscillator](/patterns/oscillator), but which isn't complete.
  Running a partial result works for a few generations until the
  [speed of light](/patterns/speed-of-light) corruption from any unfinished edge destroys the
  whole object.  But a partial result can still be used to see whether
  the object (if ever finished) would provide a desired [spark](/patterns/spark) or
  [perturbation](/patterns/perturbation).  If no partial results are found then it is likely
  that no such object exists under the constraints of the search.
  Very large partial results can indicate that there is a good chance
  that the object being searched for might actually exist (but this is
  no guarantee).  Rerunning the search using the partial result as a
  base and relaxing some constraints, widening or adjusting the search
  area, or splitting the object into multiple [arm](/patterns/arm)s might result in
  finding a complete working object.
  As an example, here is a large partial result for a period 6
  [knightship](/patterns/knightship) found by Josh Ball in April 2017.  The first 22 columns
  were rediscovered in 2018 as part of the successful search for
  [Sir Robin](/patterns/sir-robin).  See also [almost knightship](/patterns/almost-knightship) for an earlier small
  example by Eugene Langvagen.
variants:
- pattern:
  - '....***...................'
  - '...*..**..................'
  - '...*....*.................'
  - '..........................'
  - '...***...**.***...........'
  - '.**.*.*....*.**...........'
  - '...*..*....*..**..........'
  - '*..*........*.............'
  - '*....*..**..*..*..........'
  - '.*.***..**...**...........'
  - '...**.*.**.*...*..........'
  - '.........**.***...........'
  - '.........*.....*..........'
  - '............***..***......'
  - '...............*.**.......'
  - '..........**.*...***......'
  - '..........**..*..**.......'
  - '............****...*......'
  - '.............**.*..*......'
  - '...........**.*.*.*.......'
  - '..............*...........'
  - '...........*.......**.....'
  - '............**.....**.....'
  - '..............**.*........'
  - '................***..*.*..'
  - '................**...*....'
  - '.................*........'
  - '..................*****.*.'
  - '...................**..***'
  - '...................**....*'
  - '.......................**.'
...
