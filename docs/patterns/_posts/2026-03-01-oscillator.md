---
name: oscillator
id: oscillator
permalink: /patterns/oscillator
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any pattern that is a [predecessor](/patterns/predecessor) of itself.  The term
  is usually restricted to non-[stable](/patterns/stable) finite patterns; period 1
  oscillators are [stable](/patterns/stable) and are usually just called [still life](/patterns/still-life)s.
  The [blinker](/patterns/blinker) is the smallest non-stable oscillator, having period 2.
  There are oscillators of almost all higher periods (see
  [omniperiodic](/patterns/omniperiodic)).  In general [cellular automaton](/patterns/cellular-automaton) theory the term
  "oscillator" usually covers [spaceship](/patterns/spaceship)s as well, but this usage is
  not normal in Life.
  Oscillators consisting of separate objects which do not react in
  any phase are usually ignored.  For example, a separated [blinker](/patterns/blinker)
  and [pulsar](/patterns/pulsar) makes a period 6 oscillator, but is considered
  [trivial](/patterns/trivial).
  An oscillator can be divided into a [rotor](/patterns/rotor) and a [stator](/patterns/stator), and the
  stator can be further subdivided into [bushing](/patterns/bushing) and [casing](/patterns/casing).  Some
  oscillators have no casing cells, and a few 100%-[volatility](/patterns/volatility)
  oscillators also have no bushing cells.
  An oscillator can be constructed from any [gun](/patterns/gun) as long as [eater](/patterns/eater)s
  can be added to consume its output.  If it is a [true](/patterns/true) [gun](/patterns/gun) then the
  period of the oscillator will be the same as the gun - unless the
  eating mechanism multiplies the period, as in the case of gliders
  caught by a [boat-bit](/patterns/boat-bit).
  With the discovery of [reflector](/patterns/reflector)s, [relay](/patterns/relay)s provide an easy way to
  create oscillators of all large periods.  For example, eight gliders
  travelling in a loop created by four [Snark](/patterns/snark)s can create any period
  above 42, with a population never exceeding 356 live cells.
  For the very lowest periods, whole families of [extensible](/patterns/extensible)
  oscillators are known.  Examples of this are [barberpole](/patterns/barberpole), [cross](/patterns/cross),
  [pentoad](/patterns/pentoad), [p6 shuttle](/patterns/p6-shuttle), [snacker](/patterns/snacker), and [multiple roteightors](/patterns/multiple-roteightors).  Any
  of the [shuttle](/patterns/shuttle)s are oscillators by definition, for example the
  [queen bee shuttle](/patterns/queen-bee-shuttle).  Many of these are also extensible.  Other
  oscillators such as [figure-8](/patterns/figure-8) and [tumbler](/patterns/tumbler) have unique mechanisms
  that are not part of an extended family.
  Some oscillators are useful because of the [perturbation](/patterns/perturbation)s they can
  cause to other objects.  This is especially true if they provide a
  [spark](/patterns/spark) on their boundary.  Some oscillators are explicitly found by
  [search program](/patterns/search-program)s in order to produce these sparks, such as
  [pipsquirter](/patterns/pipsquirter)s.
  Some higher period oscillators have been found while running random
  [soup](/patterns/soup)s.  This is especially true if the soup is run on a cylindrical
  or torus [universe](/patterns/universe).  Sometimes the found objects can be moved to the
  normal universe and supported there by added [catalyst](/patterns/catalyst)s.
  [Achim's p144](/patterns/achim-s-p144) is an example.
...
