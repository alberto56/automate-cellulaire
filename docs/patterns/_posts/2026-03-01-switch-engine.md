---
name: switch engine
id: switch-engine
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The following pattern discovered by Charles Corderman
  in 1971, which is a [glide symmetric](/patterns/glide-symmetric) unstable [puffer](/patterns/puffer) which moves
  diagonally at a speed of c/12 (8 cells every 96 generations).
variants:
- pattern:
  - '.*.*..'
  - '*.....'
  - '.*..*.'
  - '...***'
  description: |
    The [exhaust](/patterns/exhaust) is [dirty](/patterns/dirty) and unfortunately catches up and destroys the switch engine before it runs 13 full periods.  Corderman found several ways to stabilize the switch engine to produce [puffer](/patterns/puffer)s, using either one or two switch engines in tandem.  See [stabilized switch engine](/patterns/stabilized-switch-engine) and [ark](/patterns/ark).
    No [spaceship](/patterns/spaceship)s were able to be made from switch engines until Dean
    Hickerson found the first one in April 1991 (see [Cordership](/patterns/cordership)).
    Switch engine [technology](/patterns/technology) is now well-advanced, producing many c/12
    diagonal spaceships, puffers, and rakes of many periods.
    Small [polyomino](/patterns/polyomino)es exist whose [evolution](/patterns/evolution) results in a switch
    engine. See [nonomino switch engine predecessor](/patterns/nonomino-switch-engine-predecessor).
    Several three-glider collisions produce [dirty](/patterns/dirty) reactions that
    produce a stabilized switch engine along with other [ash](/patterns/ash), making
    [infinite growth](/patterns/infinite-growth).  Until recently the only known syntheses for
    [clean](/patterns/clean) unstabilized switch engines used four or more gliders.  There
    are several such recipes.  In the reaction shown below no glider
    arrives from the direction that the switch engine will travel to,
    making it easier to repeat the reaction.
- pattern:
  - '.**................'
  - '..*................'
  - '.*.................'
  - '...................'
  - '.......**..........'
  - '......**...........'
  - '........*..........'
  - '...................'
  - '...................'
  - '...................'
  - '...................'
  - '...................'
  - '...................'
  - '...................'
  - '..**...............'
  - '.*.*...............'
  - '...*...............'
  - '...................'
  - '................***'
  - '................*..'
  - '.................*.'
  description: |
    Running the above for 20 ticks completes a [kickback](/patterns/kickback) reaction with
    the top two gliders, resulting in the three-glider switch engine
    recipe discovered by Luka Okanishi on 12 March 2017.
...
