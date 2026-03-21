---
name: pseudo still life
id: pseudo-still-life
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [stable](/patterns/stable) pattern whose live cells are either
  immediately adjacent to each other, or are connected into a single
  group by adjacent dead cells where birth is suppressed by
  overpopulation.
  The definition of [strict still life](/patterns/strict-still-life) rules out such stable
  patterns as the [bi-block](/patterns/bi-block).  In such patterns there are dead cells
  which have more than 3 neighbours in total, but fewer than 3 in any
  component still life.  These patterns are called pseudo still lifes,
  and have been enumerated up to 32 bits, as shown in the table below.
  ```
  --------------
  Bits    Number
  --------------
  8           1
  9           1
  10           7
  11          16
  12          55
  13         110
  14         279
  15         620
  16        1645
  17        4067
  18       10843
  19       27250
  20       70637
  21      179011
  22      462086
  23     1184882
  24     3068984
  25     7906676
  26    20463274
  27    52816265
  28   136655095
  29   353198379
  30   914075620
  31  2364815358
  32  6123084116
  --------------
  ```
  Attribution of these counts is given in [strict still life](/patterns/strict-still-life); see
  also [https://oeis.org/A056613](/patterns/https://oeis.org/a056613).  The unique 32-bit [triple pseudo](/patterns/triple-pseudo)
  still life is included in the last count in the table.  As the number
  of bits increases, the pseudo still life count goes up exponentially
  by approximately O(2.56^n).  By comparison, the rate for
  [strict still life](/patterns/strict-still-life)s is about O(2.46^n) while for [quasi still life](/patterns/quasi-still-life)s
  it's around O(3.04^n).
  If a stable pattern's live cells plus its overpopulated dead cells
  do not form a single mutually adjacent group, the pattern is usually
  referred to as a [constellation](/patterns/constellation).  It is also a [still life](/patterns/still-life) in the
  general sense, but is neither "pseudo" nor "strict".
...
