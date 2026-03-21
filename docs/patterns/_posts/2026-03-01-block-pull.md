---
name: block pull
id: block-pull
permalink: /patterns/block-pull
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The following glider/block collision, which moves a block
  (2,1) toward the glider source.  Performing this reaction twice using
  a [salvo](/patterns/salvo) of two gliders can move a block diagonally back by three
  cells, which can be of use for a [sliding block memory](/patterns/sliding-block-memory).
variants:
- pattern:
  - '.*.'
  - '**.'
  - '...'
  - '...'
  - '...'
  - '...'
  - '***'
  - '*..'
  - '.*.'
...
