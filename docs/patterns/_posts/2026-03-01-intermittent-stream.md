---
name: intermittent stream
id: intermittent-stream
source:
  url: https://conwaylife.com/ref/lexicon/lex_home.htm
  desc: Life Lexicon Home Page, Conwaylife.com
  license: https://creativecommons.org/licenses/by-sa/3.0/
  changes: []
description: |
  A [stream](/patterns/stream) of spaceships which is based on a
  periodic stream, but which can contain holes where some of the
  spaceships are not present. There is a base period for the
  intermittent stream such that if a spaceship arrives at a specific
  location, then it always does so at a generation which is a multiple
  of the base period.  For example, the output from a period 30 glider
  gun where every third glider is deleted is an intermittent stream.  A
  [pseudo-random glider generator](/patterns/pseudo-random-glider-generator) can produce a complicated
  intermittent stream with no obvious pattern.
  Intermittent streams can be used to transmit [signal](/patterns/signal)s, where holes
  in the stream can also convey information.  For example, the stream
  can be processed by an [inverter](/patterns/inverter) having the same period.
...
