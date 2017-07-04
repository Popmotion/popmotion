---
title: React
description: Popmotion animation, tweening and input tracking - in React!
category: plugins
---

# Popmotion x React

Popmotion x React provides a simple interface to bring Popmotion's tweening, physics and input tracking capabilities to any React component.

It uses the "function as children" pattern, which means you can use declarative interactions with any React renderer. This is a simple way to power DOM, SVG, Three.js, A-Frame, Pixi... **anything**.

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

export default () => (
  <MotionValue
    onStateChange={{
      on: (value) => tween({
        from: value.get(),
        to: 100,
        onUpdate: value
      }).start(),
      off: (value) => tween({
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
        onClick={state === 'on' ? setStateTo.off : setStateTo.on}
      />
    )}
  </MotionValue>
);
```

### Props
- `children <Function>` **required**: A function that returns the children component. The function is provided an object of props:
  - `v <Number | Object">`: The current numerical value, or object of named values.
  - `velocity <Number>`: Current velocity, or object of named velocities.
  - `state <String>`: Current state name.
  - `setStateTo <Object>`: Object of setter functions, generated from the states defined in `onStateChange` (each optionally accepts an `Event`).
- `v <Number | Object>`: An initial
- `initialState <String>`: Set an initial state for the value.
- `onStateChange <Object>`: Object of named functions. Each function is provided the `value` or `composite` value, and fires when the state changes. The full argument list:
  - `value <Value | Composite>`
  - `previousState <String>`: State before current state change.
  - `setStateTo <Object>`: Object of state setters (each optionally accepts an `Event`).
  - `e <Event>`: The triggering event, if a state setter was called with one.

### Examples

#### Tween

```marksy
<Example isReactComponent={true}>{`
<MotionValue
  onStateChange={{
    on: (value) => tween({
      from: value.get(),
      to: 100,
      onUpdate: value
    }).start(),
    off: (value) => tween({
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
      onClick={state === 'on' ? setStateTo.off : setState.on}
    />
  )}
<MotionValue>
`}</Example>
```

#### Drag with composite value

```marksy
<Example isReactComponent={true}>{`
<MotionValue
  initialState="rest"
  v={{ x: 0, y: 0 }}
  onStateChange={{
    rest: ({ x, y }) => {
      tween({to: 200,onUpdate: x}).start()
    },
    isDragging: ({ x, y }, currentState, setStateTo, e) => {
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
    }
  }}
>
  {({ v, setStateTo }) => (
    <div
      onMouseDown={setStateTo.isDragging}
      onTouchStart={setStateTo.isDragging}
      onMouseUp={setStateTo.rest}
      onTouchEnd={setStateTo.rest}
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
## Examples
