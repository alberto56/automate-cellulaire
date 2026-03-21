---
name: Heisenburp device
id: heisenburp-device
permalink: /patterns/heisenburp-device
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A pattern which can detect the passage of a
  [glider](/patterns/glider) without affecting the glider's path or timing.  The first
  such device was constructed by David Bell in December 1992.  The
  term, coined by Bill Gosper, refers to the fact that Heisenberg's
  Uncertainty Principle fails to apply in the Life universe.  See also
  [stable pseudo-Heisenburp](/patterns/stable-pseudo-heisenburp) and [natural Heisenburp](/patterns/natural-heisenburp).
  The following is an example of the kind of reaction used at the
  heart of a Heisenburp device.  The glider at bottom right alters the
  reaction of the other two gliders without itself being affected in
  any way.
variants:
- pattern:
  - '.*....*....'
  - '.**...*.*..'
  - '**....**...'
  - '...........'
  - '...........'
  - '...........'
  - '.........**'
  - '........*.*'
  - '..........*'
...
