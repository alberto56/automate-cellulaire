---
name: quasi still life
id: quasi-still-life
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [stable](/patterns/stable) [constellation](/patterns/constellation) where the individual
  [still life](/patterns/still-life)s share dead cells, so the neighborhoods of those dead
  cells are changed, but all cells that used to remain dead from
  under-population still do so.  Under Life rules, this occurs when
  objects are diagonally adjacent (e.g., two [block](/patterns/block)s sharing a single
  diagonal neighbor) or when single protruding cells in two objects
  such as [tub](/patterns/tub)s share multiple neighbors.  The term is due to Mark
  Niemiec.
  ```
  ----------------
  Bits       Count
  ----------------
  8             6
  9            13
  10            57
  11           141
  12           465
  13          1224
  14          3956
  15         11599
  16         36538
  17        107415
  18        327250
  19        972040
  20       2957488
  21       8879327
  22      26943317
  ----------------
  ```
  As the number of bits increases, the quasi still life count goes up
  exponentially by approximately O(3.04^n), slightly more than a factor
  of three.  By comparison, the rate for [strict still life](/patterns/strict-still-life)s is about
  O(2.46^n) while for [pseudo still life](/patterns/pseudo-still-life)s it's around O(2.56^n).
...
