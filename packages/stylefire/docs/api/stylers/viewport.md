---
title: Viewport
description: Performant styler viewport scrolling
category: styler-types
---

# Viewport styler

When `styler` is provided `window`, it returns a styler capable of scrolling the viewport.

```javascript
const viewportStyler = styler(window);

viewportStyler.set("scrollTop", 20);
```

It supports `scrollTop` and `scrollLeft` props.
