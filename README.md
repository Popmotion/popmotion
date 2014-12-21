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

Redshift is available on NPM, so you can install it with 

```  
$ npm install redshift
```

and then use it in your Browserify script like:

```javascript  
var Redshift = require('redshift');
```


### File include

Alternatively, you can simply download the pre-compiled, minified file redshift.global.min.js from https://github.com/InventingWithMonster/redshift and include it with a script tag. You can then access Redshift as a global object.


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
  	document.getElementById("box").style.transform = 'translate(' + values.x + 'px,0)';
  }
```

**This step is crucial:** Without callbacks, Redshift won't do anything. This is our way of future-proofing your interactions. You could, in this callback, access the DOM directly (for performance, as shown), use jQuery (for cross-browser compatibility), or use canvas or even WebGL.

It also provides you with the flexibility to manipulate this value before its used, or store it, or do whatever you want with it.

###3: Play!

```javascript
  action.play({
  	values: { x: 100 },
  	onChange: moveBox
  });
```

This will animate #box from 0px to 100px. You can easily change the initial value like so: 

```javascript
  action.play({
  	values: {
	  	x: {
	  		from: -100,
	  		to: 100
	  	}
  	},
  	onChange: moveBox
  });
```

###Also 3: ... or track user input!

```javascript
  action.track({
  	values: { x: 100 },
  	onChange: moveBox
  }, event);
```

Simply by changing 'play' to 'track', and passing through the user input (either mouse or touch event) as the second parameter, we are now allowing the user to drag #box between 0 and 100 pixels.

## Now you're playing with power

### Define base actions

Redshift supports a powerful design paradigm that allows you to define a set of properties once, and later use anywhere, on any object:

```javascript
  Redshift.define({
  	'box': {
  		values: { x: 100 },
  		onChange: moveBox
  	}
  });
  
  action.play('box');
```

### Scope

We can change the scope of a callback, like so:

```javascript
  Redshift.define({
  	'box': {
  		values: { x: 100 },
  		onChange: moveBox,
  		scope: $('#box')
  	}
  });
  
  function moveBox(values) {
    this.css('transform', 'translate(' + values.x + 'px, 0)');
  }
```

Which allows us to use the same callback for a wider variety of uses.


### Sequence

You can make a playlist of actions to play one after the other with a space-seperated list of definition names:

```javascript
  action.play('moveup moveleft');
```

### Inheritance

We can also inherit properties from a previously defined base action by using a dot:

```javascript
  Redshift,define({
  	'box': {
  		onChange: moveBox
  	},
  	'box.left' {
  		values: { x: -100 }
  	},
  	'box.right' {
  		values: { x: 100 }
  	}
  });
  
  action.play('box.left box.right');
```

Both box.left and box.right would use the onChange property as defined in box.

### Individual value properties

It's possible to override the default settings of a Action on an individual value basis. ie:

```javascript
  Redshift.define({
  	'example': {
  		values: {
  		  radius: {
  		      from: 20,
  		      to: 50,
  		      ease: 'backOut'
  		  },
  		  x: {
  		      to: 100,
  		      steps: 5
  		  }
  		},
  		ease: 'easeOut',
  		onChange: exampleCallback
  	}
  });
```

In this example, the property 'radius' would be animated smoothly with 'backOut' easing, while 'x' would animate in 5 discrete steps using 'easeOut' easing.

## jQuery plugin

If you're a jQuery user you can skip manually creating a Redshift Action and simply call .play, .track, and .move on a jQuery object. ie:

```javascript
  $('#box').play('moveleft');
```

When you use the jQuery plugins, the data variable usually passed to the onChange, onFrame, onStart and onEnd callbacks will become the jQuery object itself.
