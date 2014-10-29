Redshift
========

##Javascript UX engine for DOM, canvas, and everything else##

Redshift is a Javscript engine for animation and interaction. It works with pure numbers and outputs directly to your custom callbacks.

**Key benefits of this approach:**

* Use your favourite technology (DOM, jQuery, canvas, WebGL, etc)
* Animate any numerical property, without waiting for us to support it
* Never hits the DOM, leaving you in control of performance
* Unlock the power of easing, for any purpose

**More features:**

* Seamlessly hand-off between user input and animation
* Create custom easing bezier curves
* Runs every process through the same requestAnimationFrame for high visual performance


##Use on your site##
========

###NPM###

Redshift is available on NPM, so you can include it in your Browserify script like:

```javascript  
var Redshift = require('redshift');
```

###Old-school file include###

Alternatively, you can simply download the pre-compiled file from https://github.com/SirHound/redshift and include it in a &lt;script&rt; tag, as you would any other Javascript script. You can then access the global Redshift object from other scripts loaded subsequently.


##Getting started##

###jQuery interface###

To get accustomed to Redshift, we'll first look at the jQuery interface. This is the simplest way to use Redshift in your project, as we can leverage jQuery's .data() method to keep track of Redshift instances (more on these later). If Redshift detects jQuery, it will create four jQuery extensions: .play(), .move(), .track() and .redshift().

Let's animate a box, with the helpful ID of 'box', left 100px, over a duration of 300ms, with ease-out easing.

```javascript
  $('#box').play({
    values: {
      left: 100
    },
    duration: 300,
    ease: 'ease-out',
    onFrame: ourCallback
  });
  
  function ourCallback(output, $element) {
    $element.css('transform', 'translate3D(' + output.left + 'px, 0,0)');
  }
```  

Let's break this down.

**.play()** - This is the .animate() of Redshift. We animate the given values according to the provided options (for instance duration and ease).

**values**: This is an object of values that we're going to animate over the given duration. Each value can be a number, a function returning a number, or an object. 

**onFrame**: **This is important:** The key difference between Redshift and other animation systems like jQuery.animate, GSAP and Velocity.js is that **you must provide a callback that sets the properties as provided by Redshift.** This provides you, the developer, with an unprecedented level of power. In this instance, our callback is very simple:

**ourCallback()**: This is our onFrame callback. Every onFrame callback is provided with two variables. The first is output, which is an object containing the values calculated for a given frame. The second is, when using the jQuery plugin, the jQuery object you called Redshift on. If that object contains many DOM elements, we fire the callback once for each.

The power of Redshift is made clear in this simple callback. Rather than animating the left CSS property, we're leveraging the higher performance found in animating the translate3D property.
