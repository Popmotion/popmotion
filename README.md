# Popmotion

## The JavaScript motion engine.

Use and compose tweens, physics and user input to create unique animations and interactions.

Popmotion is tiny, at ~8kb including full CSS, SVG and SVG `path` render support - that's 75% smaller than GreenSock. It's also flexible, allowing custom actions and renderers to be created with ease.

It also exposes its interal render loop, allowing you to schedule any callback during or after the `update` and `render` steps.

[![npm version](https://img.shields.io/npm/v/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)
[![npm downloads](https://img.shields.io/npm/dm/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)

[Twitter](http://twitter.com/popmotionjs)
[Slack](https://popmotion.slack.com)

## Installation

### npm

In your project root:

```bash
npm install --save popmotion
```

In your javascript module:

```javascript
import { tween } from 'popmotion';
```

### File include

Download `popmotion.global.min.js` from our [GitHub repo](https://github.com/Popmotion/popmotion/tree/master/dist) and include it in your HTML document:

```html
<script src="path/to/popmotion.global.min.js"></script>
```

Popmotion is then available as the global variable `popmotion`.

## Quick start

Creating basic motion like tweens and physics in Popmotion is simple. For example, here's a simple tween that prints its output to the `console`:

```javascript
import { tween } from 'popmotion';

tween({
  to: 100,
  onUpdate: (v) => console.log(v)
}).start();
```

To use that tween to move an actual DOM element, we can create a CSS renderer.

```javascript
const ballRenderer = css(document.getElementById('ball'));

tween({
  to: 100,
  onUpdate: (v) => ballRenderer.set('x', v)
}).start();
```
