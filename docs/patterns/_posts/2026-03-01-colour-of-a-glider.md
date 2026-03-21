---
name: colour of a glider
id: colour-of-a-glider
permalink: /patterns/colour-of-a-glider
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The colour of a [glider](/patterns/glider) is a property of the
  glider that remains constant while the glider is moving along a
  straight path, but that can be changed when the glider bounces off a
  [reflector](/patterns/reflector).  It is an important consideration when building
  something using reflectors.
  The colour of a glider can be defined as follows.  First choose
  some cell to be the origin.  This cell is then considered to be
  white, and all other cells to be black or white in a checkerboard
  pattern.  (So the cell with coordinates (m,n) is white if m+n is
  even, and black otherwise.)  Then the colour of a glider is the
  colour of its leading cell when it is in a phase that can be rotated
  to look like this.
variants:
- pattern:
  - '.**'
  - '..*'
  - '.*.'
  description: |
    A reflector that does not change the colour of gliders obviously
    cannot be used to move a glider onto a path of different colour than
    it started on.  But a 90-degree reflector that does change the colour
    of gliders is similarly limited, as the colour of the resulting
    glider will depend only on the direction of the glider, no matter how
    many reflectors are used.  For maximum flexibility, therefore, both
    types of reflector are required.
    Small periodic colour-changing glider reflectors ([bouncer](/patterns/bouncer)s) are
    known, and also small periodic colour-preserving glider reflectors
    ([bumper](/patterns/bumper)s).  Among stable patterns, only a small colour-preserving
    reflector ([Snark](/patterns/snark)) is known.  The smallest known 90-degree
    colour-changing reflector is given at the end of the [reflector](/patterns/reflector)
    entry.
...
