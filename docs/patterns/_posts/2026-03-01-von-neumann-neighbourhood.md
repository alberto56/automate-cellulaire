---
name: von Neumann neighbourhood
id: von-neumann-neighbourhood
permalink: /patterns/von-neumann-neighbourhood
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The set of all cells that are orthogonally
  adjacent to a cell or group of cells.  The von Neumann neighbourhood
  of a cell can be thought of as the points at a Manhattan distance of
  1 from that cell.  Compare [Moore neighbourhood](/patterns/moore-neighbourhood).
  Cell neighbourhoods can also be defined with a higher range. The
  von Neumann neighbourhood of range n can be defined recursively as
  the von Neumann neighbourhood of the von Neumann neighbourhood of
  range n-1.  For example, the von Neumann neighbourhood of range 2 is
  the set of all cells that are orthogonally adjacent to the range-1
  von Neumann neighbourhood.
...
