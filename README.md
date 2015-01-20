# Redshift

## Anything in, anywhere out

Redshift is a JavaScript engine for animation and interaction. It works with pure numbers and outputs directly to your custom callbacks.

**Key benefits of this approach:**

* Use your favourite technology (DOM, jQuery, Canvas, WebGL, etc)
* Animate any numerical property, without waiting for us to support it
* We never hit the DOM, leaving you in total control of performance
* Unlock the power of easing, for any purpose


**More features:**

* Seamlessly hand-off between user input and animation
* Create custom easing bezier curves
* Create custom inputs to experiment with new input devices
* Uses our [Cycl](https://github.com/InventingWithMonster/cycl) unified requestAnimationFrame process manager for high performance


## Use

### NPM

Redshift is available on NPM, so you can install it with 

```  
$ npm install redshift
```

and then use it in your Browserify script like:

```javascript  
var redshift = require('redshift');
```


### File include

Alternatively, you can simply download the pre-compiled, minified file redshift.global.min.js from https://github.com/InventingWithMonster/redshift and include it with a script tag. You can then access Redshift as a global object.


## Further reading

[Documentation](http://redshiftjs.com/docs)
[Tutorials](http://redshiftjs.com/tuts)
[Twitter](http://twitter.com/redshiftjs)