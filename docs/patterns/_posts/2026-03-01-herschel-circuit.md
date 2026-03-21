---
name: Herschel circuit
id: herschel-circuit
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A series of [Herschel conduit](/patterns/herschel-conduit)s or other components,
  connected by placing them so that the output [Herschel](/patterns/herschel)s from early
  conduits become the input Herschels for later conduits.  Often the
  initial component is a [converter](/patterns/converter) accepting some other signal type
  as input - usually a glider, in which case a [syringe](/patterns/syringe) is most
  commonly used.  The [Silver reflector](/patterns/silver-reflector) is a well-known early
  [Spartan](/patterns/spartan) Herschel circuit from before the syringe was discovered,
  where the initial converter is a [Callahan G-to-H](/patterns/callahan-g-to-h).
  Sometimes a direct connection between two conduits is not possible
  due to unwanted gliders that destroy required [catalyst](/patterns/catalyst)s, or wanted
  gliders that are not able to escape.  In this case, small "spacer" conduits such as [F116](/patterns/f116), [F117](/patterns/f117), [Fx77](/patterns/fx77), [R64](/patterns/r64), [L112](/patterns/l112), or [L156](/patterns/l156) can
  be inserted between the other conduits to solve the problem.
  Some converter or [factory](/patterns/factory) conduits do not produce a Herschel as
  output, instead generating other useful results such as gliders,
  [boat](/patterns/boat)s or [MWSS](/patterns/mwSs)es.  See [Herschel-to-glider](/patterns/herschel-to-glider), [demultiplexer](/patterns/demultiplexer), and
  [H-to-MWSS](/patterns/h-to-mwSs) respectively for examples of these.  For those conduits
  which do produce an unwanted Herschel, an [eater](/patterns/eater) such as [SW-2](/patterns/sw-2) can
  be added to delete it.
  If the first and last conduits of a chain connect to each other in
  a loop then there is no need for a syringe to generate the first
  Herschel, or an eater to consume the last one.  The circuit becomes a
  self-supporting [Herschel loop](/patterns/herschel-loop).  A loop is also formed by a
  [syringe](/patterns/syringe) connected to a Herschel-to-glider converter, with the
  glider reflected back to the syringe's input with glider reflectors
  of the appropriate colour, usually [Snark](/patterns/snark)s.  In either case, if the
  loop has a surplus [glider](/patterns/glider) output, it becomes a [gun](/patterns/gun); if no output
  is available it is an [emu](/patterns/emu).
...
