---
title: Roadmap
description: Future of the Pose animation system
---

# Roadmap

Pose is an ongoing project to simplify the creation of fluid and playful interfaces across frameworks.

This living document outlines the direction of Pose in the near and far future as I see it. If you feel like contributing towards any of these goals, [get in touch on Twitter](https://twitter.com/popmotionjs)!

## Near-term

### Feature parity across Pose and React Native Pose

- **Units:** Support `%` units in React Native Pose, and support mixed `%` and `v` animations in Pose. Make `vw`/`vh` units persist across screen rotations in React Native.
- **Animate colors:** Currently in React Native Pose, colors can only be defined as `passive` values. We could simplify their animation by creating a new `Animated.Value` and interpolation when a pose is entered.
- **Investigate FLIP animations in React Native.** The underlying problem is essentially the same, so it'd be interesting if we can bring `PoseGroup` and its FLIP capabilities to Native.

### Fully-serialised transitions

Popmotion and React Animated share many of the same capabilities, including the same spring animation (based on [Wobble](https://github.com/skevy/wobble)), so that many animations props are directly portable.

Currently custom transitions require users to return Popmotion animations in Pose and React Pose, and React Animated animations in React Native Pose.

In order to simplify documentation, increase portability and reduce the room for error, transitions should be able to be defined as objects and Pose can create the animations itself.

```javascript
const config = {
  open: {
    scaleX: 1,
    transition: {
      type: 'spring',
      stiffness: 500
    }
  }
}
```

The only time it would be necessary to return a Popmotion or Animated animation is when there's an advanced library-specific feature.

### Migrate Pose to `pose-core`

`pose-core` was developed as an abstraction of Popmotion Pose for React Native Pose so that all the animation framework-specific code lived outside of Pose.

We now need to move Popmotion Pose and React Pose to use that, so that features like `staggerChildren` and child-binding can be shared.

## Medium-term

### Personality-based config

Once transitions can be full serialised and there's feature parity across flavours of Pose it should be possible to create functions that accept a `transition`-less config like this:

```javascript
const config = {
  open: { x: '-100%' },
  closed: { x: 0 }
}
```

And automatically generate transitions based on words or feelings that we want to associate with the interface. For example:

```javascript
const Component = posed.View(playful(config));
```

Or perhaps:

```javascript
const Component = posed.View(personality(config, ['playful', 'graceful']))
```

### React VR

It should be relatively trivial already to create a React VR Pose for animations though I doubt the demand is there yet and I have doubts over the commitment to React VR.

The real challenge would be finding a way to describe and unify the myriad of interactions a user can have in VR. If we consider our realm to be simple User Interface behaviour (rather than a full-blown, optimised physics engine) this becomes easier, and plays into a wider story about introducing new cross-platform interaction options like `zoomable`.
