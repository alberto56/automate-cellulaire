---
name: spaceship
id: spaceship
permalink: /patterns/spaceship
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any finite pattern that reappears (without additions or
  losses) after a number of generations and displaced by a non-zero
  amount.  By far the most [natural](/patterns/natural) spaceships are the [glider](/patterns/glider),
  [LWSS](/patterns/lwSs), [MWSS](/patterns/mwSs) and [HWSS](/patterns/hwSs), followed by the [Coe ship](/patterns/coe-ship) which has also
  evolved multiple times from random asymmetric [soup](/patterns/soup) starting
  conditions.  See also the entries on individual spaceship speeds:
  [c/2 spaceship](/patterns/c-2-spaceship), [c/3 spaceship](/patterns/c-3-spaceship), [c/4 spaceship](/patterns/c-4-spaceship), [c/5 spaceship](/patterns/c-5-spaceship),
  [c/6 spaceship](/patterns/c-6-spaceship), [c/7 spaceship](/patterns/c-7-spaceship), [c/10 spaceship](/patterns/c-10-spaceship), [c/12 spaceship](/patterns/c-12-spaceship),
  [2c/5 spaceship](/patterns/2c-5-spaceship),  [2c/7 spaceship](/patterns/2c-7-spaceship), [3c/7 spaceship](/patterns/3c-7-spaceship),
  [(2,1)c/6 spaceship](/patterns/-2-1-c-6-spaceship), and [17c/45 spaceship](/patterns/17c-45-spaceship).
  It is known that there exist spaceships travelling in all rational
  directions and at arbitrarily slow speeds (see
  [universal constructor](/patterns/universal-constructor)).  Before 1989, however, the only known
  examples travelled at c/4 diagonally (gliders) or c/2 orthogonally
  (everything else).
  In 1989 Dean Hickerson started to use automated searches to look
  for new [elementary](/patterns/elementary) spaceships, and had considerable success.  Other
  people have continued these searches using tools such as [lifesrc](/patterns/lifesrc)
  and [gfind](/patterns/gfind), and as a result we now have a great variety of
  elementary spaceships travelling at sixteen different velocities.
  The following table details the discovery of elementary spaceships
  with new velocities as of July 2018.
  ```
  -------------------------------------------------------------------
  Speed    Direction  First Discovery     Discoverer
    Date
    -------------------------------------------------------------------
  c/4      diagonal   [glider](/patterns/glider)            Richard Guy
    1970
  c/2      orthogonal [LWSS](/patterns/lwSs)              John Conway
    1970
  c/3      orthogonal [25P3H1V0.1](/patterns/25p3h1v0.1)        Dean Hickerson     Aug
    1989
  c/4      orthogonal [119P4H1V0](/patterns/119p4h1v0)         Dean Hickerson     Dec
    1989
  c/12     diagonal   [Cordership](/patterns/cordership)        Dean Hickerson     Apr
    1991
  2c/5     orthogonal [44P5H2V0](/patterns/44p5h2v0)          Dean Hickerson     Jul
    1991
  c/5      orthogonal [snail](/patterns/snail)             Tim Coe            Jan
    1996
  2c/7     orthogonal [weekender](/patterns/weekender)         David Eppstein     Jan
    2000
  c/6      orthogonal [dragon](/patterns/dragon)            Paul Tooke         Apr
    2000
  c/5      diagonal   [295P5H1V1](/patterns/295p5h1v1)         Jason Summers      Nov
    2000
  c/6      diagonal   [seal](/patterns/seal)              Nicolay Beluchenko Sep
    2005
  c/7      diagonal   [lobster](/patterns/lobster)           Matthias Merzenich Aug
    2011
  c/7      orthogonal [loafer](/patterns/loafer)            Josh Ball          Feb
    2013
  c/10     orthogonal [copperhead](/patterns/copperhead)        zdr                Mar
    2016
  3c/7     orthogonal [spaghetti monster](/patterns/spaghetti-monster) Tim Coe            Jun
    2016
  (2,1)c/7 oblique    [Sir Robin](/patterns/sir-robin)         Adam P. Goucher    Mar
  2018
  -------------------------------------------------------------------
  ```
  Several infinite families of adjustable-velocity [macro-spaceship](/patterns/macro-spaceship)s
  have also been constructed, of which the first was Gabriel Nivasch's
  [Caterpillar](/patterns/caterpillar) from December 2004.  The macro-spaceship with the
  widest range of possible speeds is Michael Simkin's [Caterloopillar](/patterns/caterloopillar)
  from April 2016; in theory it supports any rational orthogonal speed
  strictly less than c<4.  A somewhat similar design supporting any
  rational speed strictly less than c/2 has been shown to be feasible,
  but as of July 2018 no explicit examples have been constructed.
  A period p spaceship that displaces itself (m,n) during its period,
  where m>=n, is said to be of type (m,n)/p.  It was proved by Conway
  in 1970 that p>=2m+2n.  (This follows immediately from the
  easily-proved fact that a pattern cannot advance diagonally at a rate
  greater than one half diagonal step every other generation.)
...
