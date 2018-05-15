
# Features

### Tiny

At 3.5kb, Stylefire is the perfect fit for any animation library or website.

### Render batching

Stylefire batches all rendering, once per frame to avoid layout thrashing.

```javascript
const divStyler = styler(divElement)
divStyler.set('width', 100)
divStyler.set('width', 200) // Will only render 200px
```

### Individual transform properties

Set and animate transform properties independently from one another.

```javascript
const labelStyler = styler(labelElement)
labelStyler.set({ x: -10, scale: 1.2 })
labelStyler.set('y', 10)
```

### Standardised SVG transforms

Stylefire standardises the complex SVG transform model with the simple CSS equivalent.

```javascript
const rectStyler = styler(rectElement)
rectStyler.set({ x: 100, rotate: 45, scale: 2 })
divStyler.set({ x: 100, rotate: 45, scale: 2 })
```

### Path drawing

Set paths as percentages, simplifying the "drawing" effect.

```javascript
const pathStyler = styler(pathElement)
pathStyler.set('pathLength', 50)
```

### Scroll

Supports `scrollTop` and `scrollLeft` properties for both HTML elements and the viewport.

```javascript
const viewportStyler = styler(window)
viewportStyler.set('scrollTop', 100)
divStyler.set('scrollLeft', 10)
```

### CSS variables

Setting CSS variables is as simple as any CSS property. 

```javascript
const documentStyler = styler(document.documentElement)
documentStyler.set('--theme-color', '#f00')
```

### Automatic vendor prefixing

Automatically tests and detects CSS rules for support on the current browser.

```javascript
divStyler.set('supported-by-prefix', 0) // `-webkit-supported-by-prefix: 0`
```

# Install

```bash
npm install stylefire
```

# API

## `styler`

Stylers are performant style setters for HTML and SVG elements, optimised to work with animation libraries.

They batch updates to a single step on the [Framesync](/api/framesync) render loop, preventing layout thrashing and unnecessary renders.

They also allow `transform` properties to be set and animated independently.

The `styler` factory function is used to create a new styler for a single element or `window`.

### Usage

#### Import

```javascript
import styler from "stylefire";
```

#### Create a styler

```javascript
const div = document.querySelector("div");
const divStyler = styler(div);
```

#### Set style properties

The `set` method is used to schedule an update on the next render step.

```javascript
divStyler.set({ x: 100 });
```

Stylers understand default property types for many [CSS](/stylefire/api/html) and [SVG](/stylefire/api/svg) props. So even though we just set `x` as `100`, Stylefire will output `transform: translateX(100px)`.

#### Forced render

Sometimes we need to force a render outside of the render loop. For instance, if we want to set some properties and then immediately measure the state of the element.

We can do so with the `render` method:

```javascript
divStyler.set({ width: "auto" });
divStyler.render();
```

#### Get style property

The `get` method can be used to read individual properties:

```javascript
const div = document.querySelector("path");
const pathStyler = styler(path);
pathStyler.get("pathLength");
```

**Note:** Due to the considerable filesize overhead in reading CSS `transform` properties, Stylefire will return the default value for any transform properties unless they've already been `set`.

### Methods

#### `set`

Sets one or multiple properties, and schedules a render for the next available render step.

```typescript
set(props: {}): this
set(key: string, prop: any): this
```

#### `get`

Returns the value of the provided key.

```typescript
get(key: string): any
```

#### `render`

Immediately render, without waiting for the next frame.

```typescript
render(): this
```

---
title: HTML
description: Performant styler for CSS and scroll props
category: styler-types
---

## HTML styler

When [`styler`](/stylefire/stylefire) is provided a `HTMLElement`, it returns a styler capable of setting CSS and scroll props.

### Config

A configuration argument can be **optionally** passed to `styler` as the second argument:

```javascript
const divStyler = styler(div, {});
```

#### `enableHardwareAcceleration: boolean = true`

If set to `false`, Stylefire won't optimise animations with the GPU.

This can result in higher image quality when scaling up elements.

### Props

#### Property alias

The following alias' can be optionally used for setting CSS props:

* `x`: `translateX`
* `y`: `translateY`
* `z`: `translateZ`
* `originX`: `transformOriginX`
* `originY`: `transformOriginY`
* `originZ`: `transformOriginZ`

#### `transform` property order

The `transform` property can be set directly, but in most cases it's simpler to animate `rotate`, `translate` and `scale` as individual props.

