---
name: Herschel conduit
id: herschel-conduit
permalink: /patterns/herschel-conduit
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [conduit](/patterns/conduit) that moves a [Herschel](/patterns/herschel) from one place
  to another.  See also [Herschel loop](/patterns/herschel-loop).
  Well over a hundred simple stable Herschel conduits are currently
  known.  As of June 2018 the number is approximately 150, depending on
  the precise definition of "simple" - e.g., fitting inside a 100x100
  bounding box, and producing output in no more than 300 [tick](/patterns/tick)s.  In
  general a Herschel conduit can be called "simple" if its active
  reaction does not return to a  Herschel stage except at its output.
  Compare [elementary conduit](/patterns/elementary-conduit), [composite conduit](/patterns/composite-conduit).  A description of
  common usage in complex circuitry, using [syringe](/patterns/syringe)s and [Snark](/patterns/snark)s to
  make compact connections, can be found in [Herschel circuit](/patterns/herschel-circuit).
  The original [universal](/patterns/universal) set consisted of sixteen stable Herschel
  conduits, discovered between 1995 and 1998 by Dave Buckingham (DJB)
  and Paul Callahan (PBC).  These are shown in the following table.  In
  this table, the number in "name/steps" is the number of [tick](/patterns/tick)s
  needed to produce an output Herschel from the input Herschel.  "m" tells how the Herschel is moved (R = turned right, L = turned left, B
  = turned back, F = unturned, f = flipped), and "dx" and "dy" give the
  displacement of the centre cell of the Herschel (assumed to start in
  the orientation shown above).
  ```
  -----------------------------------------
  name/steps  m     dx   dy     discovery
  -----------------------------------------
  [R64](/patterns/r64)       R     11    9   DJB, Sep 1995
  [Fx77](/patterns/fx77)      Ff    25   -8   DJB, Aug 1996
  [L112](/patterns/l112)      L     12  -33   DJB, Jul 1996
  [F116](/patterns/f116)      F     32    1   PBC, Feb 1997
  [F117](/patterns/f117)      F     40   -6   DJB, Jul 1996
  [Bx125](/patterns/bx125)     Bf    -9  -17   PBC, Nov 1998
  [Fx119](/patterns/fx119)     Ff    20   14   DJB, Sep 1996
  [Fx153](/patterns/fx153)     Ff    48   -4   PBC, Feb 1997
  [L156](/patterns/l156)      L     17  -41   DJB, Aug 1996
  [Fx158](/patterns/fx158)     Ff    27   -5   DJB, Jul 1996
  [F166](/patterns/f166)      F     49    3   PBC, May 1997
  [Fx176](/patterns/fx176)     Ff    45    0   PBC, Oct 1997
  [R190](/patterns/r190)      R     24   16   DJB, Jul 1996
  [Lx200](/patterns/lx200)     Lf    17  -40   PBC, Jun 1997
  [Rx202](/patterns/rx202)     Rf     7   32   DJB, May 1997
  [Bx222](/patterns/bx222)     Bf    -6  -16   PBC, Oct 1998
  -----------------------------------------
  ```
  See also [Herschel transceiver](/patterns/herschel-transceiver).
...
