---
name: infinite glider hotel
id: infinite-glider-hotel
permalink: /patterns/infinite-glider-hotel
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A pattern by David Bell, named after Hilbert's
  "infinite hotel" scenario in which a hotel with an infinite number of
  rooms has room for more guests even if it is already full, simply by
  shuffling the old guests around.
  In this pattern, two pairs of [Cordership](/patterns/cordership)s moving at c/12 are
  pulling apart such that there is an ever-lengthening [glider](/patterns/glider) track
  between them.  Every 128 generations another glider is [inject](/patterns/inject)ed
  into the glider track (see [LWSS-glider bounce](/patterns/lwSs-glider-bounce)), joining the gliders
  already circulating there. The number of gliders in the track
  therefore increases without limit.
  The tricky part of this construction is that even though all the
  previously injected gliders are repeatedly flying through the
  injection point, that point is guaranteed to be empty when it is time
  for the next glider to be injected.
...
