---
name: universal constructor
id: universal-constructor
permalink: /patterns/universal-constructor
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A pattern that is capable of constructing
  almost any pattern that has a [glider synthesis](/patterns/glider-synthesis).  This definition is
  a bit vague.  A precise definition seems impossible because it is not
  known, for example, whether all [still life](/patterns/still-life)s are constructible.  In
  any case, a universal constructor ought to be able to construct
  itself in order to qualify as such.
  An outline of Conway's proof that such a pattern exists can be
  found in [Winning Ways](/patterns/winning-ways), and also in [The Recursive Universe](/patterns/the-recursive-universe).  The
  key mechanism for the production of gliders with any given path and
  timing is known as side-tracking, and is based on the
  [kickback reaction](/patterns/kickback-reaction).  A universal constructor designed in this way
  can also function as a universal destructor:  it can delete almost
  any pattern that can be deleted by gliders.
  In May 2004, Paul Chapman and Dave Greene produced a prototype
  programmable universal constructor.  This is able to construct
  objects by means of [slow glider construction](/patterns/slow-glider-construction)s.  It likely that it
  could be programmed to construct itself, but the necessary program
  would be very large; moreover an additional mechanism would be needed
  in order to copy the program.
  A universal constructor is theoretically most useful when attached
  to a [universal computer](/patterns/universal-computer), which can be programmed to control the
  constructor to produce the desired pattern of gliders.  In what
  follows I will assume that a universal constructor always includes
  this computer.
  The existence of a universal constructor/destructor has a number of
  theoretical consequences.
  For example, the constructor could be programmed to make copies of
  itself.  This is a [replicator](/patterns/replicator).
  The constructor could even be programmed to make just one copy of
  itself translated by a certain amount and then delete itself. This
  would be a (very large, very high period) [spaceship](/patterns/spaceship).  Any
  translation is possible, so that the spaceship could travel in any
  direction.  If the constructor makes a rotated but unreflected copy
  of itself, the result would be a looping spaceship or
  [reflectorless rotating oscillator](/patterns/reflectorless-rotating-oscillator).
  The constructor could also travel slower than any given speed,
  since we could program it to perform some time-wasting task (such as
  repeatedly constructing and deleting a block) before copying itself.
  Of course, we could also choose for it to leave some debris behind,
  thus making a [puffer](/patterns/puffer).
  It is also possible to show that the existence of a universal
  constructor implies the existence of a [stable](/patterns/stable) [reflector](/patterns/reflector).  This
  proof is not so easy, however, and is no longer of much significance
  now that explicit examples of such reflectors are known.
  Progressively smaller universal-constructor mechanisms without an
  attached universal computer have been used in the
  [linear propagator](/patterns/linear-propagator), [spiral growth](/patterns/spiral-growth) pattern, and the [Demonoid](/patterns/demonoid)s and
  [Orthogonoid](/patterns/orthogonoid).  See also [single-channel](/patterns/single-channel).
  Another strange consequence of the existence of universal
  constructors was pointed out by Adam P. Goucher and Tanner Jacobi in
  2015.  Any glider-constructible pattern, no matter how large, can be
  constructed with a fixed number of gliders, by working out a
  construction recipe for a universal constructor attached to a decoder
  that measures the distance to a faraway object.  The object's
  position encodes a numeric value that can be processed to retrieve as
  many bits of information as are needed to build a [slow salvo](/patterns/slow-salvo) to
  construct any given target pattern.  The simplest design, requiring
  less than a hundred gliders, is described in [reverse caber tosser](/patterns/reverse-caber-tosser).
...
