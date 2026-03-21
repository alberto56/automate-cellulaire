---
name: sparking eater
id: sparking-eater
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  One of two [eater](/patterns/eater)s found in April 1997 and November
  1998 by Dean Hickerson using his [dr](/patterns/dr) [search program](/patterns/search-program), shown below
  to the left and right respectively.  These both absorb [glider](/patterns/glider)s as a
  standard eater does, but also produce separated single-bit [spark](/patterns/spark)s
  at the upper right, which can be used to delete antiparallel gliders
  with different phases as shown.
variants:
- pattern:
  - '..*.........**........*..........**.'
  - '*.*........**.......*.*..........*.*'
  - '.**..........*.......**..........*..'
  - '....**..**...............**..**.....'
  - '.*...*..**............*...*..**.....'
  - '.****.............**..****..........'
  - '..................*.................'
  - '.**................*****............'
  - '.**.....................*...........'
  - '.....................***............'
  - '.....................*..............'
  description: |
    The above mechanisms can be used to build [intermitting glider gun](/patterns/intermitting-glider-gun)s.
    The left-hand eater produces a spark nine ticks after a glider
    impact, with the result that the period of the constituent guns can't
    be a multiple of 4.  The right-hand eater produces the same spark ten
    ticks after impact, which allows p4N guns to be used.
    The separation of the spark also allows this reaction to perform
    other [perturbation](/patterns/perturbation)s "around the corner" of some objects.  For
    example, it was used by Jason Summers in 2004 to cap the ends of a
    row of ten [AK47 reaction](/patterns/ak47-reaction)s to form a much smaller period 94 glider
    gun than the original one.  (This is now made obsolete by the
    [AK94 gun](/patterns/ak94-gun).)
...