In accordance with the [CSS Transforms Level 2 spec](https://drafts.csswg.org/css-transforms-2/#individual-transforms), if set individually these properties will be set in the following order:

`translate`, `scale`, `rotate`

#### CSS variables

[CSS variables](https://css-tricks.com/difference-between-types-of-css-variables/#article-header-id-1) can be set and animated just like any other property:

```javascript
const htmlStyler = css(document.documentElement);

htmlRenderer.set("--bg-color", "#000");
```

#### Supported props

**All CSS properties are supported**, in addition to these scroll properties:

* `scrollX`
* `scrollY`

If `window` is passed to styler, these are the **only** two supported props.

#### Prop types

For convenience and safety, many props are mapped to [value types](/api/value-types) for safety and convenience.

##### Color props

* `color`: `color`
* `backgroundColor`: `color`
* `outlineColor`: `color`
* `fill`: `color`
* `stroke`: `color`

##### Border props

* `borderColor`: `color`
* `borderTopColor`: `color`
* `borderRightColor`: `color`
* `borderBottomColor`: `color`
* `borderLeftColor`: `color`
* `borderRadius`: `px`

##### Positioning

* `width`: `px`
* `height`: `px`
* `top`: `px`
* `left`: `px`
* `bottom`: `px`
* `right`: `px`

##### Transform

* `rotate`: `degrees`
* `rotateX`: `degrees`
* `rotateY`: `degrees`
* `rotateZ`: `degrees`
* `scale`: `scale`
* `scaleX`: `scale`
* `scaleY`: `scale`
* `scaleZ`: `scale`
* `skewX`: `degrees`
* `skewY`: `degrees`
* `distance`: `px`
* `translateX`: `px`
* `translateY`: `px`
* `translateZ`: `px`
* `perspective`: `px`
* `opacity`: `alpha`

## SVG styler

The SVG styler replaces the confusing SVG transformation model with the CSS model and provides a simple API for `path` drawing.

### Path drawing

Line drawing the process of using an SVG `path` element and its `stroke-dasharray` and `stoke-dashoffset` properties to emulate a pen drawing a line. [This blog post](https://css-tricks.com/svg-line-animation-works/) explains the effect in more detail.

Stylefire supports both`'stoke-dasharray'` and `stroke-dashorigin` properties, but also provides:

* `pathLength`
* `pathSpacing`
* `pathOffset`

These are all set as a **progress of the total path length, from `0` to `1`**, which is automatically measured by Stylefire.

So you can define an animation from `0` to `100`:

```javascript
import { tween } from "popmotion";
import styler from "stylefire";

const path = document.querySelector("path");
const pathStyler = styler(polygon);

tween({ to: 100 }).start(v => pathStyler.set("pathLength", v));
```

In this example you can change the real `path` shape and length without having to update the animation.

### Props

#### Supported props

**All SVG attributes are supported**.

### Prop types

For convenience and safety, many props are mapped to [value types](/api/value-types) for safety and convenience.

* `fill`: `color`
* `stroke`: `color`
* `scale`: `scale`
* `scaleX`: `scale`
* `scaleY`: `scale`
* `opacity`: `alpha`
* `fillOpacity`: `alpha`
* `strokeOpacity`: `alpha`

## Viewport styler

When `styler` is provided `window`, it returns a styler capable of scrolling the viewport.

```javascript
const viewportStyler = styler(window);

viewportStyler.set("scrollTop", 20);
```

It supports `scrollTop` and `scrollLeft` props.

## `createStylerFactory`

By default, `styler` outputs stylers for HTML and SVG elements. It's possible to create a `styler` for any JavaScript API that might benefit from render batching or cached state.

For this, we can use the `createStylerFactory` function.

### Usage

#### Import

```javascript
import { createStylerFactory } from "stylefire";
```

#### Create a styler factory

`createStylerFactory` accepts an object of properties:

##### `onRead`

This method is fired when the styler's `get` is called and no property with this name is present in the state cache (or `useCache` is set to `false`).

```typescript
(key: string, props: {}): any
```

##### `onRender`

This method is fired on the render step, or if the styler's `render` method is called manually.

```typescript
(state: {}, props: {}, changedValues: string[]): void
```

##### `useCache`

Set to `false` if you always want `onRead` to fire when a user calls `get`.

##### `aliasMap`

A key-value map of aliased properties where you can map user-facing properties to internal props. For example, `styler` maps the `x` prop to CSS `translateX`.

```typescript
{ [key: string]: string }
```

#### Using the styler factory

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