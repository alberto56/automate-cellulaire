---
name: Snarkmaker
id: snarkmaker
permalink: /patterns/snarkmaker
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [single-channel](/patterns/single-channel) [stream](/patterns/stream) of [glider](/patterns/glider)s that, when aimed
  to collide with an [elbow](/patterns/elbow) [block](/patterns/block) in a specific location, will
  perform a [slow glider construction](/patterns/slow-glider-construction) of a [Snark](/patterns/snark), directly on the
  same [lane](/patterns/lane) as the incoming gliders.  This allows a
  [construction arm](/patterns/construction-arm) to add one or more [lossless elbow](/patterns/lossless-elbow)s, so that it
  can bend around multiple corners without an exponential increase in
  construction cost.
  The Snarkmaker recipe used in the first single-channel [Demonoid](/patterns/demonoid),
  [Orthogonoid](/patterns/orthogonoid), and [spiral growth](/patterns/spiral-growth) patterns contains 2,254 gliders.
  This could be considerably reduced with a customized
  [search program](/patterns/search-program).
...
