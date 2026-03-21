---
layout: automata
permalink: /gameoflifeymlmore.html
title: Game Of Life (more YAML control, more rules)
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
  speed: 60
  alive:
    r: 255
    g: 0
    b: 0
  dead:
    r: 255
    g: 255
    b: 255
  initialAliveProbability: 0.6
  rules:
    - aliveNeighbours:
        compare: equals
        count: 1
      previouslyAlive: true
      nextAlive: false
    - aliveNeighbours:
        compare: equals
        count: 3
      previouslyAlive: true
      nextAlive: false
    - aliveNeighbours:
        compare: morethan
        count: 6
      previouslyAlive: false
      nextAlive: true
    # - aliveNeighbours:
    #     compare: morethan
    #     count: 5
    #   previouslyAlive: false
    #   nextAlive: true
    # - aliveNeighbours:
    #     compare: equals
    #     count: 5
    #   previouslyAlive: true
    #   nextAlive: false
    # - aliveNeighbours:
    #     compare: equals
    #     count: 2
    #   previouslyAlive: false
    #   nextAlive: true
    # - aliveNeighbours:
    #     compare: equals
    #     count: 4
    #   previouslyAlive: false
    #   nextAlive: true
    # - aliveNeighbours:
    #     compare: morethan
    #     count: 3
    #   previouslyAlive: true
    #   nextAlive: false
    # - aliveNeighbours:
    #     compare: equals
    #     count: 3
    #   previouslyAlive: false
    #   nextAlive: true
    # - aliveNeighbours:
    #     compare: equals
    #     count: 5
    #   previouslyAlive: true
    #   nextAlive: true
- class: "ClickController"
---
