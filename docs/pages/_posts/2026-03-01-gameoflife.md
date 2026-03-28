---
layout: automata
permalink: /
title: Conway's Game Of Life
model:
  height: 100
  width: 100
  class: "BasicModel"
views:
- class: "SquarePixelsWithBorder"
  height: 800
  width: 800
  canvas: myCanvas
controllers:
- class: "GameOfLife3"
  speed: 30
  alive:
    r: 0
    g: 0
    b: 0
  dead:
    r: 255
    g: 255
    b: 255
  initialAliveProbability: 0
- class: "ClickController"
---
