---
name: sliding block memory
id: sliding-block-memory
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A memory register whose value is stored as the
  position of a [block](/patterns/block).  The block can be moved by means of [glider](/patterns/glider)
  collisions.  See [block pusher](/patterns/block-pusher) for an example.
  In Conway's original formulation (as part of his proof of the
  existence of a [universal computer](/patterns/universal-computer) in Life) two gliders were used to
  pull the block inwards by three diagonal spaces, as shown below, and
  thirty gliders were used to push it out by the same amount.
variants:
- pattern:
  - '.*..........'
  - '**..........'
  - '............'
  - '............'
  - '............'
  - '.........***'
  - '***......*..'
  - '*.........*.'
  - '.*..........'
  description: |
    Dean Hickerson later greatly improved on this, finding a way to
    pull a block inwards by one diagonal space using 2 gliders, and push
    it out the same distance using 3 gliders. In order for the memory to
    be of any use there also has to be a way to read the value held.  It
    suffices to be able to check whether the value is zero (as Conway
    did), or to be able to detect the transition from one to zero (as
    Hickerson did).
    Dean Hickerson's sliding block memory is used in Paul Chapman's
    [URM](/patterns/urm), and the key salvos from it are used in several other complex
    constructions, such as David Bell's [Collatz 5N+1 simulator](/patterns/collatz-5n-1-simulator) and Adam
    P. Goucher's [pi calculator](/patterns/pi-calculator) and [Spartan](/patterns/spartan)
    [universal computer](/patterns/universal-computer)-constructor.
...
