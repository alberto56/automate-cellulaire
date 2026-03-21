---
name: pseudo-random number generator
id: pseudo-random-number-generator
permalink: /patterns/pseudo-random-number-generator
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A pseudo-random number generator
  (PRNG) is an algorithm that produces a sequence of bits that looks
  random (but cannot really be random, being algorithmically
  determined).
  In Life, the term refers to a PRNG implemented as a Life pattern,
  with the bits represented by the presence or absence of objects such
  as [glider](/patterns/glider)s or [block](/patterns/block)s.  Such a PRNG usually contains gliders or
  other [spaceship](/patterns/spaceship)s in a loop with a feedback mechanism that causes
  later spaceships to interfere with the generation of earlier
  spaceships.  The [period](/patterns/period) can be very high, as a loop of n spaceships
  has 2^n possible states.
...
