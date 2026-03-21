---
name: phase change
id: phase-change
permalink: /patterns/phase-change
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [perturbation](/patterns/perturbation) of a periodic object that causes the
  object to skip forward or backward by one or more [phase](/patterns/phase)s.  If the
  perturbation is repeated indefinitely, this can effectively change
  the [period](/patterns/period) of the object.  An example of this, found by Dean
  Hickerson in November 1998, is shown below.  In this example, the
  period of the [oscillator](/patterns/oscillator) would be 7 if the [mold](/patterns/mold) were removed, but
  the period is increased to 8 because of the repeated phase changes
  caused by the mold's [spark](/patterns/spark).
variants:
- pattern:
  - '..........*....'
  - '.........*.**..'
  - '..**.........*.'
  - '..*......*..*.*'
  - '.......*...*..*'
  - '******.*....**.'
  - '*..............'
  - '.**.**...**....'
  - '..*.*....*.*...'
  - '..*.*......*...'
  - '...*.......**..'
  description: |
    The following pattern demonstrates a p4 c/2 [spaceship](/patterns/spaceship) found by
    Jason Summers, in which the phase is changed as it deletes a
    [forward glider](/patterns/forward-glider).  This phase change allows the spaceship to be used
    to delete a glider wave produced by a [rake](/patterns/rake) whose period is 2 (mod
    4).
- pattern:
  - '........*...........................'
  - '.......***.**.......................'
  - '......**...*.**.....................'
  - '.....**..*.....*....................'
  - '......*.....*...*.***...............'
  - '.....**.....*...*.*..*..............'
  - '...**.*.**....*.*.*...*.............'
  - '....*.*..**...........*.............'
  - '.**.*..*..*.........*...............'
  - '.**.*.....**.........*.***..........'
  - '.*.*.............***.*.*.**.........'
  - '**.**...........**.*..*.*.*.........'
  - '..............**.*...***..**.....**.'
  - '.............*...*......*........*.*'
  - '............*.....*..**.*.**.....*..'
  - '...........*..*.*......*.*..........'
  - '...........*.....**....***..........'
  - '.............*..........*...........'
  - '..........*.*...........*...........'
  - '.........**.*.***...................'
  - '........*.*.*...*...................'
  - '.......**.*.........................'
  - '......*...*.....**..................'
  - '....................................'
  - '......**.**.........................'
  description: |
    Phase changing reactions have enabled the construction of
    spaceships having periods that were otherwise unknown, and also allow
    the construction of period-doubling and period-tripling [convoy](/patterns/convoy)s to
    easily produce very high period rakes.
    See also [blinker puffer](/patterns/blinker-puffer).
...
