# Cowabunga

## Anything in, anywhere out

Cowabunga is a 12kb JavaScript UX framework. Use it for for animation, physics, and input tracking. In the browser, on Node, anywhere.

[Download](http://redshiftjs.com/download) | [API](http://redshiftjs.com/api) | [Guides](http://redshiftjs.com/guides/get-started) | [Twitter](http://twitter.com/redshiftjs)

### Flexible
* **Native DOM support:** CSS and DOM attribute support, out the box.
* **Beat the curve:** Custom callbacks allow you output to any numerical property.
* **Power anything:** Use with jQuery, Canvas, Three.js, WebSockets, etc...
* **Seamless interactions:** Tracks every velocity for hand-off between input, animation and physics.
* **Node support:** Run on a server or an Arduino to fuel the IoT.
* **Open rAF loop:** Run any Process on the core requestAnimationFrame loop.

### Extendable
#### Develop your own:
* **Easing:** Easing functions and bezier curves.
* **Physics:** Add new physics simulators.
* **Element types:** Handle different types of element (DOM, Canvas shapes etc) with the same API.
* **Value types:** Automatically split special values in child values (ie `"#000"` -> `{ Red: 0, Green: 0, Blue: 0, Alpha: 1 }`.
* **Input:** Create custom Input interfaces for Oculus/Leap/anything.
* **Value routes:** Output values of a certain type (ie attr, css) in a standardised way.

### Peformant
* Uses and exposes a single requestAnimationFrame thread that automatically winds down when not in use.
* Never reads the DOM, leaving you in total control of performance.
* Over **20% smaller** than Velocity.js, **72% smaller** than GreenSock TweenMax. Boom shak shakalaka.


[Get started](http://redshiftjs.com/guides/get-started)
[Cowabunga vs Velocity.js vs Greensock feature comparison](http://redshiftjs.com/guides/feature-comparison)
