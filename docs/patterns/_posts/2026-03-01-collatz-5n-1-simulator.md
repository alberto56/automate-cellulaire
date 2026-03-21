---
name: Collatz 5N+1 simulator
id: collatz-5n-1-simulator
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  An [unknown fate](/patterns/unknown-fate) pattern constructed by David
  Bell in December 2017 that simulates the Collatz 5N+1 algorithm using
  [sliding block memory](/patterns/sliding-block-memory) and [p1](/patterns/p1) [technology](/patterns/technology), while always having a
  population below 32000.
  The algorithm is simple.  Starting with a number, if it is even
  divide it by 2, otherwise multiply it by 5 and add 1.  When this
  process is iterated a sequence of numbers is generated.  When
  starting with the value of 7, it is currently unknown whether or not
  the sequence ever forms a cycle.
  Because of this the fate of the simulator is also currently
  unknown. It may become stable, or become an oscillator with a high
  period, or have a bounding box which grows irregularly.
...
