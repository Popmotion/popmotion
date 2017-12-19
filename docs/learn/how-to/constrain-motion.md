---
title: Constrain motion
description: How to constrain motion to within ranges using clamping and springs.
category: how-to
---

# Constrain motion

When creating UIs, there's plenty of instances when we want to constrain motion to within a specific range.

For instance, if we're making an input slider, we want to constrain its sliding motion to within the slider's visible boundaries.

Otherwise, the illusion of a coherent piece of UI is broken, and the input is useless:

<CodePen id="KZzWdz" height={200} />

In this tutorial, we'll look at a functional approach to solving this problem. We'll handle out-of-range motion with 1) a hard clamp, and 2) a static spring.

You can follow along by forking [this CodePen](https://codepen.io/popmotion/pen/KZzWdz?editors=0010).

## Clamp

The easiest way to restrict motion to within a range is by clamping it. Clamping is simply the process of restricting a number within a range.

JavaScript includes two commonly-used clamping functions, `Math.min` and `Math.max`.

We can change the dragging action from:

```javascript
pointerX(handleX.get())
  .start(handleX)
```

To:

```javascript
pointerX(handleX.get())
  .pipe(v => Math.max(0, v))
  .start(handleX)
```

By using `Math.max` to clamp the lower range to `0`, you'll notice you can't drag the handle beyond the left boundary:

<CodePen id="ppyeGW" height={200 />

We could add the right boundary like this:

```javascript
pointerX(handleX.get())
  .pipe(
    v => Math.max(0, v),
    v => Math.min(250, v)
  )
  .start(handleX)
```

Popmotion provides a clearer way of expressing this via the `clamp` [transformer](/api/transformers). This function accepts a range and returns a function that will clamp any provided number to within that range:

```javascript
clamp(0, 250)(-50) // 0
```

So our `pointerX` function becomes:

```javascript
pointerX(handleX.get())
  .pipe(clamp(0, 250))
  .start(handleX)
```

<CodePen id="eyZvar" height={200} />

We now have a functional input slider! But we don't have a **delightful** one.

Think of iOS, when you scroll a view beyond its boundaries. It doesn't stop dead, it tugs back. It's a visceral and satisfying experience.

We can replicate this experience with Popmotion using static springs.

## Static springs

Popmotion has so many springs you could use it as a mattress.

We have two actions capable of simulating springs:

- [Spring](/api/spring) is a highly-accurate simulation, but immutable. Most appropriate for **spring animations**.
- [Physics](/api/physics) is a lightweight integrated simulation that can change over time. Most appropriate for **spring interactions**.

Of the two, `physics`, in theory, could be used to restrain motion to a range. But it's overkill. You'd have to set conditional statements to start and stop animations, grab the velocity from `handleX`, set this and that. It'd be an imperative soup.

Instead, Popmotion provides two transformers that can be used in a purely functional manner: `linearSpring` and `nonlinearSpring`.

They both share an API. Provide a `strength` and a `target`, and they'll return a function. This function, when given a numerical value, will return a new number "pulled" towards the target.

```javascript
linearSpring(0.25, 0)(4) // 1
```

`linearSpring` applies a **constant force**, whereas `nonlinearSpring` applies a **greater force the further the given number is away from `target`**.

In tandem with the `conditional` transformer, we can apply these springs only when the number output by `pointerX` exceeds the defined boundaries:

```javascript
conditional(
  v => v < 0, // If less than 0
  linearSpring(0.25, 0) // Apply spring
)
```

Let's compose a new function using `pipe`, `conditional` and `linearSpring` that will restrict a range of motion using springs:

```javascript
const springRange = (from, to, strength) => pipe(
  conditional(
    v => v < from,
    linearSpring(strength, from)
  ),
  conditional(
    v => v > to,
    linearSpring(strength, to)
  )
);
```

This can be passed to 

```javascript
pointerX(handleX.get())
  .pipe(springRange(0, 200, 0.2))
  .start(handleX)
```

To create spring-restricted motion that feels like this:

<CodePen id="jYqmEa" height={200} />

Try replacing `linearSpring` with `nonlinearSpring` and adjust the `strength` to see how that changes the behaviour of the handle.

### Spring back

You'll notice that if you let go of the handle outside the slider's boundaries, it just sits still. This is at odds with the perceived spring that binds the handle to the slider.

For this, we can start a `spring` animation on the mouseup/touchend event.

Currently, we just call `() => handleX.stop()` which ungracefully stops any action driving `handleX`, which in this example is `pointerX`.

Let's replace this reaction with:

```javascript
() => {
  const x = handleX.get()

  if (x < 0 || x > 250) {
    // Start spring animation
  } else {
    handleX.stop();
  }
}
```

Now the function will only stop motion abruptly if the handle is **within** the slider's range.

To handle cases when the handle is **outside** the range, replace the commented line with this:

```javascript
spring({
  from: x,
  to: x < 0 ? 0 : 250,
  velocity: handleX.getVelocity(),
  stiffness: 900,
  damping: 30
}).start(handleX);
```

<CodePen id="xpVdLv" height={200} />

You can play around with the settings of both the static spring and the `spring` animation until you find something that feels responsive, satisfying and in-keeping with your brand.

## Conclusion

We can declaratively implement motion constraints using functional composition.

Clamping is the most basic approach, but static springs can yield more satisfying results when paired with user input.

`pipe` and `conditional` allow you the freedom to devise and compose your own strategies for imposing motion constraints.

A couple ideas for next steps:

- Replace the `stop` call in our mouseup event with a `decay` animation that allows the user to throw the handle. It could include a little bump animation when it hits a slider limit.
- Generate your own static springs using the `generateStaticSpring` transformer.
