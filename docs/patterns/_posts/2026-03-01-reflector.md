---
name: reflector
id: reflector
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any [stable](/patterns/stable) or oscillating pattern that can reflect some
  type of [spaceship](/patterns/spaceship) (usually a [glider](/patterns/glider)) without suffering permanent
  damage.  A pattern that is damaged or destroyed during the reflection
  process is generally called a [one-time](/patterns/one-time) [turner](/patterns/turner) instead.
  The first known reflector was the [pentadecathlon](/patterns/pentadecathlon), which functions
  as a 180-degree glider reflector (see [relay](/patterns/relay)).  Other examples
  include the [buckaroo](/patterns/buckaroo), the [twin bees shuttle](/patterns/twin-bees-shuttle) and some oscillators
  based on the [traffic jam](/patterns/traffic-jam) reaction.  Glider [gun](/patterns/gun)s can also be made
  into reflectors, although these are mostly rather large.
  In September 1998 Noam Elkies found some fast small-period glider
  reflectors, with [oscillator](/patterns/oscillator)s supplying the required [domino](/patterns/domino)
  [spark](/patterns/spark)s at different periods.  A [figure-8](/patterns/figure-8) produced a [p8 bouncer](/patterns/p8-bouncer),
  and a [p6 pipsquirter](/patterns/p6-pipsquirter) produced an equivalent [p6 bouncer](/patterns/p6-bouncer).  A more
  complicated construction allows a [p5 bouncer](/patterns/p5-bouncer) (which, as had been
  anticipated, soon led to a [true](/patterns/true) p55 [Quetzal](/patterns/quetzal) gun).  And in August
  1999 Elkies found a suitable [sparker](/patterns/sparker) to produce a [p7 bouncer](/patterns/p7-bouncer),
  allowing the first p49 oscillator to be constructed.
  These were all called simply "p5 reflector", "p6 reflector", etc.,
  until 6 April 2016 when Tanner Jacobi discovered an equally small and
  simple reaction, the [bumper](/patterns/bumper), starting with a [loaf](/patterns/loaf) as [bait](/patterns/bait)
  instead of a [boat](/patterns/boat).  This resulted in a series of periodic
  [colour-preserving](/patterns/colour-preserving) reflectors, whereas Elkies' [bouncer](/patterns/bouncer) reflectors
  are all [colour-changing](/patterns/colour-changing).  A useful mnemonic is that "bouncer" contains a C and is colour-changing, whereas "bumper" contains a P
  and is colour-preserving.
  Stable reflectors are special in that if they satisfy certain
  conditions they can be used to construct [oscillator](/patterns/oscillator)s of all
  sufficiently large periods.  It was known for some time that stable
  reflectors were possible (see [universal constructor](/patterns/universal-constructor)), but no one
  was able to construct an explicit example until Paul Callahan did so
  in October 1996.
  Callahan's original reflector has a [repeat time](/patterns/repeat-time) of 4840, soon
  improved to 1686, then 894, and then 850.  In November 1996 Dean
  Hickerson found a variant in which this is reduced to 747.  Dave
  Buckingham reduced it to 672 in May 1997 using a somewhat different
  method, and in October 1997 Stephen Silver reduced it to 623 by a
  method closer to the original.  In November 1998 Callahan reduced
  this to 575 with a new initial reaction.  A small modification by
  Silver a few days later brought this down to 497.
  In April 2001 Dave Greene found a 180-degree stable reflector with
  a repeat time of only 202 (see [boojum reflector](/patterns/boojum-reflector)).  This reflector
  won bounties offered by Dieter Leithner and Alan Hensel.  Half of the
  prize money was recycled into a new prize for a small 90-degree
  reflector, which in turn was won by Mike Playle's [colour-preserving](/patterns/colour-preserving)
  [Snark](/patterns/snark) reflector.  The Snark is currently the smallest known stable
  reflector, with a recovery time of 43.  Playle has offered a $100
  prize for a [colour-changing](/patterns/colour-changing) stable reflector contained within a 25
  by 25 [bounding box](/patterns/bounding-box), with a recovery time of 50 generations or less.
  As of June 2018, the following [splitter](/patterns/splitter) is among the smallest
  known 90-degree [colour-changing](/patterns/colour-changing) [reflector](/patterns/reflector)s.  The top output can
  be blocked off by an [eater](/patterns/eater) if needed.  For small 180-degree
  colour-changing reflectors see [rectifier](/patterns/rectifier), and also the sample
  pattern in [splitter](/patterns/splitter).
variants:
- pattern:
  - '................**...........*......**..................'
  - '................**..........*.*....*..*.................'
  - '............................*.*...*.***..**.............'
  - '...........................**.**.*.*......*.............'
  - '...............................*.*...**...*.*...........'
  - '...........................**.*..****.*....**...........'
  - '...........................**.*.*...*...................'
  - '...............................*.*...*..................'
  - '................................*.*...*.................'
  - '.................................*...**..............*..'
  - '....................................................*.*.'
  - '.....................................................*..'
  - '........................................................'
  - '........................**..............................'
  - '........................**..............................'
  - '.........**.............................................'
  - '........*..*............................................'
  - '.......*.**..........................................**.'
  - '.......*.............................................**.'
  - '......**................................................'
  - '.....................**.................................'
  - '.....................*..................................'
  - '......................***...............................'
  - '........................*.....**........................'
  - '.............................*.*........................'
  - '.............................*..........................'
  - '............................**..........................'
  - '........................................................'
  - '........................................................'
  - '....................................*...............**..'
  - '...................................*.*..............*.*.'
  - '...................................*.*................*.'
  - '....................................*.................**'
  - '***.....................................**..............'
  - '..*.....................................*.*.............'
  - '.*........................................*.............'
  - '..........................................**............'
...
