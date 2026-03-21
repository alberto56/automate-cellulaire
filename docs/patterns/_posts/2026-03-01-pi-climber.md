---
name: pi climber
id: pi-climber
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The reaction that defines rate of travel of the
  [Caterpillar](/patterns/caterpillar) spaceship.  A pi climber consists of a pi-heptomino
  "climbing" a chain of blinkers, moving 17 cells every 45 ticks, and
  leaving behind an identical chain of blinkers, shifted downward by 6
  cells.  A single pi climber does not produce any gliders or other
  output, but two or more of them travelling on nearby blinker chains
  can be arranged to emit gliders every 45 ticks.  Compare
  [Herschel-pair climber](/patterns/herschel-pair-climber).
variants:
- pattern:
  - '..*..'
  - '..*..'
  - '..*..'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '.....'
  - '..*..'
  - '.***.'
  - '.*.*.'
...
