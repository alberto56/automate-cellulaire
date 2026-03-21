---
name: non-monotonic
id: non-monotonic
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [spaceship](/patterns/spaceship) is said to be non-monotonic if its
  leading edge falls back in some generations.  The first example
  (shown below) was found by Hartmut Holzwart in August 1992.  This is
  p4 and travels at c/4.  In April 1994, Holzwart found examples of p3
  spaceships with this property, and this is clearly the smallest
  possible period.  Another non-monotonic spaceship is the [weekender](/patterns/weekender).
variants:
- pattern:
  - '..........**.*.......'
  - '......***.*.***......'
  - '..*.*..........*...**'
  - '**....**.....*...****'
  - '..*.**..*....***.*...'
  - '........*....*.......'
  - '..*.**..*....***.*...'
  - '**....**.....*...****'
  - '..*.*..........*...**'
  - '......***.*.***......'
  - '..........**.*.......'
...
