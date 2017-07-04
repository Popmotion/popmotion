---
title: React
description: Popmotion animation, tweening and input tracking - in React!
category: plugins
---

# Popmotion x React

Popmotion x React provides a simple interface to bring Popmotion's tweening, physics and input tracking capabilities to any React component.

It uses the "function as children" pattern, so you can create declarative interactions with the DOM, SVG, Three.js, A-Frame, Pixi... anything that has a React interface.

## Install

```
npm install --save popmotion-react
```

## MotionValue

The `MotionValue` component allows you to declaratively animate either a single or composite `value`.

### Usage

`MotionValue` is a simple state machine. You provide state transition handlers and it provides simple setters to your component. For instance:

```javascript
import { tween } from 'popmotion';
import { MotionValue } from 'popmotion-react';

const stateChangeHandlers = {
  on: ({ value }) => tween({
    from: value.get(),
    to: 100,
    onUpdate: value
  }).start(),
  off: ({ value }) => tween({
    from: value.get(),
    to: 0,
    onUpdate: value
  }).start()
};

export default () => (
  <MotionValue onStateChange={stateChangeHandlers}>
    {({ v, state, setStateTo }) => (
      <div
        style={{
          background: 'red',
          width: '100px',
          height: '100px',
          transform: 'translateX(' + v + 'px)'
        }}
        onClick={state === 'on' ? setStateTo.off : setStateTo.on}
      />
    )}
  </MotionValue>
);
```

### Props
- `children <Function>` **required**: A function that returns the children component. The function is provided an object of props:
  - `v <Number | Object>`: The current numerical value, or object of named values.
  - `velocity <Number>`: Current velocity, or object of named velocities.
  - `state <String>`: Current state name.
  - `setStateTo <Object>`: Object of setter functions, generated from the states defined in `onStateChange` (each optionally accepts an `Event`).
- `v <Number | Object>`: An initial number, or object of named numbers. If you wish to use named numbers, this is **required**.
- `initialState <String>`: Set an initial state for the value.
- `onStateChange <Object>`: Object of named functions that fire when their state changes. Each function receives an object with the following props:
  - `value <Value | Composite>`
  - `previousState <String>`: State before current state change.
  - `setStateTo <Object>`: Object of state setters (each optionally accepts an `Event`).
  - `e <Event>`: The triggering event, **if** a state setter was called with one.

### Examples

#### Toggle state (click box to toggle)

```marksy
<Example isReactComponent={true}>{`
<MotionValue
  onStateChange={{
    on: ({ value }) => tween({
      from: value.get(),
      to: 100,
      onUpdate: value
    }).start(),
    off: ({ value }) => tween({
      from: value.get(),
      to: 0,
      onUpdate: value
    }).start()
  }}
>
  {({ v, state, setStateTo }) => (
    <div
      style={{
        background: 'red',
        width: '100px',
        height: '100px',
        transform: 'translateX(' + v + 'px)'
      }}
      onClick={(state === 'on') ? setStateTo.off : setStateTo.on}
    />
  )}
</MotionValue>
`}</Example>
```

#### Drag with composite value

```marksy
<Example isReactComponent={true}>{`
<MotionValue
  v={{ x: 0, y: 0 }}
  onStateChange={{
    rest: ({ value, setStateTo }) => {
      const { x, y } = value;
      const springProps = {
        to: 0,
        spring: 500,
        friction: 0.9
      };

      physics({
        ...springProps,
        from: x.get(),
        velocity: x.getVelocity(),
        onUpdate: x
      }).start();

      physics({
        ...springProps,
        from: y.get(),
        velocity: y.getVelocity(),
        onUpdate: y
      }).start();

      document.removeEventListener('mouseup', setStateTo.rest);
      document.removeEventListener('touchend', setStateTo.rest);
    },
    isDragging: ({ value, setStateTo, e }) => {
      const { x, y } = value;
      const trackPointer = pointer(e).start();

      trackOffset(trackPointer.x, {
        from: x.get(),
        onUpdate: x
      }).start();

      trackOffset(trackPointer.y, {
        from: y.get(),
        onUpdate: y,
        onStop: () => trackPointer.stop()
      }).start();

      document.addEventListener('mouseup', setStateTo.rest);
      document.addEventListener('touchend', setStateTo.rest);
    }
  }}
>
  {({ v, setStateTo }) => (
    <div
      onMouseDown={setStateTo.isDragging}
      onTouchStart={setStateTo.isDragging}
      style={{
        transform: 'translate(' + v.x + 'px, ' + v.y + 'px)',
        width: '100px',
        height: '100px',
        background: 'red'
      }}
    />
  )}
</MotionValue>
`}
</Example>
```
