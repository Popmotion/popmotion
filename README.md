# <a href="https://popmotion.io"><img src="https://cloud.githubusercontent.com/assets/7850794/21642571/1910a15e-d27b-11e6-84c7-19e88e207c14.png" height="52" width="243" alt="Popmotion" /></a>

### The JavaScript motion engine.

Create unique animations and interactions with tweens, physics and input tracking.

Popmotion is:
- **Tiny:** At ~9kb, it's 75% smaller than GreenSock.
- **Fast:** Stands up to alternatives in [performance tests](http://codepen.io/popmotion/pen/zNYXmR).
- **Compatible:** Full browser support and preloaded with CSS and SVG renderers.
- **Powerful:** Discrete render step scheduling allows full control over each frame.
- **Composable:** Actions and transformers can be composed to create complex motion systems.
- **Advanced:** Sophisticated tween and color blending for the smoothest possible motion.

[![npm version](https://img.shields.io/npm/v/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)
[![npm downloads](https://img.shields.io/npm/dm/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)

[Slack](https://popmotion.slack.com)

### [Full API documentation](docs/api)

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

### [Full API documentation](docs/api)
