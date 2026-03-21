---
name: fly-by deletion
id: fly-by-deletion
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A reaction performed by a passing [convoy](/patterns/convoy) of
  [spaceship](/patterns/spaceship)s which deletes a common stationary object without harming
  the convoy.  Fly-by deletion is often used in the construction of
  [puffer](/patterns/puffer)s and [spaceship](/patterns/spaceship)s to clean up unwanted debris.
  For c/2 convoys this is not usually difficult since the [LWSS](/patterns/lwSs),
  [MWSS](/patterns/mwSs), and [HWSS](/patterns/hwSs) [spaceship](/patterns/spaceship)s have such useful [spark](/patterns/spark)s.  However,
  some objects are more difficult to delete. For example, deleting a
  [tub](/patterns/tub) appears to require an unusual p4 spaceship.
variants:
- pattern:
  - '.......................*.........'
  - '......................*.*........'
  - '.......................*.........'
  - '.................................'
  - '.................................'
  - '.................................'
  - '................***..............'
  - '***.............*..*.............'
  - '*..*....***.....*...........***..'
  - '*.......*..*....*...*.......*..*.'
  - '*...*..*...*....*...*.......*....'
  - '*......*.*...*..*...........*...*'
  - '.*..**........*.*...........*...*'
  - '.*****........*.............*....'
  - '....**......*...***..........*.*.'
  - '.**..............................'
  description: |
    The deletion of a [pond](/patterns/pond) appears to require a convoy which is 89
    cells in width containing a very unusual p4 spaceship which has 273
    cells.  There are small objects which have no known fly-by deletion
    reactions.  However, as in the case of [reanimation](/patterns/reanimation), hitting them
    with the output of [rake](/patterns/rake)s is an effective brute force method.
...
