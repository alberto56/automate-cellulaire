---
name: trombone slide
id: trombone-slide
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  An arrangement of four 90-degree [reflector](/patterns/reflector)s that can
  be placed into the path of a [glider](/patterns/glider) so as to delay it by an
  adjustable number of generations, without changing its [lane](/patterns/lane).  More
  generally, any combination of [circuit](/patterns/circuit)s may be referred to as a
  trombone slide, if the grouping can be moved as a single unit that
  functions as a 180-degree glider [reflector](/patterns/reflector).
  The smallest known trombone slides are made using [Snark](/patterns/snark)s.  In the
  trombone slide shown below, sample input and output gliders are
  shown.  The input glider will reach the same output location 128
  generations sooner if the trombone slide is removed.
  If the top and left Snarks are moved together diagonally to the
  upper left by N cells, then the glider delay is increased by 8N
  generations since the glider has to travel N more cells in each
  direction.  This sliding action gives the trombone slide its name.
  If only the final Snark is moved, then the output glider's path can
  be altered by a number of full diagonals.
variants:
- pattern:
  - '......................**...**....................'
  - '......................**..*.***..................'
  - '..........................*....*.................'
  - '......................****.**..*.................'
  - '......................*..*.*.*.**................'
  - '.........................*.*.*.*.................'
  - '..........................**.*.*.................'
  - '..............................*..................'
  - '.................................................'
  - '................**...............................'
  - '.................*.......**......................'
  - '.................*.*.....**......................'
  - '..................**.............................'
  - '.................................................'
  - '.................................................'
  - '.............................................*...'
  - '...........................................***...'
  - '..........................................*......'
  - '..........................................**.....'
  - '............................**...................'
  - '............................*....................'
  - '.............................***..............***'
  - '...............................*................*'
  - '...............................................*.'
  - '.................................................'
  - '................................**...............'
  - '....*..........................*.*.....**........'
  - '..*****..............**........*.......**........'
  - '.*.....*.............*........**.................'
  - '.*..***............*.*...........................'
  - '**.*...............**.......................*....'
  - '*..****.................................**.*.*...'
  - '.**...*...**...........................*.*.*.*...'
  - '...***....**........................*..*.*.*.**..'
  - '...*................................****.**..*...'
  - '**.*....................................*....*...'
  - '**.**...............................**..*.***....'
  - '....................................**...**......'
  - '.................................................'
  - '...........**....................................'
  - '............*....................*...............'
  - '.........***...**..............*****.............'
  - '.........*......*.............*.....*............'
  - '................*.*............***..*............'
  - '.................**...............*.**...........'
  - '...............................****..*...........'
  - '..........................**...*...**............'
  - '..........................**....***..............'
  - '..................................*..............'
  - '..................................*.**...........'
  - '.................................**.**...........'
  - '.................................................'
  - '.................................................'
  - '..............***........**......................'
  - '................*........*.......................'
  - '...............*..........***....................'
  - '............................*....................'
  description: |
    Trombone slides made of the same type of component cannot alter the
    glider path by half-diagonals, and can only change the timing by
    multiples of 8 generations.  For other timing changes, different
    components are necessary.  These may be stable like the
    [Silver reflector](/patterns/silver-reflector) or the [colour-changing](/patterns/colour-changing) example shown in the
    [reflector](/patterns/reflector) article, or periodic like the various [bumper](/patterns/bumper)s.
...
