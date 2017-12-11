---
title: React
description: Popmotion animation and input tracking - in React!
category: plugins
---

# Popmotion x React

Popmotion x React provides a declarative interface to use Popmotion's animation and input tracking with any React component.

It uses the "function as children" pattern, so you can create declarative interactions with the DOM, SVG, Three.js, A-Frame, Pixi... anything that has a React wrapper available.

It also has support for [React TransitionGroup](https://github.com/reactjs/react-transition-group/) lifecycle methods.

## Install

```
npm install --save popmotion-react
```

## `MotionValue`

The `MotionValue` component allows you to declaratively animate a single `value`.

### Usage

`MotionValue` is a simple state machine. You provide state transition handlers that describe what animation should play when a state is set, and it provides setter functions to your component. For instance:

```javascript
import { tween } from 'popmotion';
import { MotionValue } from 'popmotion-react';

const stateChangeHandlers = {
  on: ({ value }) => tween({
    from: value.get(),
    to: 100
  }).start(value),
  off: ({ value }) => tween({
    from: value.get(),
    to: 0
  }).start(value)
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

#### `children` **required**
A function that returns the children component. The function is provided an object of props:
- `v: number | number{} | number[]`: The current numerical value, or object of named values.
- `velocity number | object | number[]`: Current velocity, or object of named velocities.
- `state: string`: Current state name.
- `setStateTo: Function{}`: Object of setter functions, generated from the states defined in `onStateChange` (each optionally accepts an `Event`).
- `setRef: Function`: Provides `onStateChange` setters a `ref` attribute for an escape hatch to the DOM (for instance attaching/removing events).

#### `v: number | number{} | number[]`
An initial number, or object of named numbers. If you wish to use named numbers, this is **required**.

#### `initialState: string`
Set an initial state for the value.

#### `onStateChange: Function{}`
Object of named functions that fire when their state changes. Each function receives an object with the following props:
  - `value: Value | Value{} | Value[]`
  - `previousState: string`: State before current state change.
  - `setStateTo: Function{}`: Object of state setters (each optionally accepts an `Event`).
  - `ref: Element`: A reference to the mounted React component, **if** a component was provided `setRef`.
  - `e: Event`: The triggering event, **if** a state setter was called with one.
  - `complete: Function`: When hooking into `TransitionGroup` lifecycle events `componentWillEnter`, `componentWillAppear` and `componentWillLeave`, this callback is provided and **required**.

### Use with React TransitionGroup

MotionValue fully supports [React TransitionGroup](https://github.com/reactjs/react-transition-group/) lifecycle methods.

Just provide the lifecycle methods as state handlers:

```javascript
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { MotionValue } from 'popmotion-react';
import { tween, transform } from 'popmotion';
const { px } = transform;

const stateChangeHandlers = {
  componentWillAppear: ({ value, complete }) => tween({
    from: value.get(),
    to: 100,
    onUpdate: value,
    onComplete
  }).start({
    update: value,
    complete
  })
};

export default () => (
  <TransitionGroup>
    <MotionValue key="unique-id" onStateChange={stateChangeHandlers}>
      {({ v }) => <div style={{ width: px(v) }} />}
    </MotionValue>
  </TransitionGroup>
);
```

Remember that `componentWillEnter`, `componentWillAppear` and `componentWillLeave` lifecycle methods provide `onComplete` callbacks, that are mandatory for React TransitionGroup to work.

### Live examples

#### Toggle state (click box to toggle)

```marksy
<Example isReactComponent={true}>{`
<MotionValue
  onStateChange={{
    on: ({ value }) => tween({
      from: value.get(),
      to: 100
    }).start(value),
    off: ({ value }) => tween({
      from: value.get(),
      to: 0
    }).start(value)
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
  initialState="rest"
  v={{ x: 0, y: 0 }}
  onStateChange={{
    rest: ({ value, setStateTo, ref }) => {
      const { x, y } = value;
      const springProps = {
        to: 0,
        spring: 500,
        friction: 0.9
      };

      physics({
        ...springProps,
        from: x.get(),
        velocity: x.getVelocity()
      }).start(x);

      physics({
        ...springProps,
        from: y.get(),
        velocity: y.getVelocity()
      }).start(y);

      ref.addEventListener('mousedown', setStateTo.isDragging);
      ref.addEventListener('touchstart', setStateTo.isDragging, { passive: false });
    },
    isDragging: ({ value, setStateTo, e }) => {
      e.preventDefault();
      const { x, y } = value;
      const trackPointer = pointerDelta({
        x: x.get(),
        y: y.get()
      }).start((v) => {
        x.update(v.x);
        y.update(v.y);
      });

      document.addEventListener('mouseup', setStateTo.rest);
      document.addEventListener('touchend', setStateTo.rest);
    }
  }}
>
  {({ v, setStateTo, setRef }) => (
    <div ref={setRef} style={{
      transform: 'translate(' + v.x + 'px, ' + v.y + 'px)',
      width: '100px',
      height: '100px',
      background: 'red'
    }} />
  )}
</MotionValue>
`}
</Example>
```

**Note:** In the above example, we're using the `setRef` escape hatch to get a reference to our DOM node. We're then binding `touchstart` events directly to that, rather than to the React component.

This is so we can set the event's `{ passive: false }` option, which was made `true` by default in Chrome 56. For most use-cases, this improves performance, but for dragging a DOM element it's a performance-killer and prevents us from stopping the page from scrolling simultaneously. Hopefully, React will provide a way for us to set this via the component API.
