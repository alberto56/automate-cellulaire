---
name: volatility
id: volatility
permalink: /patterns/volatility
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The volatility of an [oscillator](/patterns/oscillator) is the size (in cells)
  of its [rotor](/patterns/rotor) divided by the sum of the sizes of its rotor and its
  [stator](/patterns/stator).  In other words, it is the proportion of cells involved in
  the oscillator which actually oscillate.  For many periods there are
  known oscillators with volatility 1, see for example [Achim's p16](/patterns/achim-s-p16),
  [figure-8](/patterns/figure-8), [Kok's galaxy](/patterns/kok-s-galaxy), [mazing](/patterns/mazing), [pentadecathlon](/patterns/pentadecathlon), [phoenix](/patterns/phoenix),
  [relay](/patterns/relay), [smiley](/patterns/smiley) and [tumbler](/patterns/tumbler).  Such an oscillator of period 3 was
  found in August 2012 by Jason Summers.
variants:
- pattern:
  - '.........*.*.....*...*.....*.*.'
  - '........*...*....*...*....*...*'
  - '.........*.......*...*.......*.'
  - '...........**.**.*...*.**.**...'
  - '.................*...*.........'
  - '..........*...*.........*...*..'
  - '........*.*.................*.*'
  - '...............................'
  - '........*...................*..'
  - '.......**..................**..'
  - '.......*...................*...'
  - '.....*..*................*..*..'
  - '*....*..............*....*.....'
  - '****.**.***.........****.**.***'
  - '***.**.****.........***.**.****'
  - '.....*....*..............*....*'
  - '..*..*................*..*.....'
  - '...*...................*.......'
  - '..**..................**.......'
  - '..*...................*........'
  - '...............................'
  - '*.*.................*.*........'
  - '..*...*.........*...*..........'
  - '.........*...*.................'
  - '...**.**.*...*.**.**...........'
  - '.*.......*...*.......*.........'
  - '*...*....*...*....*...*........'
  - '.*.*.....*...*.....*.*.........'
  description: |
    The smallest period for which the existence of such statorless
    oscillators is undecided is 7. There are oscillators with volatility
    arbitrarily close to 1 for all but finitely many periods, because of
    the possibility of feeding the gliders from a [true](/patterns/true) period n [gun](/patterns/gun)
    into an [eater](/patterns/eater).
    The term "volatility" is due to Robert Wainwright.  See also
    [strict volatility](/patterns/strict-volatility).
...
