---
name: blinker fuse
id: blinker-fuse
permalink: /patterns/blinker-fuse
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [clean](/patterns/clean) [fuse](/patterns/fuse) made from a row of blinkers separated
  by one cell gaps.  The blinker row [wick](/patterns/wick) is usually created by a
  [blinker puffer](/patterns/blinker-puffer).  The fuse can [burn](/patterns/burn) in at least three different
  ways at a speed of [2c/3](/patterns/2c-3) depending on the method used to ignite the
  end of the row of blinkers. This variant has found the most use.  The
  burning advances 12 cells every 18 generations.
variants:
- pattern:
  - '....................................................*.'
  - '.............................................**.*..*.*'
  - '............................................*.*.****.*'
  - '***.***.***.***.***.***.***.***.***.***.***.*.........'
  - '............................................*.*.****.*'
  - '.............................................**.*..*.*'
  - '....................................................*.'
  description: |
    Fuses can also be made with blinker rows which contain occasional two cell gaps, since the burning reaction is able to bridge those gaps.
...
