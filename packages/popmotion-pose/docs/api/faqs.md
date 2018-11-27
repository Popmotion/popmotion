---
title: FAQs
description: Pose frequently asked questions
---

# FAQs

<TOC />

## Browser support?

Pose and React Pose support all major browsers.

For legacy IE11 support, the following polyfills are required:

- [String.endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill)
- [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill)
- [WeakSet](https://github.com/dy/weakset)

## Filesize?

As of version 3.0:

- Pose is **15.7kb**
- React Pose is **18.8kb**, or **17kb** for pre-existing users of Styled Components or Emotion due to shared modules.

## Server-side rendering?

Currently React Pose doesn't apply any styles on the server, and you may need to apply initial styles via your CSS solution.
