---
name: single-channel
id: single-channel
permalink: /patterns/single-channel
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A type of [universal constructor](/patterns/universal-constructor) discovered and
  developed by Simon Ekstrom and others starting in December 2015.  The
  initial [elbow operation](/patterns/elbow-operation) toolkit was near-minimal, with just one
  [push](/patterns/push), one [pull](/patterns/pull), and one output glider of each colour (see
  [colour of a glider](/patterns/colour-of-a-glider)).  Later searches produced a much larger and
  more efficient library.
  Single-channel [recipe](/patterns/recipe)s consist of a [stream](/patterns/stream) of [glider](/patterns/glider)s on a
  single [lane](/patterns/lane) and aimed at a [construction elbow](/patterns/construction-elbow), usually separated
  from each other by at least 90 [tick](/patterns/tick)s.  In spite of these strict
  limitations, single-channel recipes can be made to do surprising
  things.  For example, it is possible to build a [Snark](/patterns/snark) directly on
  the [construction lane](/patterns/construction-lane) of an active construction arm, starting from
  a single [elbow](/patterns/elbow) [block](/patterns/block).  This can allow the arm to reach
  efficiently around complex obstructions by bending itself through
  multiple [lossless elbow](/patterns/lossless-elbow)s.  Known recipes can also remove an elbow
  when it is no longer needed, by controlled demolition of the Snark.
  As of June 2018, almost all single-channel recipes are made up of
  [singleton](/patterns/singleton)s and [synchronized](/patterns/synchronized) pairs of gliders, but no synchronized
  triplets or larger groups.  This is not an inherent limitation of
  single-channel construction, but rather a limitation in the
  [search program](/patterns/search-program) used to find currently known single-channel
  [toolkit](/patterns/toolkit)s.
  A useful byproduct of this limitation is that single-channel
  recipes can be trivially adjusted to allow them to safely cross
  perpendicular data streams, including other single-channel recipes
  (or earlier parts of the same recipe).  To avoid collisions with a
  crossing stream, each singleton glider or glider pair can safely be
  delayed by any even number of ticks, or technically by any multiple
  of the period of the current [intermediate target](/patterns/intermediate-target).  The final result
  of the construction will not be affected.
...
