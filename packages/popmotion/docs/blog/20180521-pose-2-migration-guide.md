---
title: Pose 2.0 migration guide
description: A quick overview of what's been removed in Pose and React Pose, and how to migrate your code.
published: 20180621
---

# Pose 2.0 migration guide

Pose and React Pose 2.0 are out now. As we all know all-too-well, major version increases mean one thing: All your stuff's broke.

There are two small API-breaking changes introduced into Pose. One that you might have seen deprecation warnings for, one that you haven't.

## `transitionProps` is now `props`

In a bit of bikeshedding that should, nonetheless, make the API a little easier to explain, `transitionProps` is now `props`.

When they were first introduced, `transitionProps` were used to dynamically generate `transition`s. Now, they can be used to dynamically set any pose prop, hence the change in terminology:

```javascript
const config = {
  open: { x: ({ x }) => x },
  props: { x: 0 }
};

// Pose
const poser = pose(config);

// React Pose
const Posed = posed.div(config);
() => <Posed x={10} />
```

This has also led to the renaming of `setTransitionProps` to `setProps` for the vanilla Pose users in the audience.

## FLIP is now opt-in

Previously, Pose would detect if you were animating a layout property like `width` or `top` and convert that to a FLIP animation.

Although FLIP animations are more performant, if not handled with care they can cause unexpected visual artifacts. We also don't currently have a good strategy for animating to `0` (which makes the "invert" stage of FLIP decidedly tricky).

This was one of the most commonly-occurring points of confusion with the API, so I've made it opt-in with `flip: true`:

```javascript
const config = {
  open: {
    width: '100vw',
    height: '100vh',
    flip: true
  },
  close: {
    width: '100px',
    height: '100px',
    flip: true
  }
}
```

The good news is that this shouldn't break any of your code. If left unchanged, Pose will simply animate the layout property, **unless**, as above, you're animating between two different unit types which Pose doesn't currently support (PRs welcome!)
