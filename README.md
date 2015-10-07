# Popmotion

## Anything in, anywhere out

Popmotion is a 12kb JavaScript motion engine. Make it pop with animation, physics, and input tracking. In the browser, on Node, anywhere.

[Download](http://popmotion.io/download) | [API](http://popmotion.io/api) | [Guides](http://popmotion.io/guides/get-started) | [Twitter](http://twitter.com/popmotionjs)

### Flexible
* **Native DOM support:** CSS, SVG, SVG path and DOM attribute support, out of the box.
* **Unlimited:** Custom callbacks allow you output to any numerical property or API.
* **Power anything:** Use with jQuery, Canvas, Three.js, WebSockets, etc.
* **Seamless interaction:** Tracks velocity for hand-off between input, animation and physics.
* **Node support:** Run on a server or an Arduino to fuel the IoT.
* **Open rAF loop:** Run any Process on the core requestAnimationFrame loop.

### Extendable
#### Develop your own:
* **Easing:** Easing functions and bezier curves.
* **Physics:** Add new physics simulators.
* **Input:** Create custom Input interfaces for Oculus/Leap/anything.
* **Roles:** Extend our CSS/SVG/Attr support with routes for Canvas, Three.js, Google Map Symbols or any standardised numerical property.
* **Value types:** Automatically split special values in child values (ie `"#000"` -> `{ Red: 0, Green: 0, Blue: 0, Alpha: 1 }` or more complex strings like `path` definitions.

### Performant
* Uses and exposes a single requestAnimationFrame thread that automatically winds down when not in use.
* Never reads the DOM, leaving you in total control of performance.
* The same size as Velocity.js, **over 66% smaller** than GreenSock TweenMax. Boom shak shakalaka.


[Get started](http://popmotion.io/guides/get-started)

[Popmotion vs Velocity.js vs Greensock feature comparison](http://popmotion.io/guides/feature-comparison)
