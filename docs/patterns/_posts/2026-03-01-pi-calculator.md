---
name: pi calculator
id: pi-calculator
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  (p1 circuitry)  A device constructed by Adam P. Goucher
  in February 2010, which calculates the decimal digits of pi (the
  transcendental number, not the Life pattern!) and displays them in
  the Life universe as 8x10 dot matrix characters formed by
  arrangements of blocks along a diagonal stripe at the top.  A [push](/patterns/push)
  reaction moves a ten-block diagonal cursor to the next position as
  part of the "printing" operation for each new digit.
  The actual calculation is done in binary, using a streaming spigot
  algorithm based on linear fractional transformations.  The pi
  calculator is made up of a 188-state computer connected to a printing
  device via period-8 [regulator](/patterns/regulator)s and a binary-to-decimal conversion
  mechanism.  The complete pattern can be found in [Golly](/patterns/golly)'s Very Large
  Patterns online archive, along with the very similar 177-state phi
  calculator which uses a simpler algorithm to calculate and print the
  Golden Ratio.
...
