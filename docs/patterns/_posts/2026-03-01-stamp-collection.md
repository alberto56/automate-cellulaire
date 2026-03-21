---
name: stamp collection
id: stamp-collection
permalink: /patterns/stamp-collection
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A collection of [oscillator](/patterns/oscillator)s (or perhaps other Life
  objects) in a single diagram, displaying the exhibits much like
  stamps in a stamp album.  The classic examples are by Dean Hickerson
  (see [http://conwaylife.com/ref/DRH/stamps.html](http://conwaylife.com/ref/drh/stamps.html)).
  Many stamp collections contain "fonts" made of single cells (which
  cleanly die) to annotate the objects or to draw boxes around them.
  For example, here is a stamp collection which shows all the ways that
  two gliders can create a [loaf](/patterns/loaf) or an [eater](/patterns/eater).
variants:
- pattern:
  - '.*......*.*.....*....*.*.*...................*.'
  - '............................................*..'
  - '.*.....*...*...*.*...*......................***'
  - '...............................................'
  - '.*.....*...*..*...*..*.*.*.....................'
  - '...............................................'
  - '.*.....*...*..*.*.*..*.........................'
  - '........................................**.....'
  - '.*.*.*..*.*...*...*..*.................*.*.....'
  - '.........................................*.....'
  - '...............................................'
  - '...............................................'
  - '.............................................*.'
  - '............................................*..'
  - '*.*.*....*....*.*.*..*.*.*..*.*.............***'
  - '................................*..............'
  - '*.......*.*.....*....*......*..................'
  - '................................*..............'
  - '*.*.*..*...*....*....*.*.*..*.*................'
  - '...............................................'
  - '*......*.*.*....*....*......*..*...........*...'
  - '..........................................**...'
  - '*.*.*..*...*....*....*.*.*..*...*.........*.*..'
  description: |
    Alternatively, stamp collections can use [LifeHistory](/patterns/lifehistory) for their
    annotations, but this requires a more sophisticated Life program to
    handle.  Numbers, or more rarely letters, are sometimes constructed
    from stable components such as [block](/patterns/block)s or [snake](/patterns/snake)s, but their
    readability is somewhat limited by placement constraints.
...
