---
name: de Bruijn graph
id: de-bruijn-graph
permalink: /patterns/de-bruijn-graph
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  As applied to Life, a de Bruijn graph is a graph
  showing which pieces can be linked to which other pieces to form a
  valid part of a Life pattern of a particular kind.
  For example, if we are interested in [still life](/patterns/still-life)s, then we could
  consider 2x3 rectangular pieces and the de Bruijn graph would show
  which pairs of these can be overlapped to form 3x3 squares in which
  the centre cell remains unchanged in the next generation.
  David Eppstein's [search program](/patterns/search-program) [gfind](/patterns/gfind) is based on de Bruijn
  graphs.
...
