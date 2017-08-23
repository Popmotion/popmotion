---
title: Action Compositor
description: An action that composes two or more actions.
category: action-composition
---

# Action Compositor

An Action Compositor is a special action that allows the blending, combination and control of multiple other actions to create complex motion patterns.

For instance, a set of tweens could be stagged:

```javascript
stagger(arrayOfTweens).start();
```

But we could control two sets of staggered actions in parallel:

```javascript
parallel([
  stagger(arrayOfTweens),
  stagger(arrayOfPhysics)
]).start();
```
