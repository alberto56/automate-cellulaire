---
name: universal regulator
id: universal-regulator
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [regulator](/patterns/regulator) in which the incoming gliders are
  aligned to period 1, that is, they have arbitrary timing (subject to
  some minimum time required for the regulator to recover from the
  previous glider).
  Paul Chapman constructed the first universal regulator in March
  2003.  It is adjustable, so that the output can be aligned to any
  desired period.  A [stable](/patterns/stable) universal regulator was constructed by
  Dave Greene in September 2015, with a minimum delay between test
  signals of 1177 ticks.  Later stable versions have reduced the delay
  to 952 ticks.
  A universal regulator can allow two complex [circuit](/patterns/circuit)s to interact
  safely, even if they have different base [period](/patterns/period)s.  For example,
  signals from a [stable](/patterns/stable) logic circuit could be processed by a
  period-30 mechanism, though the precise timing of those signals would
  change in most cases.
...
