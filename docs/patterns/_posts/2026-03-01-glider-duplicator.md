---
name: glider duplicator
id: glider-duplicator
permalink: /patterns/glider-duplicator
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any reaction in which one input [glider](/patterns/glider) is
  converted into two output gliders.  This can be done by [oscillator](/patterns/oscillator)s
  or [spaceship](/patterns/spaceship)s, or by [Herschel conduit](/patterns/herschel-conduit)s or other [signal](/patterns/signal)
  [circuit](/patterns/circuit)ry such as the [stable](/patterns/stable) example shown under [splitter](/patterns/splitter).  The
  most useful glider duplicators are those with low [period](/patterns/period)s.
  The following period 30 glider duplicator demonstrates a simple
  mechanism found by Dieter Leithner.  The input glider stream comes in
  from the upper left, and the output glider streams leave at the upper
  and lower right.  One of the output glider streams is inverted, so an
  [inverting reflector](/patterns/inverting-reflector) is required to complete the duplicator.  To
  produce non-parallel output, an [inline inverter](/patterns/inline-inverter) could be
  substituted for the northmost p30 glider gun.
variants:
- pattern:
  - '.......*....**.......................**.........'
  - '........*....*.......................**.........'
  - '......***....*.*.......*..........**......*...**'
  - '..............**.......*.*.......***.....*...*.*'
  - '..........................**......**......*****.'
  - '..........................**.........**....***..'
  - '..........................**.........**.........'
  - '.......................*.*......................'
  - '.......................*........................'
  - '................................................'
  - '................................................'
  - '........................**......................'
  - '........................**......................'
  - '................................................'
  - '................................................'
  - '................................................'
  - '.........................***....................'
  - '...........................*....................'
  - '..........................*.....................'
  - '................................................'
  - '................................................'
  - '.........*.*....................................'
  - '.......*...*.....***............................'
  - '**.....*.......*.*..*..**.......................'
  - '**....*....*.......**..*..*.....................'
  - '.......*...................*....................'
  - '.......*...*..***..........*....................'
  - '.........*.*...............*....................'
  - '.......................*..*.....**..............'
  - '.......................**.......*.*.............'
  - '..................................*.............'
  - '..................................**............'
  description: |
    Spaceship [convoy](/patterns/convoy)s that can duplicate gliders are very useful
    since they (along with [glider turner](/patterns/glider-turner)s) provide a means to clean up
    many dirty puffers by duplicating and turning output gliders so as to
    impact into the [exhaust](/patterns/exhaust) to clean it up.
    Glider duplicators and turners are known for backward gliders using
    p2 c/2 spaceships, and for forward gliders using p3 c/3 spaceships.
    These are the most general duplicators for these speeds.
...
