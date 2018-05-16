---
title: Viewport
description: Styler for setting viewport scroll position.
category: stylers
---

# Viewport styler

When `styler` is provided `window`, it returns a styler capable of scrolling the viewport.

```javascript
const viewportStyler = styler(window);

viewportStyler.set('scrollTop', 20);
```

It supports `scrollTop` and `scrollLeft` props.