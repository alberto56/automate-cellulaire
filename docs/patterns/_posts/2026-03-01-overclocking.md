---
name: overclocking
id: overclocking
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A term used when a [circuit](/patterns/circuit) can accept a signal at a
  specific period which it cannot accept at a higher period.  A
  [syringe](/patterns/syringe) is a simple example.
  Some [staged recovery](/patterns/staged-recovery) circuits also permit overclocking, and can
  function successfully at a rate faster than their [recovery time](/patterns/recovery-time).  A
  [Silver reflector](/patterns/silver-reflector) has a recovery time of 497 ticks, but can be
  overclocked to reflect a period 250 glider stream, or any nearby
  period above 248, simply by removing a beehive after the first glider
  enters the reflector.  However, a continuous stream of gliders is
  then required to maintain the circuit, with timing within a tightly
  bounded range.
...
