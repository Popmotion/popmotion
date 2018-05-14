---
title: Create styler factory
description:
---

# `createStylerFactory`

By default, `styler` outputs stylers for HTML and SVG elements. It's possible to create a `styler` for any JavaScript API that might benefit from render batching or cached state.

For this, we can use the `createStylerFactory` function.

## Usage

### Import

```javascript
import { createStylerFactory } from "stylefire";
```

### Create a styler factory

`createStylerFactory` accepts an object of properties:

#### `onRead`

This method is fired when the styler's `get` is called and no property with this name is present in the state cache (or `useCache` is set to `false`).

```typescript
(key: string, props: {}): any
```

#### `onRender`

This method is fired on the render step, or if the styler's `render` method is called manually.

```typescript
(state: {}, props: {}, changedValues: string[]): void
```

#### `useCache`

Set to `false` if you always want `onRead` to fire when a user calls `get`.

#### `aliasMap`

A key-value map of aliased properties where you can map user-facing properties to internal props. For example, `styler` maps the `x` prop to CSS `translateX`.

```typescript
{ [key: string]: string }
```

### Using the styler factory

`createStylerFactory` returns a styler factory:

```javascript
const myStylerFactory = createStylerFactory({ onRead, onRender });
```

This is a function that accepts one argument, an object of props. These props can be anything - they are for you to use in `onRead` and `onRender` methods.

Here's an incredibly simple example of a styler that simply reads and writes any object provided to it:

```javascript
import { createStylerFactory } from "stylefire";

const exampleStyler = createStylerFactory({
  onRead: (key, props) => props[key],
  onRender: (state, props, changedValues) => {
    changedValues.forEach(key => (props[key] = state[key]));
  }
});

const myExampleStyler = exampleStyler({ red: 255, green: 255, blue: 255 });
myExampleStyler.set("green", 0);
```
