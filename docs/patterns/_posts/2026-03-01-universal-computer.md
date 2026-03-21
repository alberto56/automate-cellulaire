---
name: universal computer
id: universal-computer
permalink: /patterns/universal-computer
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A computer that can compute anything that is
  computable.  (The concept of computability can be defined in terms of
  Turing machines, or by Church's lambda calculus, or by a number of
  other methods, all of which can be shown to lead to equivalent
  definitions.)  The relevance of this to Life is that both Bill Gosper
  and John Conway proved early on that it is possible to construct a
  universal computer in the Life universe.  (To prove the universality
  of a [cellular automaton](/patterns/cellular-automaton) with simple rules was in fact Conway's aim
  in Life right from the start.)  Conway's proof is outlined in
  [Winning Ways](/patterns/winning-ways), and also in [The Recursive Universe](/patterns/the-recursive-universe).
  Until recently, no universal Life computer had ever been built in
  practice  In April 2000, Paul Rendell completed a Turing machine
  construction (see [http://rendell-attic.org/gol/tm.htm](http://rendell-attic.org/gol/tm.htm) for details).
  This, however, has a finite tape, as opposed to the infinite tape of
  a true Turing machine, and is therefore not a universal computer.
  But in November 2002, Paul Chapman announced the construction of a
  universal computer, see
  [http://www.igblan.free-online.co.uk/igblan/ca/](http://www.igblan.free-online.co.uk/igblan/ca/). This is a universal
  register machine based around Dean Hickerson's
  [sliding block memory](/patterns/sliding-block-memory).
  In 2009 Adam P. Goucher constructed a programmable [Spartan](/patterns/spartan)
  universal computer/constructor pattern using stable [Herschel](/patterns/herschel)
  circuitry.  It included memory tapes and registers capable of holding
  a simple universal instruction set and program data, and also a
  minimal [single-arm](/patterns/single-arm) universal constructor.  Its size meant that it
  was extremely impractical to program it to be [self-constructing](/patterns/self-constructing),
  though this was theoretically possible if the escape of large numbers
  of gliders could be allowed as a side effect.
  In February 2010, Paul Rendell completed a universal Turing machine
  design with an unlimited tape, as described in his thesis at
  [http://eprints.uwe.ac.uk/22323/1/thesis.pdf](http://eprints.uwe.ac.uk/22323/1/thesis.pdf).
  In 2016 Nicolas Loizeau ("Coban") completed a Life pattern
  emulating a complete 8-bit programmable computer.
  See also [universal constructor](/patterns/universal-constructor).
...
