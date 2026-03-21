---
name: infinite growth
id: infinite-growth
permalink: /patterns/infinite-growth
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Growth of a finite pattern such that the [population](/patterns/population)
  tends to infinity, or at least is unbounded. Sometimes the term is
  used for growth of something other than population (for example,
  length), but here we will only consider infinite population growth.
  The first known pattern with infinite growth in this sense was the
  [Gosper glider gun](/patterns/gosper-glider-gun), created in a response to a $50 prize challenge
  by John Conway.  Martin Gardner's October 1970 article described the
  challenge as "Conway conjectures that no pattern can grow without
  limit", but Conway later explained that he had always expected that
  this would be disproved.  The original purpose in investigating CA
  rules including B3/S23 was to show that a very simple two-state rule
  could support a [universal computer](/patterns/universal-computer) and/or [universal constructor](/patterns/universal-constructor).
  If all finite patterns could be proven to be bounded, neither of
  these would be possible.
  An interesting question is: What is the minimum population of a
  pattern that exhibits infinite growth?  In 1971 Charles Corderman
  found that a [switch engine](/patterns/switch-engine) could be stabilized by a [pre-block](/patterns/pre-block) in
  a number of different ways, giving 11-cell patterns with infinite
  growth.  This record stood for more than quarter of a century until
  Paul Callahan found, in November 1997, two 10-cell patterns with
  infinite growth.  The following month he found the one shown below,
  which is much neater, being a single [cluster](/patterns/cluster). This produces a
  stabilized switch engine of the block-laying type.
variants:
- pattern:
  - '......*.'
  - '....*.**'
  - '....*.*.'
  - '....*...'
  - '..*.....'
  - '*.*.....'
  description: |
    Nick Gotts and Paul Callahan showed in October 1997 that there is no
    infinite growth pattern with fewer than 10 cells, so that question
    has now been answered.
    In October 2014, Michael Simkin discovered a three-glider collision
    that produces a glider-producing [stabilized switch engine](/patterns/stabilized-switch-engine) and thus
    produces infinite growth from the smallest possible number of gliders
    (since all 71 [2-glider collision](/patterns/2-glider-collision)s have a finite limit population).
    Also of interest is the following pattern (again found by
    Callahan), which is the only 5x5 pattern with infinite growth. This
    too emits a block-laying switch engine.
- pattern:
  - '.**.*'
  - '*....'
  - '...**'
  - '.**.*'
  - '*.*.*'
  description: |
    Following a conjecture of Nick Gotts, Stephen Silver produced, in
    May 1998, a pattern of width 1 which exhibits infinite growth.  This
    pattern was very large (12470x1 in the first version, reduced to
    5447x1 the following day).  In October 1998 Paul Callahan did an
    exhaustive search, finding the smallest example, the 39x1 pattern
    shown below.  This produces two block-laying switch engines,
    stability being achieved at generation 1483.
- pattern:
  - '.*******.*****...***......*******.*****'
  description: |
    Larger patterns have since been constructed that display
    [quadratic growth](/patterns/quadratic-growth).
    Although the simplest infinite growth patterns grow at a rate that
    is (asymptotically) linear, many other types of growth rate are
    possible, [quadratic growth](/patterns/quadratic-growth) (see also [breeder](/patterns/breeder)) being the fastest.
    Dean Hickerson has found many patterns with unusual growth rates,
    such as [sawtooth](/patterns/sawtooth)s and a [caber tosser](/patterns/caber-tosser).  Another pattern with
    superlinear but non-quadratic growth is [Gotts dots](/patterns/gotts-dots).
    See also [Fermat prime calculator](/patterns/fermat-prime-calculator).
...
