---
layout: automata
permalink: /multilayer.html
title: Multilayer
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
- class: "Multilayer"
  speed: 10
  seeds:
  - probability: 0.1
    attributes:
    - name: opportunist
      value: false
    - name: worker
      value: true
  - probability: 0.1
    attributes:
    - name: opportunist
      value: true
    - name: worker
      value: false
- class: "ClickController"
---
