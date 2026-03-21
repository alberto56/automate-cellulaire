---
name: destructive read
id: destructive-read
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The most common type of test reaction in
  [memory cell](/patterns/memory-cell) circuitry.  Information is stored in a memory cell by
  placing objects in known positions, or by changing the state of a
  stable or periodic [toggle circuit](/patterns/toggle-circuit).  A destructive-read test
  consists of sending one or more [signal](/patterns/signal)s to the memory cell.  A
  distinct output signal is produced for each possible state of the
  memory cell, which is reset to a known "zero" or "rest" state.  See
  for example [boat-bit](/patterns/boat-bit), [keeper](/patterns/keeper), and [demultiplexer](/patterns/demultiplexer).
  To permanently store information in a destructive-read memory cell,
  the output signal(s) must be used, in part, to send appropriate
  signals back to the memory cell to restore its state to its previous
  value.  With output looped back to input, this larger composite
  circuit then effectively becomes a [non-destructive read](/patterns/non-destructive-read) memory
  cell.
...
