---
name: line crosser
id: line-crosser
permalink: /patterns/line-crosser
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A pattern which is able to send a signal across an
  infinite diagonal line of live cells without destroying the line.
  David Bell built one in August 2006.  It uses many one-shot period
  44160 [glider gun](/patterns/glider-gun)s on both sides of the line having the proper
  synchronization to create the reactions shown in
  [line-cutting reaction](/patterns/line-cutting-reaction) and [line-mending reaction](/patterns/line-mending-reaction).
  An input glider can arrive at any multiple of 44160 generations to
  first cut the line, then send a glider through the gap, and finally
  mend the line while leaving an output glider on the other side.
  A line crosser whose complete mechanism is on one side of the line
  is theoretically possible, using [single-channel](/patterns/single-channel) construction
  methods for example.
...
