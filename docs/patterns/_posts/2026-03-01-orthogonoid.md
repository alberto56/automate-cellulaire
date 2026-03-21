---
name: Orthogonoid
id: orthogonoid
permalink: /patterns/orthogonoid
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  (256c/3476016, p3476016)  A [self-constructing](/patterns/self-constructing)
  [spaceship](/patterns/spaceship) analogous to the [Demonoid](/patterns/demonoid)s, with a slow orthogonal
  direction of travel.  The first example was completed by Dave Greene
  on 29 June 2017, with a top speed of 16c/217251 (this is just
  256c/3476016 in lowest terms).
  The construction recipe is a stream of MWSSes, with the recovery
  time limited to 90 ticks by the [Lx200](/patterns/lx200) [dependent conduit](/patterns/dependent-conduit) that
  follows the initial [syringe](/patterns/syringe) converter.  The design is
  [hashlife](/patterns/hashlife)-friendly, meaning that the spaceship can be trivially
  adjusted so that spatial and temporal offsets are exact powers of
  two; period 4194304 and period 8388608 versions have been
  constructed, with speeds of c/16384 and c/32768 respectively.
  The MWSSes are converted to [Herschel](/patterns/herschel)s, which produce a standard
  [single-channel](/patterns/single-channel) glider stream that runs the Orthogonoid's single
  construction arm.  After the child circuitry is complete, a
  previously constructed [Snark](/patterns/snark) in the parent is removed from the
  construction arm lane, converting it to a "destruction arm" that
  shoots down the previous constructor/reflector in the series.
...
