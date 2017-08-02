---
title: Spring-loaded characters remaining counter
description: Inject a little fun into your text fields with a spring-loaded characters remaining counter.
category: projects
---

# Spring-loaded "characters remaining" counter

Forms are, by nature, dreary. From a user's perspective, there's nothing fun about them: Non-zero friction, effort, the cold exchange of info for goods.

It doesn't have to be this way! By adding thoughtful little touches, we can soften the negative form experience and maybe even make something a little bit fun.

In this tutorial we're going to take a traditionally mundane part of form, the remaining character counter, and increase its functionality by adding a little playfulness.

We're going to attach a spring that fires on every keypress that goes over the character count limit, drawing attention to the counter. We're also going to slowly change the counter color to red as we approach the limit.

Have a play:

```marksy
<CodePen id="GEVrwE" />
```

To begin, you can use [this CodePen template](https://codepen.io/popmotion/pen/MoNMqP?editors=0010) to follow along.

## The counter

Our first job is to get the counter to count down as we enter characters.

The input field's `maxlength` is set to `10`. We can read this with JavaScript:

```javascript
const charLimit = parseInt(input.getAttribute('maxlength'));
```

Then, add an event listener to the `input` element. We're going to use `keyup`, as this event carries the most updated `value`, which we can then measure:

```javascript
input.addEventListener('keyup', (e) => {
  // Measure the length of the input value:
  const charCount = e.target.value.length;

  // Then, minus this from the charLimit variable:
  const remainingChars = charLimit - charCount;

  // Finally, set the contents of our counter to this remaining number:
  counter.innerHTML = remainingChars;
});
```

Now, as you type into the text box, the character count will decrease. So far we have a functional counter, but not a delightful one. Let's add the spring.

## The spring

We're going to increase the counter's `scale` property to draw the user's attention.

Spring physics, unlike a simple tween, can take into account a pre-existing velocity. This means we can make a spring that a user can be playful with.

Some users might notice that the more rapidly they press the keys the larger they can make the number, and spend a few seconds playing around with that.

First, we need to import the [`value` action](/api/value) and [`css` renderer](/api/css), as we're going to be tracking and setting the counter DOM element's `scale` property.

In CodePen, `popmotion` is a global variable, so we import like this:

```javascript
const { css, value } = window.popmotion;
```

But if you're working locally with the `npm` module, you'd `import` as per the docs.

Now we can make our setter:

```javascript
const counterRenderer = css(counter);
const counterScale = value(1, (v) => counterRenderer.set('scale', v));
```

We also need to add a new event listener, this time `keydown`. This event fires the moment the user presses down on the key, which is the moment they're imparting energy into the UI. So this feels very responsive - you can try putting the following code under the `keyup` event listener and you'll notice that it feels disconnected.

```javascript
input.addEventListener('keydown', (e) => {
  if (e.target.value.length === charLimit) {
  }
});
```

Within this `if` statement, we can add the `physics` action that will power the spring:

```javascript
physics({
  // Start the action from the current scale
  from: counterScale.get(),

  // We want the spring to rest on 1
  to: 1,

  // Set the initial velocity to the smaller of
  //  a) the scale value's current velocity, or
  //  b) an arbitrary value - we're going to use 100, but
  //  you should experiment. Higher initial velocity = more powerful spring
  // A minimum velocity of 0 would already be at rest.
  velocity: Math.max(counterScale.getVelocity(), 100),

  // Spring power, again higher value = powerful spring. Experiment!
  spring: 300,

  // Dampen the spring, so we don't get a high bounce - experiment with smaller values!
  friction: 0.99
}).start();
```

By tweaking the properties of `physics`, you can make springs with different feelings. You can explore these springs to strike a balance between playful and functional, and one that's appropriate for your brand.

However, there's one last modification to make. The spring says "Hey! You've reached the character count!" in a loud and abrupt way. By slowly changing the color of the counter we can also quietly inform the user that they're **approaching** the limit.

## The warning color

We're going to compose a very simple [value pipeline](/learn/value-pipelines) function to convert our character count into a color.

We can use three of Popmotion's [transformers](/api/transformers) to achieve this: `pipe`, `blendColor`, and `interpolate`.

```javascript
const { transform } = window.popmotion;
const { blendColor, interpolate, pipe } = transform;

const convertCountToColor = pipe(
  // First, we need to interpolate from a range of character
  // counts to a simple 0-1 progress. Our input range starts with
  // charLimit * 0.65, which will start conversion from 65% into
  // our permitted character range. So in this case our color
  // will start to change from 7 characters to 10.
  interpolate([charLimit * 0.65, charLimit], [0, 1]),

  // We then use this progress to blend from the counter's
  // current color, to red.
  blendColor(counterRenderer.get('color'), '#f00')
);
```

With that function created, we simply have to add one line to the end of our `keyup` event handler:

```javascript
counterRenderer.set('color', convertCountToColor(charCount));
```

Now when you type, the counter will begin to change color as your reach the character limit. You can change `0.65` to start changing color sooner (ie `0.5`) or later (`0.8`).

## Further optimisations

That's all for this tutorial, but there's plenty of ways in which we can go on to improve this form field counter:

- Visual `focus` state - maybe only show the character remaining count while the input has focus.
- Allow extra characters to be entered, and allow the "characters remaining" counter to run into the negatives.
- Not firing the spring on backspace.
- Only show the counter if JavaScript has loaded.
