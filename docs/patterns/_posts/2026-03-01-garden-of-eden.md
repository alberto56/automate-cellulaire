---
name: Garden of Eden
id: garden-of-eden
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A configuration of ON and OFF cells that can only
  occur in generation 0.  (This term was first used in connection with
  cellular automata by John W. Tukey, many years before Life.)  It was
  known from the start that there are Gardens of Eden in Life, because
  of a theorem by Edward Moore that guarantees their existence in a
  wide class of cellular automata.  Explicit examples have since been
  constructed, the first by Roger Banks, et al. at MIT in 1971. This
  example was 9 x 33.  In 1974 J. Hardouin-Duparc et al. at the
  University of Bordeaux 1 produced a 6 x 122 example.  The following
  shows a 12 x 12 example found by Nicolay Beluchenko in February 2006,
  based on a 13 x 12 one found by Achim Flammenkamp in June 2004.
variants:
- pattern:
  - '..*.***.....'
  - '**.*.*****.*'
  - '*.*.**.*.*..'
  - '.****.*.***.'
  - '*.*.**.***.*'
  - '.***.**.*.*.'
  - '..*...***..*'
  - '.*.**.*.*.*.'
  - '***.****.*.*'
  - '**.****...*.'
  - '.*.*.**..*..'
  - '.**.*..**.*.'
  description: |
    Below is a 10x10 Garden of Eden found by Marijn Heule, Christiaan
    Hartman, Kees Kwekkeboom, and Alain Noels in 2013 using SAT-solver
    techniques.  An exhaustive search of 90-degree rotationally symmetric
    10x10 patterns was possible because the symmetry reduces the number
    of unknown cells by a factor of four.
- pattern:
  - '.*.***.*..'
  - '..*.*.*..*'
  - '*.***..**.'
  - '.*.*****.*'
  - '*..*..****'
  - '****..*..*'
  - '*.*****.*.'
  - '.**..***.*'
  - '*..*.*.*..'
  - '..*.***.*.'
  description: |
    Steven Eker has since found several asymmetrical Gardens of Eden
    that are slightly smaller than this in terms of bounding box area.
    Patterns have also been found that have only Garden of Eden
    [parent](/patterns/parent)s.  For related results see [grandparent](/patterns/grandparent).
...
