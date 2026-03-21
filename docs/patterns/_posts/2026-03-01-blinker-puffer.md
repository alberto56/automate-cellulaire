---
name: blinker puffer
id: blinker-puffer
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any [puffer](/patterns/puffer) whose output is [blinker](/patterns/blinker)s.  However, the
  term is particularly used for p8 c/2 puffers.  The first such blinker
  puffer was found by Robert Wainwright in 1984, and was unexpectedly
  simple.
variants:
- pattern:
  - '...*.....'
  - '.*...*...'
  - '*........'
  - '*....*...'
  - '*****....'
  - '.........'
  - '.........'
  - '.........'
  - '.**......'
  - '**.***...'
  - '.****....'
  - '..**.....'
  - '.........'
  - '.....**..'
  - '...*....*'
  - '..*......'
  - '..*.....*'
  - '..******.'
  description: |
    Since then many more blinker puffers have been found.  The following
    one was found by David Bell in 1992 when he was trying to extend an
    [x66](/patterns/x66).
- pattern:
  - '.............***.'
  - '............*****'
  - '...........**.***'
  - '............**...'
  - '.................'
  - '.................'
  - '.........*.*.....'
  - '..*.....*..*.....'
  - '.*****...*.*.....'
  - '**...**.**.......'
  - '.*.......*.......'
  - '..**..*..*.......'
  - '..........*......'
  - '..**..*..*.......'
  - '.*.......*.......'
  - '**...**.**.......'
  - '.*****...*.*.....'
  - '..*.....*..*.....'
  - '.........*.*.....'
  - '.................'
  - '.................'
  - '............**...'
  - '...........**.***'
  - '............*****'
  - '.............***.'
  description: |
    The importance of this larger blinker puffer (and others like it), is
    that the engine which produces the blinker output is only p4.  The
    blinker row produced by the puffer can easily be ignited, and the
    resulting [blinker fuse](/patterns/blinker-fuse) burns cleanly with a speed of 2c/3.  When
    the burning catches up to the engine, it causes a [phase change](/patterns/phase-change) in
    the puffer.  This fact allows p8 blinker puffers to be used to
    construct rakes of all periods which are large multiples of four.
...
