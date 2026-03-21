---
layout: automata
permalink: /gameoflifeyml.html
title: Game Of Life (more YAML control)
model:
  height: 200
  width: 200
  class: "BasicModel"
views:
- class: "SquarePixelsWithBorder"
  height: 800
  width: 800
  canvas: myCanvas
controllers:
- class: "GameOfLife4"
  speed: 10
  alive:
    r: 0
    g: 0
    b: 0
  dead:
    r: 255
    g: 255
    b: 255
  initialAliveProbability: 0
  rules:
    - aliveNeighbours:
        compare: lessthan
        count: 2
      previouslyAlive: true
      nextAlive: false
    - aliveNeighbours:
        compare: morethan
        count: 3
      previouslyAlive: true
      nextAlive: false
    - aliveNeighbours:
        compare: equals
        count: 3
      previouslyAlive: false
      nextAlive: true
- class: "ClickController"
---
