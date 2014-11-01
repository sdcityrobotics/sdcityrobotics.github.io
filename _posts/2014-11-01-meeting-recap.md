---
layout: post
title: "Club update, October 22nd 2014"
description: "Club update for Friday 22nd, October, 2014"
category: blog
tags: [blog, update, hardware, software]
---
{% include JB/setup %}

## Administrative Recap

## Sonar Interface (Presentation)

**GOAL:** Get active communication from Sonar System to Arduino.

1. Info
2. How it works
3. Technical problems
4. What needs to be done

### Information

#### Hardware

(insert pictures for each item)

- **AD9833** Frequency generator
- **ATMEGA 16A** Sonar system (custom fab)
- **ARDUINO MEGA 2560** NavBox (Arduino Uno pictured)

**Interface:**

(insert diagram here)

#### Software

**Bitwise operators**

Function       | Symbol
:---:          | :---:
AND            | `&`
OR             | `|`
NOT            | `~`
bitshift left  | `<<`
bitshift right | `>>`

- Serial peripheral interface
- 4-bit bus
- Two/twin wire interface (TWI/I2C)

### Issues

- Unstable frequency
- Physical change of crystals
- Unstable TWI communication

### To Do

- Programmable oscillator
- Continue research and development on TWI

## Logo Designs

- Robotic arm design, and name ribbons
- Diamond with crossing wrenches design

