---
name: block pusher
id: block-pusher
permalink: /patterns/block-pusher
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A pattern emitting streams of [glider](/patterns/glider)s which can
  repeatedly push a block further away.  This can be used as part of a
  [sliding block memory](/patterns/sliding-block-memory).
  The following pattern, in which three gliders push a block one cell
  diagonally, is an example of how a block pusher works.
variants:
- pattern:
  - '...................*.*'
  - '...................**.'
  - '....................*.'
  - '......................'
  - '......................'
  - '......................'
  - '...*..................'
  - '..*...................'
  - '..***.................'
  - '......................'
  - '......................'
  - '......................'
  - '......................'
  - '**...*................'
  - '**...*.*..............'
  - '.....**...............'
  description: |
    A universal [construction elbow](/patterns/construction-elbow) recipe library is also likely to contain one or more block-pushing reactions, since blocks are commonly used as elbows.
...
