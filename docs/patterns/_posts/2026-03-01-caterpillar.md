---
name: Caterpillar
id: caterpillar
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [spaceship](/patterns/spaceship) that works by laying tracks at its front
  end.  The first example constructed was a p270 17c/45 spaceship built
  by Gabriel Nivasch in December 2004, based on work by himself, Jason
  Summers and David Bell.  This Caterpillar has a population of about
  12 million in each generation and was put together by a computer
  program that Nivasch wrote.  At the time it was by far the largest
  and most complex Life object ever constructed, and it is still one of
  the largest in terms of population.
  The 17c/45 Caterpillar is based on the following reaction between a
  [pi-heptomino](/patterns/pi-heptomino) and a [blinker](/patterns/blinker).
variants:
- pattern:
  - '...............*'
  - '*.............**'
  - '*............**.'
  - '*.............**'
  - '...............*'
  description: |
    In this reaction, the pi moves forward 17 cells in the course of 45
    generations, while the blinker moves back 6 cells and is rephased.
    This reaction has been known for many years, but it was only in
    September 2002 that David Bell suggested that it could be used to
    build a 17c/45 spaceship, based on a reaction he had found in which
    pi-heptominoes crawling along two rows of blinkers interact to emit a
    glider every 45 generations.  Similar glider-emitting interactions
    were later found by Gabriel Nivasch and Jason Summers.  The basic
    idea of the spaceship design is that streams of gliders created in
    this way can be used to construct fleets of [standard spaceship](/patterns/standard-spaceship)s
    which convey gliders to the front of the blinker tracks, where they
    can be used to build more blinkers.
    A different Caterpillar may be possible based on the following
    reaction, in which the pattern at top left reappears after 31
    generations displaced by (13,1), having produced a new NW-travelling
    glider.  In this case the tracks would be waves of backward-moving
    gliders.
- pattern:
  - '.**.....................'
  - '...*....................'
  - '...*.**.................'
  - '***....*................'
  - '.......*................'
  - '.....***................'
  - '........................'
  - '........................'
  - '........................'
  - '........................'
  - '........................'
  - '........................'
  - '.....................***'
  - '.....................*..'
  - '......................*.'
  description: |
    For other Caterpillar-type constructions see [Centipede](/patterns/centipede),
    [waterbear](/patterns/waterbear), [half-baked knightship](/patterns/half-baked-knightship), and [Caterloopillar](/patterns/caterloopillar).
...
