---
name: stable pseudo-Heisenburp
id: stable-pseudo-heisenburp
permalink: /patterns/stable-pseudo-heisenburp
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A multi-stage [converter](/patterns/converter) constructed by
  Dave Greene in January 2007, using a complex recipe found by Noam
  Elkies to insert a signal into a [2c/3 wire](/patterns/2c-3-wire).  The wire's high
  transmission speed allows a [signal](/patterns/signal) from a [highway robber](/patterns/highway-robber) to catch
  up to a [salvo](/patterns/salvo) of [glider](/patterns/glider)s.  Ultimately the mechanism restores the
  key glider, which was destroyed by the highway robber in the first
  stage of the converter, to its exact original position in the salvo.
  Much smaller stable pseudo-Heisenburp devices have since been
  designed that use simple 0-degree glider [seed](/patterns/seed) [constellation](/patterns/constellation)s
  instead of a 2c/3 wire.
  These patterns are labeled "pseudo-Heisenburp", because a true
  [Heisenburp device](/patterns/heisenburp-device) does not even temporarily damage or affect a
  passing glider, yet can still produce an output [signal](/patterns/signal) in response.
  However, it is impossible to construct a [stable](/patterns/stable) device that can
  accomplish this for gliders.  True stable Heisenburp devices are
  possible with many other types of [spaceship](/patterns/spaceship)s, but not with gliders
  which have no usable side [spark](/patterns/spark)s to initiate an output signal.
...
