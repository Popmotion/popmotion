# Redshift

## Javascript UX engine for DOM, canvas, and everything else

Redshift is a Javscript engine for animation and interaction. It works with pure numbers and outputs directly to your custom callbacks.

**Key benefits of this approach:**

* Use your favourite technology (DOM, jQuery, canvas, WebGL, etc)
* Animate any numerical property, without waiting for us to support it
* We never hit the DOM, leaving you in control of performance
* Unlock the power of easing, for any purpose


**More features:**

* Seamlessly hand-off between user input and animation
* Create custom easing bezier curves
* Runs every process through the same requestAnimationFrame loop for high visual performance


## Use

### NPM

Redshift is available on NPM, so you can include it in your Browserify script like:

```javascript  
var Redshift = require('redshift');
```


File include

Alternatively, you can simply download the pre-compiled file from https://github.com/SirHound/redshift and include it in a script tag, as you would any other Javascript script. You can then access the global Redshift object.


## Quickstart

For our first trick, let's move a DOM element with the id of #box.

### 1: Create a new Action

```javascript
  var action = Redshift.newAction();
```

A Redshift Action is essentially a collection of values that you wish to manipulate, and options that change how Redshift goes about that.


###2: Create your output callback###

```javascript
  function moveBox(values, data) {
    this.css('transform', 'translate(' + values.x + 'px,0)');
  }
```

**This is crucial:** Without callbacks, Redshift won't do anything

###3: Define your animation###

```javascript
  Redshift.define({
    'box': {
      values: {
        x: 100
      }
      duration: 400,
      ease: 'easeOut',
      onFrame: moveBox,
      scope: $('#box')
    }
  });
```

###4: Play!###

```javascript
  action.play('box');
```

Or let the user move the box with their mouse/finger, simply by using track() and passing either event through like 

```javascript
  example.track('box', e);
```

