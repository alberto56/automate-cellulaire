---
name: wickstretcher
id: wickstretcher
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [spaceship](/patterns/spaceship)-like object which stretches a [wick](/patterns/wick) that
  is fixed at the other end.  The wick here is assumed to be in some
  sense connected, otherwise most [puffer](/patterns/puffer)s would qualify as
  wickstretchers.  The first example of a wickstretcher was found in
  October 1992 (front end by Hartmut Holzwart and back end by Dean
  Hickerson) and stretches [ants](/patterns/ants) at a speed of c/4.  This is shown
  below with an improved back end found by Hickerson the following
  month.
variants:
- pattern:
  - '.................**..............................'
  - '.............**....*.............................'
  - '............***.*................................'
  - '*.**..**...*...****.*.*....**.......**...........'
  - '*....**..*........*.***....*....**.*..*.**.*.....'
  - '*.**....**.**....*...........*...*.*.**.*.**.....'
  - '......*.......*.............**.....*..*.*...**...'
  - '.....*.........*.*....***...*....*..*.*.***...*..'
  - '.....*.........*.*....***.**.*..**.*.*...*..**.*.'
  - '......*.......*.............**.*...**....**....*.'
  - '*.**....**.**....*..........*........**.*.*.**.**'
  - '*....**..*........*.***........*...*...**.*..*.*.'
  - '*.**..**...*...****.*.*.......*.*...**....*..*.*.'
  - '............***.*..............*.....*.***....*..'
  - '.............**....*.................*.*.........'
  - '.................**...................*..........'
  description: |
    Diagonally moving c/4 and c/12 wickstretchers have also been built:
    see [tubstretcher](/patterns/tubstretcher) and [linestretcher](/patterns/linestretcher).  In July 2000 Jason Summers
    constructed a c/2 wickstretcher, stretching a p50 [traffic jam](/patterns/traffic-jam) wick,
    based on an earlier (October 1994) pattern by Hickerson.  A c/5
    diagonal wickstretcher was found in January 2011 by Matthias
    Merzenich, who also discovered a c/5 orthogonal wickstretcher two
    years later in March 2013.
...
