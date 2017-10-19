---
title: Spring
description: Accurate, versatile spring animation.
category: animation
---

# Spring

A spring animation based on `stiffness`, `damping` and `mass`.

This simulation offers smoother motion and a greater variety of spring-feels than the basic spring integration found in [physics](/api/physics).

It's based on the differential equations governing a [damped harmonic oscillator](https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator), the same as those underlying Apple's `CASpringAnimation`.

## Import

```javascript
import { spring } from 'popmotion';
// or stand-alone:
import spring from 'popmotion/lib/animations/spring';
```

## Usage

```javascript
spring({ to: 500, stiffness: 200, damping: 20 })
  .start((v) => console.log(v))
```

## Props

- `from: number = 0.0`: Value to start from.
- `to: number = 0.0`: Value to spring to.
- `stiffness: number = 100`: Spring stiffness.
- `damping: number = 10`: Strength of opposing force.
- `mass: number = 1.0`: Mass of the moving object.
- `velocity: number = 0.0`: Initial velocity of spring.
- `restDelta: number = 0.01`: End animation if distance to `to` is below this value **and** `restSpeed` is `true`.
- `restSpeed: number = 0.01`: End animation if speed drops below this value **and** `restDelta` is `true`.

## Methods

- `stop(): void`