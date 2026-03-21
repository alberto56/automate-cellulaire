---
name: Moore neighbourhood
id: moore-neighbourhood
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The set of all cells that are orthogonally or
  diagonally adjacent to a cell or group of cells.  The Moore
  neighbourhood of a cell can be thought of as the points at a
  Chebyshev distance of 1 from that cell.  Compare
  [von Neumann neighbourhood](/patterns/von-neumann-neighbourhood).  The Conway's Life rule is based on the
  Moore neighborhood, as are all the "Life-like" rules and many other
  commonly investigated rule families.
  Cell neighbourhoods can also be defined with a higher range. The
  Moore neighbourhood of range n can be defined recursively as the
  Moore neighbourhood of the Moore neighbourhood of range n-1.  For
  example, the Moore neighbourhood of range 2 includes all cells that
  are orthogonally or diagonally adjacent to the standard Moore
  neighbourhood.
...
