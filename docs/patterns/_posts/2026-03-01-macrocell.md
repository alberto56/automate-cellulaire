---
name: macrocell
id: macrocell
permalink: /patterns/macrocell
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A format used by [Golly](/patterns/golly) and its [hashlife](/patterns/hashlife) algorithm,
  capable of storing repetitive patterns very efficiently, even if they
  contain a large number of cells.  For example, a filled square 2^167
  cells on a side can be stored in less than three kilobytes in
  macrocell format, or about 800 bytes in compressed macrocell format.
  The square's total population is over a googol, 10^100; the number of
  atoms in the observable universe is only about 10^80.
  This high level of compression is obtained by defining a tree
  structure composed of increasingly large cell "tiles" with
  power-of-two dimensions.  Tile definitions of any size are re-used
  whenever they appear multiple times in a large pattern (at the same
  power-of-two offset).  For example, the following is a macrocell
  encoding of a complex [pseudo still life](/patterns/pseudo-still-life) arrangement of [ship](/patterns/ship)s,
  with a total population over 2500 cells:
  [M2] (golly 3.0)
  #R B3/S2.
  - ".**.**"$    - "*.*.*.*"$    - "**...**"$$    - "**...**"$    - "*.*.*.*"$    - ".**.**"$
  4 0 1 1 1
  5 2 0 2 2
  6 3 3 0 3
  7 4 4 4 4
  The first line after the #R rule line defines a quadtree tile at
  the lowest level - a level-3 tile in this case, meaning a 2^3 square
  area.  At this level the pattern is encoded in a modified ASCII
  format with dollar signs as line separators.  The next line, #2,
  defines a level-4 quadtree tile, made from one empty level-3 tile in
  the northwest corner (0), and three copies of the level-3 tile that
  was defined on the previous line (1).  Lines 3, 4, and 5 similarly
  define level 5, 6, and 7 quadtree tiles by giving the line numbers of
  four tiles of the next lower size.
  Many patterns are only moderately repetitive, so macrocell format
  is somewhat less successful at compressing them.  Certainly most
  patterns are not nearly as regular as the artificial example above:
  there are usually many different tiles defined at each level, not
  just one.  Chaotic patterns, such as [ash](/patterns/ash) from random [soup](/patterns/soup)s,
  usually need so many different tile definitions that they can be
  stored more efficiently using [rle](/patterns/rle) format.
...
