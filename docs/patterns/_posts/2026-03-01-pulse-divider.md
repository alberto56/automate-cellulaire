---
name: pulse divider
id: pulse-divider
permalink: /patterns/pulse-divider
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A mechanism that lets every n-th object that reaches it
  pass through, and deletes all the rest, where n > 1 and the objects
  are typically [glider](/patterns/glider)s, [spaceship](/patterns/spaceship)s or [Herschel](/patterns/herschel)s.  A common
  synonym is [period multiplier](/patterns/period-multiplier).  For n=2, the simplest known stable
  pulse dividers are the [semi-Snark](/patterns/semi-snark)s.
  The following diagram shows a p5 glider pulse divider by Dieter
  Leithner (February 1998).  The first glider moves the centre block
  and is reflected at 90 degrees.  The next glider to come along will
  not be reflected, but will move the block back to its original
  position.  The relatively small size and low period of this example
  made it useful for constructing compact glider [gun](/patterns/gun)s of certain
  periods, but it became largely obsolete with the discovery of the
  [stable](/patterns/stable) [CC semi-Snark](/patterns/cc-semi-snark), which uses the same basic mechanism.
  Period 7, 22, 36 and 46 versions of this pulse divider are also
  known.
variants:
- pattern:
  - '.....**...................'
  - '.....**...................'
  - '..........................'
  - '..................**......'
  - '.................*..*.....'
  - '.................*.*..*..*'
  - '*...............**.*.*****'
  - '.**...........*...**......'
  - '**...............**..***..'
  - '.............*...*.*..*.*.'
  - '........**.......**..**.*.'
  - '........**....*...**...*..'
  - '................**.*.**...'
  - '.................*.*.*....'
  - '.................*.*..*...'
  - '..................*..**...'
  - '..**......................'
  - '...*......................'
  - '***.......................'
  - '*.........................'
  - '..........................'
  - '............**............'
  - '............*.............'
  - '.............***..........'
  - '...............*..........'
...
