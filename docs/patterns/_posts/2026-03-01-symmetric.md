---
name: symmetric
id: symmetric
permalink: /patterns/symmetric
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any object which can be rotated and/or flipped over an axis
  and still maintain the same shape.  Many common small objects such as
  the [block](/patterns/block), [beehive](/patterns/beehive), [pond](/patterns/pond), [loaf](/patterns/loaf), [clock](/patterns/clock), and [blinker](/patterns/blinker) are
  symmetric.  Some larger symmetric objects are [Kok's galaxy](/patterns/kok-s-galaxy),
  [Achim's p16](/patterns/achim-s-p16), [cross](/patterns/cross), [Eureka](/patterns/eureka), and the [pulsar](/patterns/pulsar).
  Large symmetric objects can easily be created by placing multiple
  copies of any finite object together in a symmetrical way.  Unless
  the individual objects interact significantly, this is considered
  trivial and is not considered further here (e.g., two [LWSS](/patterns/lwSs)s
  travelling together a hundred cells apart).
  There are two kinds of symmetry.  Odd symmetry occurs when an
  object's line of reflection passes through the center of a line of
  cells.  Objects with odd symmetry have an odd number of columns or
  rows, and can have a [gutter](/patterns/gutter).  Even symmetry occurs when the line of
  reflection follows the boundary between two lines of cells.  Objects
  with even symmetry have an even number of columns or rows.
  Because the Life universe and its rules are symmetric, all
  symmetric objects must remain symmetric throughout their [evolution](/patterns/evolution).
  Most non-symmetric objects keep their non-symmetry as they evolve,
  but some can become symmetric, especially if they result in a single
  object.  Here is a slightly more complicated example where two
  gliders interact to form a [blockade](/patterns/blockade).
variants:
- pattern:
  - '..*.........'
  - '*.*.........'
  - '.**........*'
  - '.........**.'
  - '..........**'
  description: |
    Many useful objects are symmetric along an orthogonal axis.  This
    commonly occurs by placing two copies of an object side by side to
    change the behaviour of the objects due to the inhibition or killing
    of new cells at their [gutter](/patterns/gutter) interface.  Examples of this are
    [twin bees shuttle](/patterns/twin-bees-shuttle), [centinal](/patterns/centinal), and the object shown in [puffer](/patterns/puffer).
    Other useful symmetric objects are created by perturbing a symmetric
    object using nearby [oscillator](/patterns/oscillator)s or [spaceship](/patterns/spaceship)s in a symmetric
    manner.  Examples of this are [Schick engine](/patterns/schick-engine), [blinker ship](/patterns/blinker-ship), and
    [hivenudger](/patterns/hivenudger).
    Many [spaceship](/patterns/spaceship)s found by [search program](/patterns/search-program)s are symmetric because
    the search space for such objects is much smaller than for
    non-symmetrical spaceships.  Examples include [dart](/patterns/dart), [60P5H2V0](/patterns/60p5h2v0), and
    [119P4H1V0](/patterns/119p4h1v0).
...
