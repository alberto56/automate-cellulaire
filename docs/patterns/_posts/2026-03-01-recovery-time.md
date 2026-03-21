---
name: recovery time
id: recovery-time
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  The number of [tick](/patterns/tick)s that must elapse after a [signal](/patterns/signal)
  is sent through a [conduit](/patterns/conduit), before another signal can be safely sent
  on the same path.  In general, a lower recovery time means a more
  useful conduit.  For example, the [Snark](/patterns/snark)'s very low recovery time
  allowed for the creation of [oscillator](/patterns/oscillator)s with previously unknown
  [period](/patterns/period)s, 43 and 53.
  For the most part this is a synonym for [repeat time](/patterns/repeat-time).  However,
  [overclocking](/patterns/overclocking) a complex circuit can often allow it to be used at a
  [repeat time](/patterns/repeat-time) much lower than its safe recovery time.
...
