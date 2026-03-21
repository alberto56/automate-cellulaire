---
name: lightspeed wire
id: lightspeed-wire
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  Any [wick](/patterns/wick) that can [burn](/patterns/burn) non-destructively at the
  speed of light.  Lightspeed wires are a type of [reburnable fuse](/patterns/reburnable-fuse).
  These are potentially useful for various things, but so far the
  necessary mechanisms are very large and unwieldy.  In October 2002,
  Jason Summers discovered a lightspeed reaction travelling through an
  orthogonal chain of beehives.  Summers completed a period-1440
  lightspeed [telegraph](/patterns/telegraph) based on this reaction in 2003.
variants:
- pattern:
  - '...*...........................................................'
  - '.*...*.........................................................'
  - '.*....*....**.**...............................................'
  - '*......*...******...**...**...**...**...**...**...**...**...**.'
  - '*......*..*......*.*..*.*..*.*..*.*..*.*..*.*..*.*..*.*..*.*..*'
  - '**.....*...******...**...**...**...**...**...**...**...**...**.'
  - '......*....**.**...............................................'
  - '....*..........................................................'
  description: |
    A [stable](/patterns/stable) lightspeed [transceiver](/patterns/transceiver) mechanism using this same
    signal reaction, the [p1 telegraph](/patterns/p1-telegraph), was constructed by Adam P.
    Goucher in 2010; the bounding boxes of both the [transmitter](/patterns/transmitter) and
    [receiver](/patterns/receiver) are over 5000 cells on a side.  A more compact periodic
    [high-bandwidth telegraph](/patterns/high-bandwidth-telegraph) with a much improved transmission rate was
    completed by Louis-Francois Handfield in 2017.
    The following diagram shows an older example of a lightspeed wire,
    with a small defect that travels along it at the speed of light.  As
    of June 2018, no method has been found of creating such a defect in
    the upstream end of this particular stable wire, or of
    non-destructively detecting the arrival of the defect and repairing
    the wire at the downstream end.
- pattern:
  - '....**..**..**..**..**..**..**..**..**..**..**..**..**....'
  - '....**..**..**..**..**..**..**..**..**..**..**..**..**....'
  - '..........................................................'
  - '..******************************************************..'
  - '.*......*...............................................*.'
  - '*.*****....*********************************************.*'
  - '.*.....*................................................*.'
  - '..******************************************************..'
  - '..........................................................'
  - '....**..**..**..**..**..**..**..**..**..**..**..**..**....'
  - '....**..**..**..**..**..**..**..**..**..**..**..**..**....'
...
