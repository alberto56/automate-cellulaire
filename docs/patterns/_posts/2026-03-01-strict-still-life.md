---
name: strict still life
id: strict-still-life
permalink: /patterns/strict-still-life
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [still life](/patterns/still-life) that is either a single connected
  [polyplet](/patterns/polyplet), or is arranged such that a [stable](/patterns/stable) smaller pattern
  cannot be formed by removing one or more of its [island](/patterns/island)s. For
  example, [beehive with tail](/patterns/beehive-with-tail) is a strict still life because it is
  connected, and [table on table](/patterns/table-on-table) is a strict still life because
  neither of the [table](/patterns/table)s are stable by themselves.  See also
  [triple pseudo](/patterns/triple-pseudo), [quad pseudo](/patterns/quad-pseudo).
  Still lifes have been enumerated by Conway (4-7 bits), Robert
  Wainwright (8-10 bits), Dave Buckingham (11-13 bits), Peter Raynham
  (14 bits), Mark Niemiec (15-24 bits), and Simon Ekstrom and Nathaniel
  Johnston (25-32 bits).  The resulting figures are shown below; see
  also [https://oeis.org/A019473](https://oeis.org/a019473).  The most recent search by Nathaniel
  Johnston has also confirmed that the [triple pseudo](/patterns/triple-pseudo) pattern found by
  Gabriel Nivasch is the only such still life with 32 bits or less.  It
  is therefore included in the pseudo still life count and not in the
  table below.
  ```
  --------------
  Bits    Number
  --------------
  4           2
  5           1
  6           5
  7           4
  8           9
  9          10
  10          25
  11          46
  12         121
  13         240
  14         619
  15        1353
  16        3286
  17        7773
  18       19044
  19       45759
  20      112243
  21      273188
  22      672172
  23     1646147
  24     4051711
  25     9971377
  26    24619307
  27    60823008
  28   150613157
  29   373188952
  30   926068847
  31  2299616637
  32  5716948683
  --------------
  ```
  As the number of bits increases, the strict still life count goes
  up exponentially by approximately O(2.46^n).  By comparison, the rate
  for pseudo still life}s is about O(2.56^n) while for
  [quasi still life](/patterns/quasi-still-life)s it's around O(3.04^n).
...
