---
title: Actions and Reactions
description: A quick look at Popmotion's simplified reactive model.
category: basics
next: input-tracking
---

# Actions and Reactions

The `tween` function returns what's known in Popmotion as an **action**.

Popmotion is a reactive library, and **actions** are functions that create streams of values.

These streams can be acted upon by **reactions**.

**Every animation and input in Popmotion is an action**. In this quick tutorial, we'll gain a better understanding of actions by writing our own.

## Import

```javascript 
import { action } from 'popmotion';
```

## Creating an action

The `action` function accepts a single value. It's an initialisation function that will be executed **each time the action is started**.

This means that we can define one action, and start it multiple times, leading to multiple instances of that action.

The `init` function is provided three functions: `update`, `complete`, and `error`:

```javascript
const one = action(({ update, complete }) => {
  update(1);
  complete();
});
```

In the above example, `one` is now an action that can be started with the action's `start` method:

```javascript
const log = (v) => console.log(v);
one.start(log); // 1
```

`log` is a **reaction**. It is a function that fires whenever the subscribed `action` calls `update`.

The `one` action we defined above also calls `complete`. Instead of a function, we can provide an object of `update` and `complete` functions as our reaction:

```javascript
one.start({
  update: log,
  complete: () => console.log('complete!')
});
```

When `start` runs, the initialisation function is run anew, and a **new instance** of the active action is returned:

```javascript
one.start(log); // 1
one.start(log); // 1
```

As all Popmotion animations and inputs are actions, we can provide these same reactions to, for instance, a `spring`, and we can start that same spring multiple times:

```javascript
const mySpring = spring({ to: 500 });

mySpring.start({
  update: log,
  complete: () => console.log('complete!')
});

mySpring.start({
  update: (v) => console.log('second spring: ' + v),
  complete: () => console.log('second spring also complete!')
});
```

## Chainable modifiers

All actions, as well as special reactions like [multicast](/api/multicast) and [value](/api/value), are **chainable**.

They offer methods that **return a new instance of the action or reaction** with altered behaviour.

Currently, there are three chainable methods: `filter`, `pipe` and `while`.

An API for developers to add more is on the roadmap.

Let's take a look at an example of each:

### `filter`

`filter` accepts a single function. This function is passed the latest value emitted from `update`.

The value is only passed down the chain if the function provided to `filter` returns `true`.

```javascript
action(({ update }) => {
  update(1);
  update(2);
  update(1);
}).filter((v) => v === 1)
  .start(log); // 1, 1
```

### `pipe`

`pipe` accepts a series of functions.

Each function is provided the latest value emitted from `update`, and returns a new value that is passed down the chain:

```javascript
const double = (v) => v * 2;
const px = (v) => `${v}px`;
const twoPx = one.pipe(double, px);

one.start((v) => console.log(v)); // 1
two.start((v) => console.log(v)); // '2px'
```

### `while`

`while` accepts a single function. This function is passed every value from `update` and fires `complete` if the function returns `false`:

```javascript
one
  .while((v) => v === 2);
  .start((v) => console.log(v)); // never fires, as `while` returned `false`
```

### Combining

Let's combine `pipe` and `while` to make a [pointer](/api/pointer) that outputs its `x` position as percentage of the viewport, and automatically stops itself if the pointer is more than 75% across the screen:

```javascript
const pickX = ({ x }) => x;
const viewportWidth = window.innerWidth;
const percentageOfViewport = (v) => v / viewportWidth * 100;
const asPercent = (v) => `${v}px`;

pointer()
  .pipe(pickX, percentageOfViewport) // The output of this
  .while((v) => v < 75) // Gets passed to this
  .pipe(asPercent) // Before being passed to this
```

## Stopping actions

Every action returns a `stop` method:

```javascript
const foo = tween();
foo.stop();
```

But how does the code defined in your `init` function know its been stopped?

Each init function can **optionally** return an API. This can include a `stop` function:

```javascript
const oneEverySecond = action(({ update }) => {
  const updateOne = () => update(1);
  const interval = setInterval(updateOne, 1000);

  return {
    stop: () => clearInterval(interval)
  };
});

const foo = oneEverySecond.start();
setTimeout(() => foo.stop(), 3000); // 1, 1, 1
```

## Custom API

Your action can return a custom API, too:

```javascript
const valueEverySecond = action(({ update }) => {
  let outputValue = 1;
  const updateOne = () => update(outputValue);
  const interval = setInterval(updateOne, 1000);

  return {
    stop: () => clearInterval(interval),
    setOutputValue: (v) => outputValue = v
  };
});

const foo = valueEverySecond.start();
foo.setOutputValue(2); // 2, 2...
```

## Conclusion

By chaining actions we can create new actions with different behaviour.

This flexibility is available on all animations and inputs, and later tutorials will touch on these capabilities.

In the next tutorial, we'll learn how to implement pointer tracking with two input actions, [Pointer and Listen](/learn/input-tracking).
