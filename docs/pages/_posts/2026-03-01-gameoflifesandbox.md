---
layout: automata
permalink: /gameoflifesandbox.html
title: Game Of Life (more YAML control, sandbox)
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
  defaultState:
    r: 255
    g: 255
    b: 255
  states:
    personality-aggressive:
      r: 255
      g: 0
      b: 0
    personality-calm:
      r: 0
      g: 255
      b: 0
  initialProbabiblity:
    - states:
      - personality-calm
      probability: 0.1
    - states:
      - personality-aggressive
      probability: 0.03
  rules:
- class: "ClickController"
---
