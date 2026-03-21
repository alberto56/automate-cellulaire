---
name: speed booster
id: speed-booster
permalink: /patterns/speed-booster
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any mechanism which allows a [signal](/patterns/signal) (indicated by the
  presence or absence of a spaceship) to move faster than the spaceship
  could travel through empty space.  The original speed booster is
  based on p30 [technology](/patterns/technology), and is shown below.
variants:
- pattern:
  - '....................*........................'
  - '.....................*.......................'
  - '...................***.......................'
  - '.............................................'
  - '...........................*.*...............'
  - '.........................*...*...............'
  - '.................*.......*...................'
  - '................****....*....*........**.....'
  - '...............**.*.*....*............**.....'
  - '....**........***.*..*...*...*...............'
  - '....**.........**.*.*......*.*...............'
  - '................****.........................'
  - '.................*...........................'
  - '..........................***................'
  - '..........................*.*...**...........'
  - '.........................**.....*..*.........'
  - '..................*.*.....*.........*......**'
  - '................*...*..**...........*......**'
  - '.........**.....*..........*........*........'
  - '.*.......**....*....*.......**..*..*.........'
  - '..*.............*.......*.*..*..**...........'
  - '***.............*...*.....***................'
  - '..................*.*........................'
  description: |
    Here the top glider is boosted by passing through two
    [inline inverter](/patterns/inline-inverter)s, emerging 5 cells further along than the unboosted
    glider at the left.
    The fastest speed boosters are the [telegraph](/patterns/telegraph) and [p1 telegraph](/patterns/p1-telegraph),
    which can transfer a orthogonal signal at the [speed of light](/patterns/speed-of-light),
    although their bit rate is rather slow.
    Diagonal speed boosters have also been built using [2c/3 wire](/patterns/2c-3-wire)s or
    other stable components.  See [stable pseudo-Heisenburp](/patterns/stable-pseudo-heisenburp).
    The [star gate](/patterns/star-gate) seems like it can transfer a signal faster than the
    [speed of light](/patterns/speed-of-light).  The illusion is explained in
    [Fast Forward Force Field](/patterns/fast-forward-force-field).
...
