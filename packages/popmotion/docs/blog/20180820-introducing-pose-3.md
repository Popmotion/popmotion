---
title: Introducing Pose 3.0
description: A look at the latest Pose features, changes, and a hint of what's next
published: 20180820
---

# Introducing Pose 3.0

[Pose 3.0](/pose) is officially out, and with it, some new features! Let's take a look at what's new, what's changed, and what's next.

<TOC />

## New UI events

Pose is designed to simplify **both** animations and interactions. But so far, it's only supported dragging.

Now, elements can animate on `hover`, `focus` and `press` too, with code as simple as this:

```javascript
const config = {
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 }
};
```

As usual, these poses flow through the pose tree. So all children of these posed components will also animate receive these poses, allowing simple coordination of animations across the DOM.

It also handles some usually finicky logic, which we solve with our new pose resolution logic.

## Pose resolution

Imagine an element that is both hoverable and draggable. This sequence of events often happens:

1. User hovers: hover animation plays
2. User drags: drag animation plays
3. User hovers out while still dragging: hover out animation plays
4. User hovers: hover animation plays
5. User stops dragging: ???

There's two problems with this flow. The first is that if a user hovers out while still dragging (usually because the UI is updated slower than the pointer), **no** animation should play. The dragging animation should take precedence.

Second, when dragging stops we should know that the user is still hovering and animate to that state, rather than to an "at rest" state. Pose handles this for you:

<CodeSandbox id="yqmzz4mz0v" />

This is because values can now be in multiple poses at once. Instead of this:

```javascript
'drag'
```

We have this:

```javascript
['drag', 'hover', 'init']
```

Because vanilla and React Pose are configured to prioritise the `'drag'` pose over `'hover'`, if hover is removed and then re-added, it'll always be added **after** drag. So the value will continue to resolve to `'drag'`.

This also means that when both drag and hover states are removed, the value reverts to whichever pose it was in previously. In this case, that's the new special `'init'` pose (which does what it says on the tin).

This is in contrast to the more state-machine-like approach previously taken, which expected a constant stream of a new poses.

## Breaking changes

Of course, being a major release, there's breaking changes. This release, it's precautionary. Because we're resolving poses in a new way, it's possible that some of your animations work a little differently. Unlikely, but possible.

Also, we've changed the special `dragging` pose to just `drag`. This was undocumented, so again this is precautionary, but it's possible I might have let it slip in a CodePen. You can learn how to animate with it, and all the other new event poses, in our new [UI events tutorial](/pose/learn/ui-events/).

## What's next

The flurry of activity will continue over the coming weeks and months. We've just opened our [new Patreon and Open Collectives](/support/) which will help support Popmotion's continued development.

We've also just released the long-requested [Pose examples](/pose/examples/) page, which we're going to be filling up with all-new examples.

On the [features board](https://github.com/Popmotion/popmotion/projects/1) the most requested card is the ability to animate between different value types, and to `auto`.

There'll also be tutorials, both articles and video, for commonly-requested implementations like carousels and route transitions.
