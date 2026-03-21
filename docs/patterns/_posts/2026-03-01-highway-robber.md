---
name: highway robber
id: highway-robber
permalink: /patterns/highway-robber
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any mechanism that can retrieve a signal from a
  spaceship [lane](/patterns/lane) while allowing spaceships on nearby lanes to pass by
  unaffected.  In practice the spaceship is generally a glider.  The
  signal is removed from the lane, an output signal is generated
  elsewhere, and the highway robber returns to its original state.  A
  competent highway robber does not affect gliders even on the lane
  adjacent to the affected glider stream, except during its recovery
  period.
  A perfect highway robber doesn't affect later gliders even in the
  lane to which it is attached, even during its recovery period.  Below
  is a near-perfect highway robber "bait" that requires three
  [synchronized](/patterns/synchronized) signals to rebuild (the [Herschel](/patterns/herschel), [B-heptomino](/patterns/b-heptomino), and
  [glider](/patterns/glider).)  The glider at the top right passes by unharmed, but
  another glider following on the same [lane](/patterns/lane) 200 ticks later will be
  cleanly reflected to a new path, and another glider following that
  one will also pass by unharmed.  The only imperfection is a few ticks
  at the very end of the reconstruction, as the beehive is being
  rebuilt.
variants:
- pattern:
  - '......................*...........*.........'
  - '......................***.......*.*.........'
  - '.........**...**.........*.......**.........'
  - '.........**...**........**..................'
  - '............................................'
  - '............................................'
  - '..**........................................'
  - '...*........................................'
  - '...*.*......................................'
  - '....**......................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '.......**...................................'
  - '........*...................................'
  - '.....***....................................'
  - '.....*......................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '....................**......................'
  - '....................**......................'
  - '............**..............................'
  - '.............*..............................'
  - '*.........***...............................'
  - '***.......*.................................'
  - '...*........................................'
  - '..**........................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '............................................'
  - '...........*...........**...............**..'
  - '.........***..........*.*...............**..'
  - '.........*.*............*...................'
  - '.........*.....................**.*.......*.'
  - '...............................*.**......***'
  - '........................................**.*'
  - '............................................'
  - '.............................**.............'
  - '.............................**.............'
  - '.......................**...................'
  - '.......................**...................'
  - '............................................'
  - '............................................'
  - '.........................**.................'
  - '..................**.....**.................'
  - '..................**........................'
...
