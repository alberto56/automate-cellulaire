---
name: demultiplexer
id: demultiplexer
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A simple [Herschel](/patterns/herschel) [circuit](/patterns/circuit) consisting of three
  [eater1](/patterns/eater1)s, found by Brice Due in August 2006.  An input Herschel
  places a boat in a location accessible to an input glider.  If the
  boat is present, a [one-time](/patterns/one-time) [turner](/patterns/turner) reaction occurs and the glider
  is turned 90 degrees onto a new lane.
variants:
- pattern:
  - '...........................*.....'
  - '........**.................*.*...'
  - '.........*.................**....'
  - '.........*.*.....................'
  - '..........**.....................'
  - '.......................**........'
  - '.......................*.*.......'
  - '........................*........'
  - '.................................'
  - '.................................'
  - '.............................**..'
  - '..........*..................*.*.'
  - '..........*.*..................*.'
  - '..........***............**....**'
  - '............*............*.*.....'
  - '...........................*.....'
  - '...........................**....'
  - '.................................'
  - '.................................'
  - '..**.............................'
  - '.*.*.............................'
  - '.*...............................'
  - '**...............................'
  description: |
    If the Herschel and boat are removed from the above pattern, the
    glider passes cleanly through the circuit.  It can be used as the "0"
    output of a one-bit [memory cell](/patterns/memory-cell), where the 90-degree output would
    be the "1" output.  This was the method used to store presence or
    absence of neighbor [metacell](/patterns/metacell)s in the [p1 megacell](/patterns/p1-megacell).
...
