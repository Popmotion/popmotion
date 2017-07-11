---
title: Action
description: A process that changes a value over time.
category: action
---

# Action

`Action` is the base class of Popmotion's included actions, like [`tween`](tween) and [`physics`](physics).

## Props

- `onUpdate <Function>`: Fires every frame the value is updated.
- `onStart <Function>`: Fires when an action starts.
- `onStop <Function>`: Fires when an action is stopped.
- `onComplete <Function>`: Fires when an action is completed.
- `transform <Function>`: If defined, `get` and `onUpdate` will pass the `current` value through this function before returning.

## Methods

- `start`: Start an action. Fires any set `onStart` callbacks.
- `stop`: Stop an action. Fires `onStop` callback.
- `get`: Get the current value.
- `setVelocityWindow`: Sets the duration of a window to average over for for velocity calculation, in milliseconds.
- `getVelocity`: Get the action's current velocity, in units per second.
- `getBeforeTransform`: Returns the current value, without passing through `transform` if a `transform` function is defined.
- `complete`: Stop an action and mark as complete. Fires `onStop` and `onComplete` callbacks.
- `setProps(<Object>)`: Updates `props`.
- `getProp(<String>)`: Returns the named property.
- `output(<Function | value Action>)`: Shorthand for updating the `onUpdate` property. If passed a `value`, will register this action as the sole permitted input to the provided `value` action.

## Creating new actions

The `Action` class is available for developers to make new actions or action compositors.

```javascript
import { Action } from 'popmotion';
```

New actions can be created by extending `Action` and providing an `update` function that takes one value and returns a new one. This new value will be provided to the `onUpdate` callback in the Action instance.

For example, here's a dummy Action that updates the `current` value by `10` once every frame:

```marksy
<Example template="Counter" id="a">{`
const counter = document.querySelector('#a .counter');

class CustomAction extends Action {
  update(current) {
    return current + this.props.increment;
  }
}

const myCustomAction = new CustomAction({
  increment: 10,
  onUpdate: (v) => counter.innerHTML = v
});

myCustomAction.start();
`}</Example>
```

`onStart`, `onStop` and `onComplete` methods can also be provided, both as `class` methods and `Action` properties.
