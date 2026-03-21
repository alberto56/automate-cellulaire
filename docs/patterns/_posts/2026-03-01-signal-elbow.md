---
name: signal elbow
id: signal-elbow
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [conduit](/patterns/conduit) with  [signal](/patterns/signal) output 90 degrees from its
  input.  This term is commonly used only for signal [wire](/patterns/wire)s,
  particularly [2c/3](/patterns/2c/3) signals.  A [Snark](/patterns/snark) could reasonably be called a
  "glider elbow", but [glider reflector](/patterns/glider-reflector) is the standard term.  A
  signal elbow with a [recovery time](/patterns/recovery-time) less than 20 ticks would enable a
  trivial proof that Conway's Life is [omniperiodic](/patterns/omniperiodic).
  A near miss is the following elbow-like [converter](/patterns/converter) found by Dean
  Hickerson.  It successfully turns a 2c/3 signal by 90 degrees, but
  unfortunately changes it to a double-length signal in the process.
  This means that further copies of the converter can not be appended
  (e.g., to make a closed loop).
variants:
- pattern:
  - '........................*..*......'
  - '........................******....'
  - '..............................*.**'
  - '......................*****.*.*.**'
  - '.....................*......*.*...'
  - '.....................*****..*.*...'
  - '..................*.......*.**....'
  - '..................******..*.......'
  - '........................*.*.......'
  - '................******..*.**......'
  - '..........**...*......*.*.........'
  - '.........*..*..*****..*.*.........'
  - '........*.***.......*.**..........'
  - '....**.*.*...*****..*.............'
  - '.....*.*...*......*.*.............'
  - '.....*.*..******..*.**............'
  - '...*.*.*.*......*.*...............'
  - '..*.**..*.****..*.*...............'
  - '..*...*.*.*...*.**................'
  - '**.**.*.*...*.*...................'
  - '.*.*..*.****.*.***................'
  - '*..*.*.......*...*................'
  - '.***..********....................'
  - '....*.*...........................'
  - '...**.*..*******..................'
  - '..*..**.*.......*.................'
  - '..**....*..******.................'
  - '........*.*.......................'
  - '.......**.*..******...............'
  - '..........*.*......*..............'
  - '..........*.*..*****..............'
  - '...........**.*.......*...........'
  - '..............*..******...........'
  - '..............*.*.................'
  - '.............**.*..******.........'
  - '................*.*......*.**.....'
  - '................*.*..*****.**.....'
  - '.................**.*.............'
  - '....................*..******.....'
  - '....................*.*.....*.....'
  - '...................**.*..***......'
  - '......................*.*.....**..'
  - '......................*..*....**..'
  - '.......................**.........'
  description: |
    Relatively small [composite](/patterns/composite) [MWSS](/patterns/mwSs) elbows can now be constructed,
    using Tanner Jacobi's 2015 discovery of a small [H-to-MWSS](/patterns/h-to-mwSs)
    component. For example, the [Orthogonoid](/patterns/orthogonoid) includes a
    constructor/reflector that reflects an MWSS stream by 180 degrees,
    but it can be trivially reconfigured to make a 90-degree MWSS elbow.
...
