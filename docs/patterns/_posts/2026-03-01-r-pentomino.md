---
name: R-pentomino
id: r-pentomino
permalink: /patterns/r-pentomino
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  This is by far the most active [polyomino](/patterns/polyomino) with less than
  six cells: all the others stabilize in at most 10 generations, but
  the R-pentomino does not do so until generation 1103, by which time
  it has a [population](/patterns/population) of 116, including six [glider](/patterns/glider)s.
variants:
- pattern:
  - '.**'
  - '**.'
  - '.*.'
  description: |
    At generation 774, an R-pentomino produces a [queen bee](/patterns/queen-bee) which lasts
    17 more generations before being destroyed, enough time for it to
    flip over.  This observation led to the discovery of the
    [Gosper glider gun](/patterns/gosper-glider-gun).
...
