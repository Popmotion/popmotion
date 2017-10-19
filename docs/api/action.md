---
title: Action
description: A reactive stream of values
next: animations
---

# Action

Action is a simplified Rx-inspired reactive stream focussed on animation.

Every Popmotion animation and input is an action. When an action is started, it returns an interface that includes **at least** a `stop` method.

## Import

```javascript
import { action } from 'popmotion';
// or stand-alone:
import action from 'popmotion/lib/action';
```

## Usage

### Initialisation

The `action` function takes one argument, an initialisation function.

This is passed an object of three functions: `update`, `complete`, and `error`:

```javascript
action(({ update, complete, error }) => update(1));
```

All of these functions are optional. When called, they will trigger the corresponding functions provided to the action's `start` function.

When the `start` function is called, the **initialisation function is run again**. This means once an action is defined, it can be started many times, and each will be a **new instance**.

For example:

```javascript
const foo = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i++), 50);
});

foo.start((v) => console.log(v)); // 0, 1, 2...
foo.start((v) => console.log(v)); // 0, 1, 2...
```

We can also listen for the `complete` event like this:

```javascript
const foo = action(({ update, complete }) => {
  let i = 0;
  setInterval(() => {
    update(i++);
    if (i === 10) complete();
  }, 50);
});

foo.start({
  update: (v) => console.log(v), // ...8, 9, 10
  complete: () => console.log('complete!')
});
```

### Modification

`action` returns other methods which can be used to alter the behaviour of the base action. Currently, these are `while` and `pipe` (see [Methods](#methods)).

They each return a **new action**. For instance:

```javascript
const foo = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i++), 50);
});

const lessThanTen = (v) => v < 10;
const log = (v) => console.log(v);

foo.start(log); // ...8, 9, 10, 11...
foo.while(lessThanTen).start(log); // ...8, 9
```

## Methods

### `pipe`

```typescript
pipe(...funcs: (v: any) => any)
```

Returns a **new** action that passes the output of the original action's `update` through the provided functions, from left to right.

#### Example

```javascript
const init = ({ update }) => update(10);
const double = (v) => v * 2;
const px = (v) => `${v}px`;

action(init)
  .pipe(double, px)
  .start((v) => console.log(v)); // '20px'
```

### `start`

```typescript
start(update: (v: any) => void)
start(observer: {
  complete? () => void,
  error?: (err: any) => void,
  update?: (v: any) => void
})
```

Starts the action by running its initiation function, and returning its API.

Every interface returned by a `start` call, **regardless of the API returned from the observable**, will return at least a `stop` function.

It can be provided either an `update` function, or an object with `update`, `complete` and `error` functions.

#### Example

```javascript
// Doesn't return an API
const foo = action(({ update }) => update(1)).start();
foo.stop();

// Returns a custom API
const bar = action(({ update }) => {
  let i = 0;
  setInterval(() => update(i), 100);

  return {
    setOutput: (v) => i = v
  };
}).start();
bar.setOutput(2);
setTimeout(() => bar.stop(), 1000);
```

### `while`

```typescript
while(predicate: (v: any) => boolean)
```

Returns a new action, that will continue to run **while** the updated values match the provided predicate.

When the predicate function returns `false`, the action will `complete`.

### Example

```javascript
let latest = 0;

const init = ({ update }) => {
  let i = latest;
  setInterval(() => update(i++), 50);
};

action(init)
  .while((v) => v < 10)
  .start({
    update: (v) => latest = v,
    complete: () => console.log(v) // 9
  });
```
