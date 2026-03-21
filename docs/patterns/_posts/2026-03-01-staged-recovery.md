---
name: staged recovery
id: staged-recovery
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A type of signal-processing [circuit](/patterns/circuit) where the
  initial reaction between [catalyst](/patterns/catalyst)s an incoming signal results in an
  imperfect recovery.  A catalyst is damaged, destroyed completely as
  in a [bait](/patterns/bait) reaction, or one or more objects are left behind that
  must be cleaned up before the circuit can be reused.  In any of these
  three cases, output signals from the circuit must be used to complete
  the cleanup.  In theory the cleanup process might itself be [dirty](/patterns/dirty),
  requiring additional cleanup stages.  In rare cases this might
  theoretically allow the construction of special-purpose circuits with
  a lower [recovery time](/patterns/recovery-time) than would otherwise be possible, but in
  practice this kind of situation does not commonly arise.
  An example is the record-breaking (at the time) 487-tick reflector
  constructed by Adam P. Goucher on 12 April 2009.  487 ticks was a
  slight improvement over the repeat time of the [Silver reflector](/patterns/silver-reflector).
  The reflector featured a standard [Callahan G-to-H](/patterns/callahan-g-to-h), with cleanup by
  an internal [dirty](/patterns/dirty) glider reflector found by Dieter Leithner many
  years before.  This in turn was cleaned up by the usual ungainly
  Herschel plumbing attached to the G-to-H's output.  The dirty glider
  reflector is not actually fully recovered before a second p487 signal
  enters the full reflector.  However, it has been repaired by the time
  the internal reflector is actually needed again, so the cycle can be
  successfully repeated at p487 instead of p497.
...
