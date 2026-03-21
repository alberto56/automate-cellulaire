---
layout: automata
permalink: /red
title: Game Of Life (more YAML control)
controller:
  classes:
  - class: "GameOfLife3"
    speed: 30
    alive:
      r: 255
      g: 0
      b: 0
    dead:
      r: 255
      g: 255
      b: 255
    initialAliveProbability: 0
  - class: "ClickController"
---
