---
name: period multiplier
id: period-multiplier
permalink: /patterns/period-multiplier
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A term commonly used for a [pulse divider](/patterns/pulse-divider), because
  dividing the number of [signal](/patterns/signal)s in a regular stream by N necessarily
  multiplies the [period](/patterns/period) by N.  The term "period multiplier" can be
  somewhat misleading in this context, because most such circuits can
  accept input streams that are not strictly [periodic](/patterns/periodic).
  Reactions have also been found to period double or period triple
  the output of some [rake](/patterns/rake)s to create high-period rakes in a
  relatively small space (i.e., an exponential increase in period for a
  linear increase in size).
  For [Herschel](/patterns/herschel) signals and [glider gun](/patterns/glider-gun)s, a number of small period
  doubler, tripler, and quadrupler mechanisms are known.  For example,
  the following [conduit](/patterns/conduit) produces one output glider after accepting
  four input [B-heptomino](/patterns/b-heptomino)es, or four Herschels if a conduit such as
  [F117](/patterns/f117) is prepended that includes the same [BFx59H](/patterns/bfx59h) converter.
variants:
- pattern:
  - '....................*........................'
  - '....................***......................'
  - '.......................*.....................'
  - '............**........**.....................'
  - '.............*...............................'
  - '.............*.*.............................'
  - '**............**.............................'
  - '*.*..........................................'
  - '..*..........................................'
  - '..**.........................................'
  - '.............................................'
  - '.............................................'
  - '...........................................**'
  - '...........................................**'
  - '.............................................'
  - '.*...**......................................'
  - '.**..**......................................'
  - '..**.........................................'
  - '.**..........................................'
  - '.............................................'
  - '.............................................'
  - '.............................................'
  - '.............................................'
  - '.............................................'
  - '.............................................'
  - '.............................................'
  - '.............................................'
  - '.................................**..........'
  - '.........**......................**..........'
  - '........*.*..................................'
  - '........*....................................'
  - '.......**....................................'
  description: |
    See [semi-Snark](/patterns/semi-snark) and [tremi-Snark](/patterns/tremi-snark) for additional examples using
    [glider](/patterns/glider) streams.  As of June 2018 no stable period-multiplying
    [elementary conduit](/patterns/elementary-conduit)s are known for a multiplication factor of five
    or higher, though it is easy to construct composite ones.
...
