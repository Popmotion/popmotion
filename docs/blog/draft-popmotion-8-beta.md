---
title: Popmotion 8 beta instructions
description: ""
published: 20171105
draft: true
---

# Popmotion 8 beta

Hello weary traveller.

If you're reading this, it's because you expressed interest in playing around with the beta.

Thanks! It means a lot that people enjoy using the library.

## About Popmotion 8

It's a massive rewrite. It's been ported to TypeScript and has much higher test coverage.

The new API is Rx-inspired, using **action** and **reactions** to create streams of values.

I've added `decay`, `keyframes`, `onFrame` and `pointerDelta` actions. I've also removed a lot of the cruft - needless transformers like `add` etc.

You can also now animate more than raw numbers - `tween`, `physics`, `decay` and `spring` all accept named-objects and n-dimensional arrays. So you can do stuff like this:

```javascript
tween({
  from: [0, 1, 2],
  to: [5, 10, 15]
});
```

## How to help

If you could read through the `/docs/learn` folder in this repo to get aquainted with the new API (the links are broken because they get compiled out into the website) and let me know what your pain points are with the new syntax, I can brush up rough edges before launch.

## Install

```bash
npm install popmotion@beta
```

Or, the static file can be downloaded from `/packages/popmotion/dist` in this repo.

## TODOs

There are some notable missing features from 8:

- `crossfade` and `merge` compositors are coming
- `stagger` is coming but yet to nail syntax
- `colorTween`, coming soon
- Plugins need porting - in particular `timeline` needs figuring out.

## How to get in touch

Please raise any issues you have on our GitHub issues page and I'll try and be quick to address them.

Thanks again for helping me with this.
