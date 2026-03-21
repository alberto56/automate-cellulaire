---
name: half-baked knightship
id: half-baked-knightship
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  ((6,3)c/2621440, p2621440)  A [self-supporting](/patterns/self-supporting)
  [macro-spaceship](/patterns/macro-spaceship) with adjustable period but fixed direction, based
  on the [half-bakery reaction](/patterns/half-bakery-reaction).  This was the first spaceship based on
  this reaction, constructed in December 2014 by Adam P. Goucher. It
  moves 6 cells horizontally and 3 cells vertically every 2621440+8N
  ticks, depending on the relative spacing of the two halves.  It is
  one of the slowest known [knightship](/patterns/knightship)s, and the first one that was
  not a [Geminoid](/patterns/geminoid). Chris Cain optimized the design a few days later to
  create the [Parallel HBK](/patterns/parallel-hbk).
  The spaceship produces gliders from near-diagonal lines of
  half-bakeries, which collide with each other at 180 degrees.  These
  collisions produce [monochromatic salvo](/patterns/monochromatic-salvo)s that gradually build and
  trigger [seed](/patterns/seed)s, which in turn eventually construct small
  [synchronized](/patterns/synchronized) [salvo](/patterns/salvo)s of gliders.  These re-activate the lines of
  half-bakeries, thus closing the cycle and moving the entire spaceship
  obliquely by (6,3).
...
