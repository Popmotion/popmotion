---
title: Spring
description: Accurate, versatile spring animation.
category: animation
---

# Spring

A spring animation based on `stiffness`, `damping` and `mass`.

This simulation offers smoother motion and a greater variety of spring-feels than the basic spring simulation found in [physics](/api/physics).

It's based on the same equations underlying Apple's `CASpringAnimation`.

## Import

```javascript
import { spring } from 'popmotion';
```

## Usage

`spring` accepts a `from` and `to` value, and will output values to the function provided to `start`:

```javascript
spring({ from: 0, to: 100 })
  .start(v => console.log(v))
```

Pass props like `damping`, `stiffness` and `mass` to affect the character of the spring:

```javascript
spring({
  from: 0,
  to: 100,
  stiffness: 200,
  damping: 20
})
```

### Value types

`spring` supports the animation of a number of different value types.

It's generally best output as values that govern physical movement, like `x`, `y` and `rotate`, but it can be used to power colors and shadows.

#### Number

```javascript
spring({ from: 0, to: 100 })
```

#### Units

**Supported**: `px`, `%`, `deg`, `vh`, and `vw`

```javascript
spring({ from: '0px', to: '100px' })
```

#### Colors

**Supported**: RGB(A), HSL(A) and Hex

```javascript
spring({ from: '#fff', to: '#000' })
spring({ from: 'rgba(0, 200, 100, 1)', to: 'rgba(60, 100, 80, 0.5)' })
spring({ from: 'hsl(0, 50%, 50%)', to: 'hsl(180, 80%, 50%)' })
```

#### Complex

Complex sequences of values, like SVG path definitions, CSS shadows and background gradients.

The non-numerical portions of these values must stay in the same format in the `from` and `to` props.

```javascript
spring({
  from: '0px 0px 0px inset rgba(0, 0, 0, 0.2)',
  to: '3px 3px 10px inset rgba(0, 0, 0, 0.5)'
})
```

```javascript
spring({
  from: 'linear-gradient(to right, #fff, #000)',
  to: 'linear-gradient(to right, #333, #666)'
})
```

#### Objects

Named objects composed of any of the above types may also be animated.

`velocity`, `mass`, `damping` and `stiffness` can also be set as objects, to apply property-specific settings:

```javascript
spring({
  from: { x: '0px', y: '0px' },
  to: { x: '100px', y: '200px' },
  stiffness: { x: 200, y: 1000 },
  damping: { x: 10, y: 50 }
})
```

#### Arrays

Arrays composed of any of the above types may also be animated.

`velocity`, `mass`, `damping` and `stiffness` can also be set as arrays, to apply property-specific settings:

```javascript
spring({
  from: ['10vh', 0],
  to: ['50vh', 100],
  stiffness: [400, 1000]
})
```

## Props

The following properties may be passed to `spring`:

### from

Start value of the animation.

**Default:** `0`

### to

End value of the animation.

**Default:** `1`

### stiffness

Stiffness of the spring. Higher values will create more sudden movement.

**Default:** `100`

### damping

Strength of opposing force. If set to `0`, spring will oscillate indefinitely.

**Default:** `10`

### mass

Mass of the moving object. Higher values will result in more lethargic movement.

**Default:** `1`

### velocity

Initial velocity of the object, measured in units per second.

**Default:** `0`

### restDelta

End animation if distance to `to` is below this value **and** speed is below `restSpeed`. When animation ends, spring gets "snapped" to `to`.

**Default:** `0.01`

### restSpeed

End animation if absolute speed (in units per second) drops below this value **and** delta is smaller than `restDelta`.

**Default:** `0.01`

## Methods

### Action methods

`spring()` returns:

#### start

Starts the animation and returns playback controls.

Can be provided **either** a function:

```javascript
spring().start(v => {})
```

Or a named map of functions for `update` and `complete`:

```javascript
spring().start({
  update: v => {},
  complete: () => {}
})
```

#### filter

Returns a new version of the animation, that filters out any value when the provided predicate function returns `false`:

```javascript
const filtered = spring().filter(v => v > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

#### pipe

Returns a new animation that will pass any output value through this series of functions:

```javascript
// This animation will round output values and then double them:
spring({ from: 0, to: 100 })
  .pipe(Math.round, v => v * 2)
  .start(v => {})
```

#### while

Returns a new animation that will `complete` when the provided predicate function returns `false`:

```javascript
// This animation will end when an output value is higher than 0.5:
spring().while(v => v < 0.5)
```

### Playback methods

`spring().start()` starts a new animation and returns the following playback methods:

#### stop

Stops the animation.

## Example

<CodePen id="mqKyjd" />
