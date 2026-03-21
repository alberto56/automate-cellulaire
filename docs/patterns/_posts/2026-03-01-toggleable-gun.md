---
name: toggleable gun
id: toggleable-gun
permalink: /patterns/toggleable-gun
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any [gun](/patterns/gun) that can be turned off or turned on by the
  same external signal - the simplest possible switching mechanism.  An
  input signal causes the gun to stop producing gliders.  Another input
  signal from the same source restores the gun to its original
  function.  Compare [switchable gun](/patterns/switchable-gun).
  Here's a small example by Dean Hickerson from September 1996.
variants:
- pattern:
  - '..............**..............*..'
  - '..............*.*.............*.*'
  - '..............*...............**.'
  - '.................................'
  - '.................................'
  - '.................................'
  - '.................................'
  - '...............*..*....b.........'
  - .****..............*..b..........
  - '*...*..........*...*..bbb........'
  - '....*...........****.............'
  - '*..*........................aaa..'
  - '............................a....'
  - '.............................a...'
  description: |
    In the figure above, glider B and an LWSS are about to send a glider
    NW.  Glider A will delete the next glider after B, turning off the
    output stream.  But if the device were already off, B wouldn't be
    present and A would instead delete the leading LWSS, turning the
    device back on.
...
