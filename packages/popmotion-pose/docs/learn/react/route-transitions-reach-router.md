---
title: "Tutorial: Reach Router"
description: How to make route transition animations with React Pose and Reach Router
category: react
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# Route transitions with Reach Router

> **Note:** This tutorial is for **Reach** Router. Users of **React** Router will want to use the [React Router tutorial](/pose/learn/route-transitions-react-router).

Route transitions in React are notoriously fiddly. With [Pose](/pose) and the accessibility-first [Reach Router](https://reach.tech/router), they can be pretty simple.

We're going first learn how to make a simple fade transition between two routes.

Then, as Pose has the ability to coordinate animations throughout the component tree, we'll show how to animate each route differently, with content staggering in and out.

Here's what we'll be making:

<CodeSandbox height="600" id="mzx1jz521p" />

<TOC />

## Sandbox

We've created a [CodeSandbox](https://codesandbox.io/s/mzx1jz521p) example preloaded with React Pose and Reach Router, for you to fork and follow along.

It's set up in a standard way according to the [Reach Router docs](https://reach.tech/router), so if you're not already familiar with Reach Router, it's worth reading the overview there.

## Fade transition

So, let's animate! The first animation we'll add is a simple fade transition. When a user clicks a link, we want to fade the existing content out, and the new content in.

We'll start by importing React Pose. We're going to be using both `posed` and `PoseGroup`. So at the end of your imports, add:

```javascript
import posed, { PoseGroup } from 'react-pose';
```

Now, let's create a posed component with our two visual states, `enter` and `exit`. After the line above, add:

```javascript
const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
```

We can now use this to wrap our `Router` component:

```javascript
{({ location }) => (
  <RoutesContainer>
    <Router location={location}>
      {children}
    </Router>
  </RoutesContainer>
)}
```

To animate this component between the two `enter` and `exit` states, we can use the `PoseGroup` component.

`PoseGroup` tracks the entering and exiting of child components (as well as reordering), and will animate them in an out. Any components exiting will only be physically removed from the tree once they've finished their `exit` animation.

```javascript
{({ location }) => (
  <PoseGroup>
    <RoutesContainer>
      <Router location={location}>
        {children}
      </Router>
    </RoutesContainer>
  </PoseGroup>
)}
```

Ah, but wait! If you try and click between pages, there's still no animation. What's up?

Without passing `RoutesContainer` a `key`, `PoseGroup` doesn't know that it has a new child, so it can't animate anything. Let's use Reach Router's `location.key` prop as our key:

```javascript
<RoutesContainer key={location.key}>
```

Now, when you change routes, the content will fade in and out!

The two pieces of content currently fade on top of each other. By adding a small delay to the `enter` state, we can optionally separate the animations:

```javascript
const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});
```

## Content transitions

With that animation in place, we can go a step further and animate the entering and exiting content.

First, add a `beforeChildren: true` property to the `RoutesContainer` `enter` pose. This will ensure that it finishes fading in before we animate any of its children:

```javascript
const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true
  },
  exit: { opacity: 0 }
});
```

Let's animate our first page. Open `pages/about.js`. You'll see that we've pre-made two posed components, `Container` and `P`, and used those to markup the `About` component.

In the markup, the `P` components are children of `Container`, and `Container` is a child of `RoutesContainer`. So when `RoutesContainer` changes to `enter` and `exit` poses, these will flow through each of the posed components in turn, allowing us to animate them.

Add `enter` and `exit` poses to `P`:

```javascript
const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
```

Now, when you enter and exit the `About` page, all the paragraphs will animate in and out. But they all animate in together. It'd be nice to stagger these animations instead.

That's why we've made `Container` a posed component too. It's not going to do animation itself, it's just going to control the animation of its children with the `staggerChildren` property:

```javascript
const Container = posed.div({
  enter: { staggerChildren: 50 }
});
```

Try entering and exiting the `About` page again. The paragraphs stagger in.

We can try the same trick on the `Home` page. Open `pages/home.js` and replace the `ListContainer` and `Item` posed components with this:

```javascript
const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});
```

This time, `ListContainer`'s `exit` pose has a new property, `staggerDirection`. Setting this to `-1` reverses the stagger, so elements animate out from the bottom up.

## Conclusion

We've learned how to use Pose with Reach Router to do a quick and simple fade transition, as well as animating across children to provide unique effects for every page.

We've also seen how posed components can be used not only to animate, but to sequence the animations of their children.
