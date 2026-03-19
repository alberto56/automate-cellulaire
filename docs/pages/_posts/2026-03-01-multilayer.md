---
layout: automata
permalink: /multilayer.html
title: Multilayer
controller:
  classes:
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
