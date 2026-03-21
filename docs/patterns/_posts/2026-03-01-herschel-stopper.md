---
name: Herschel stopper
id: herschel-stopper
permalink: /patterns/herschel-stopper
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A method of cleanly suppressing a [Herschel](/patterns/herschel) signal
  with an [asynchronous](/patterns/asynchronous) [boat-bit](/patterns/boat-bit), discovered by Dean Hickerson.
  Here a [ghost Herschel](/patterns/ghost-herschel) marks the location of the output signal, in
  cases where the boat-bit is not present.  Other boat-bit locations
  that allow for clean suppression of a Herschel are also known.
variants:
- pattern:
  - '....................................**'
  - '.........................*..........*.'
  - '.........................***.........*'
  - '............................*.......**'
  - '...........................**.........'
  - '......................................'
  - '........*.............................'
  - '........***...........................'
  - '...........*..........................'
  - '..........**...........**...........*.'
  - '.......................**.........***.'
  - '..................................*...'
  - '..................................*...'
  - '......................................'
  - '..........................*...........'
  - '..........................**..........'
  - '.........*...............*.*..........'
  - '.........*.*..........................'
  - '.........***..........................'
  - '...........*.......................**.'
  - '....................................*.'
  - '.................................***..'
  - '.................................*....'
  - '......................................'
  - '..**..................................'
  - '...*..................................'
  - '***....................**.............'
  - '*......................*..............'
  - '........................***...........'
  - '..........................*...........'
  description: |
    This term is also sometimes used to refer to any mechanism that
    cleanly suppresses a Herschel.  These usually allow the Herschel's
    [first natural glider](/patterns/first-natural-glider) to escape, so they are more commonly
    classified as [converter](/patterns/converter)s.  See [SW-2](/patterns/sw-2).
...
