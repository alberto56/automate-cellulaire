---
name: edge-repair spaceship
id: edge-repair-spaceship
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [spaceship](/patterns/spaceship) which has an edge that possesses
  no [spark](/patterns/spark) and yet is able to [perturb](/patterns/perturb) things because of its ability
  to repair certain types of damage to itself.  The most useful
  examples are the following two small p3 [c/3 spaceship](/patterns/c/3-spaceship)s.
variants:
- pattern:
  - '..................................*.....'
  - '........*.......................***.***.'
  - '.......****....................**......*'
  - '..*...*...**.**...........*...*..*...**.'
  - '.****.....*..**..........****...........'
  - '*...*.......*..*........*...*...........'
  - '.*.*..*..................*.*..*.........'
  - '.....*.......................*..........'
  description: |
    These were found by David Bell in 1992, but the usefulness of the
    edge-repair property wasn't recognised until July 1997.  The
    following diagram (showing an edge-repair spaceship deleting a
    [Herschel](/patterns/herschel)) demonstrates the self-repairing action.
- pattern:
  - '................*.......'
  - '*..............****.....'
  - '*.*.......*...*...**.**.'
  - '***......****.....*..**.'
  - '..*.....*...*.......*..*'
  - '.........*.*..*.........'
  - '.............*..........'
  description: |
    In October 2000, David Bell found that a [T-tetromino](/patterns/t-tetromino) component of a
    [c/4 spaceship](/patterns/c/4-spaceship) can also be self-repairing.  Stephen Silver noticed
    that it could be used to delete beehives and, in November 2000, found
    the smallest known c/4 spaceship with this edge-repair component - in
    fact, two copies of the component.
- pattern:
  - '.**..........................'
  - '*..*.........................'
  - '.**..........................'
  - '.............................'
  - '.......*.*...................'
  - '.......*.....................'
  - '.......*.*..*..*.............'
  - '..........*..................'
  - '...........*.**.*............'
  - '............***.*............'
  - '...........*....*..*.**......'
  - '........*...**...*.****......'
  - '........**..*..*.**....*....*'
  - '........*........**....*..***'
  - '.............**...**...*..**.'
  - '.**..........................'
  - '*..*.........................'
  - '.**..........................'
...
