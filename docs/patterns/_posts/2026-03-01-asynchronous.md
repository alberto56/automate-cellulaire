---
name: asynchronous
id: asynchronous
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Indicates that precise relative timing is not needed for
  two or more input [signal](/patterns/signal)s entering a [circuit](/patterns/circuit), or two or more sets
  of [glider](/patterns/glider)s participating in a [glider synthesis](/patterns/glider-synthesis).  In some cases
  the signals or sets of gliders can arrive in any order at all - i.e.,
  they have non-overlapping effects.
  However, in some cases such as [slow salvo](/patterns/slow-salvo) constructions, there is
  a required order for some of the incoming signals.  These signals can
  still be referred to as "asynchronous" because the number of ticks
  between them is infinitely adjustable:  arbitrarily long delays can
  be added with no change to the final result.  Compare [synchronized](/patterns/synchronized).
...
