---
name: dependent conduit
id: dependent-conduit
permalink: /patterns/dependent-conduit
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [Herschel conduit](/patterns/herschel-conduit) in which the input [Herschel](/patterns/herschel)
  interacts with catalysts in the first few ticks.  The standard
  interaction actually starts at T=-3, before the Herschel is
  completely formed.  Compare [independent conduit](/patterns/independent-conduit).  The Herschel is
  prevented from emitting its [first natural glider](/patterns/first-natural-glider).  This is useful
  in cases where the previous conduit cannot survive a first natural
  glider emitted from its output Herschel.
  This term is somewhat confusing, since it is actually the previous
  conduit that depends on the dependent conduit to suppress the
  problematic glider.  Dependent conduits such as the [F166](/patterns/f166) and
  [Lx200](/patterns/lx200) do not actually depend on anything.  They can be freely
  connected to any other conduits that fit, as long as the output
  Herschel evolves from its standard great-grandparent.  As of this
  writing, the [Fx158](/patterns/fx158) is the only known case where a conduit's output
  Herschel has an alternate great-grandparent, which is incompatible
  with dependent conduits' initial transparent block.
...
