---
name: caber tosser
id: caber-tosser
permalink: /patterns/caber-tosser
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any pattern whose [population](/patterns/population) is asymptotic to c.log(t)
  for some constant c, and which contains a [glider](/patterns/glider) (or other
  [spaceship](/patterns/spaceship)) bouncing between a slower receding spaceship and a fixed
  [reflector](/patterns/reflector) which emits a spaceship (in addition to the reflected
  one) whenever the bouncing spaceship hits it.
  As the receding spaceship gets further away the bouncing spaceship
  takes longer to complete each cycle, and so the extra spaceships
  emitted by the reflector are produced at increasingly large
  intervals.  More precisely, if v is the speed of the bouncing
  spaceship and u the speed of the receding spaceship, then each
  interval is (v+u)/(v-u) times as long as the previous one.  The
  population at time t is therefore n.log(t)/log((v+u)/(v-u)) + O(1),
  where n is the population of one of the extra spaceships (assumed
  constant).
  The first caber tosser was built by Dean Hickerson in May 1991.
...
