---
title: Action basics
description: A quick look at Popmotion's simplified reactive model.
category: basics
next: input-tracking
---

# Action basics

The `tween` function returns an [action](/api/action). Popmotion is a reactive library, and **actions** are how you can create streams of values that can trigger **reactions**.

**Every animation and input in Popmotion returns an action**, which means they all share the same API.

In this quick tutorial we'll create our own action, and take a quick look at action's simple API.

## Import

```javascript 
import { action } from 'popmotion';
```

## Creating an action

The `action` function accepts a single value. It's an initialisation function that will be executed **each time the action is started**.

This init function is provided three functions: `update`, `complete`, and `error`:

```javascript
const one = action(({ update, complete }) => {
  update(1);
  complete();
});
```

In this example, `one` is now an action that can be started with the `start` method and another function (or set of functions) called a **reaction**:

```javascript
one.start((v) => console.log(v)); // 1
```

When `start` runs, the initialisation function is run anew, and a **new instance** of the active action is returned:

```javascript
one.start((v) => console.log(v)); // 1
one.start((v) => console.log(v)); // 1
```

The action init function that we defined above also called `complete`. By default, a function given to `start` will be called by `update`, but we can also provide a named object of functions:

```javascript
one.start({
  update: (v) => console.log(v),
  complete: () => console.log('complete!')
});
```

As all animations and inputs are actions, we can provide these same functions to, for instance, a `spring`:

```javascript
spring({ to: 500 }).start({
  update: (v) => console.log(v),
  complete: () => console.log('complete!')
});
```

## Modifiers

An action has two more methods that can modify its execution:

- `pipe`: Accepts a series of functions that take the value provided by `update`, and returns a new value before passing it to the reaction.
- `while`: Accepts a function that fires every `update` with the latest value. If it returns `false`, the action completes.

When called, these return **a new action** which leave the original action unaffected.

Let's take a look at an example of each:

### `pipe`

```javascript
const double = (v) => v * 2;
const px = (v) => `${v}px`;
const twoPx = one.pipe(double, px);

one.start((v) => console.log(v)); // 1
two.start((v) => console.log(v)); // '2px'
```

### `while`

```javascript
one
  .while((v) => v === 2);
  .start((v) => console.log(v)); // never fires
```

### Combining

Let's combine these to make a [pointer](/api/pointer) that outputs its `x` position as percentage of the viewport, and automatically stops itself if the pointer is more than 75% across the screen:

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

But how does the code defined in your initilisation function know its been stopped?

Each init function can **optionally** return an API. This can optionally include a `stop` function:

```javascript
const oneEverySecond = action(({ update }) => {
  const updateOne = () => update(1);
  const interval = setInterval(updateOne, 1000);

  return {
    stop: () => clearInterval(interval)
  };
});
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
foo.setOutputValue(2);
```

## Conclusion

We've covered a lot in this tutorial, but that is the full extent of the complexity of actions.

With `pipe` you can compose powerful, reusable and concise functions out of any animation, input, or your own custom actions.

`while` provides a declarative and flexible way to automatically stop actions.

Finally, the ability to return a custom API is a powerful twist on the classic reactive formula that should provide great flexibilty to interaction designers.

In the next tutorial, we're going to take a closer look at a function we've brushed across here, [pointer](/learn/input-tracking). 
