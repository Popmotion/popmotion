*Redshift*
========

**Javascript UX engine for DOM, canvas, or everything else**

***Summary***
========

Redshift is a Javscript engine for animation and interaction. It is output-agnostic, meaning you provide the callback while we provide the numbers. The benefits:

* Use any technology you want (jQuery, canvas, WebGL, etc)
* Animate any property you want, without us having to add explicit support for it
* Move between technologies simply by changing your callbacks - Redshift will always pump out identical numbers

We never hit the DOM, leaving you in total control of performance.

We can seamlessly hand-off between user input and animation using the same set of properties, using our .play(), .track(), and .move() functions.

We are extendable, so you can add new bezier curve easings, create custom user inputs, and design new ways of processing numbers.

