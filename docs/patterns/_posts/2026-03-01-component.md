---
name: component
id: component
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A partial [glider synthesis](/patterns/glider-synthesis) that can be used in the same
  way in multiple [glider recipe](/patterns/glider-recipe)s.  A component transforms part of an
  object under construction in a well-defined way, without affecting
  the rest of the object.  For example, this well-known component can
  be used to add a [hook](/patterns/hook) to any object that includes a protruding
  [table](/patterns/table) end, converting it to a [long bookend](/patterns/long-bookend).
variants:
- pattern:
  - '.......*...................*...................*'
  - '.....**..................**..................**.'
  - '......**..................**..................**'
  - '................................................'
  - '..*...................*...................*.....'
  - '*.*.................*.*.................*.*.....'
  - '.**..*...............**..*...............**..*..'
  - '.....*.*.................*.*.................*.*'
  - '.....**..................**..................**.'
  - '................................................'
  - '................................................'
  - '....................*...........................'
  - '...*..*............*.*.*..*............**..*..*.'
  - '...****.............**.****............*...****.'
  - '......................*.................***.....'
  - '.....**...............*.*.................*.*...'
  - '.....**................*.*.................**...'
  - '........................*.......................'
  description: |
    "Component" is also used to specify any piece of an object -
    [spaceship](/patterns/spaceship), [oscillator](/patterns/oscillator), etc. - that can be combined with other
    components in specific ways according to a [grammar](/patterns/grammar) to produce a
    variety of objects.  The components can either be independent objects
    that only occasionally react with each other, or else they can be
    fused together to support each other.  For example, any
    [branching spaceship](/patterns/branching-spaceship) is made up of several components, and there is
    a single repeating component in any [wicktrailer](/patterns/wicktrailer).
...
