---
name: memory cell
id: memory-cell
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A type of information storage [circuit](/patterns/circuit) useful in many
  patterns that perform complex logical operations.  Most commonly a
  memory cell can store a single bit of information.  See for example
  [demultiplexer](/patterns/demultiplexer), [honey bit](/patterns/honey-bit), and [boat-bit](/patterns/boat-bit).  Depending on the
  application, the circuit may be a [toggle circuit](/patterns/toggle-circuit) or a
  [permanent switch](/patterns/permanent-switch), or it may be possible to send one or more signals
  to set the circuit to a "1" state, as can be done with a [keeper](/patterns/keeper)
  mechanism.  In that case a different input signal must be used to
  test the current state, usually with a [destructive read](/patterns/destructive-read) reaction.
  A more complicated example can be found in the [Osqrtlogt](/patterns/osqrtlogt) pattern,
  which destructively reads a growing 2-dimensional array of minimal
  memory cells.  Each memory cell may either contain a [boat](/patterns/boat) (below
  left) or empty space (below right), with no permanent circuitry
  anywhere near.
variants:
- pattern:
  - '...............**........................**'
  - '...............**........................**'
  - '...........................................'
  - '...........*...............................'
  - '..........*.*..............................'
  - '...........**..............................'
  - '...........................................'
  - '...........................................'
  - '......**........................**.........'
  - '.....*..*......................*..*........'
  - '......**........................**.........'
  - '...........................................'
  - '...........................................'
  - '.**........................**..............'
  - '*..*......................*..*.............'
  - '.**......***...............**......***.....'
  - '.........*.........................*.......'
  - '..........*.........................*......'
  description: |
    The two [beehive](/patterns/beehive)s and the [block](/patterns/block) are placed by [slow salvo](/patterns/slow-salvo)s, after
    an initial 90-degree [2-glider collision](/patterns/2-glider-collision) that produces a target
    [honey farm](/patterns/honey-farm).  The beehive [constellation](/patterns/constellation) acts as a [one-time](/patterns/one-time)
    [turner](/patterns/turner) for an incoming [glider](/patterns/glider).  If the boat is present, it acts
    as a second one-time turner for that glider, sending back a "1"
    signal.  The "backstop" [block](/patterns/block) in the northeast is destroyed cleanly
    in either the "0" or the "1" case.
...
