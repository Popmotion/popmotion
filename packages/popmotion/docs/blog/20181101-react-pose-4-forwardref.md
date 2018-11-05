---
title: "Pose for React 4.0: Custom components made simple(r)"
description: Pose previously used special properties to animate custom components. 4.0 simplifies this by enforcing forwardRef.
published: 20181101
author: mattperry
---

# Pose for React 4.0: Custom components made simple(r)

Today, we release Pose for React 4.0. In accordance with Pose tradition, the major release brings with it no big splash features or complicated migration, just one simple breaking change that should clarify the API going forward.

## What's the problem?

Pose for React was written in a time before `React.forwardRef`. As a result, it took the `innerRef` property from Styled Components, which is a minor point of confusion over simply accepting `ref`.

But the bigger consequence was added confusion around animating custom components. Pose needs a DOM element to animate. So we offered multiple ways of fetching one: `innerRef` for SC and similar libraries and `hostRef` based on unrealised React GitHub chatter. When `forwardRef` was released, we added support for that, too.

This led to a messy story around animating custom components and the extra ref props flagged errors in stricter linting and typing environments. As CSS-in-JS libraries like SC and Emotion 10 now support `forwardRef`, it's time to clean this up in Pose too.

From today:

1. Posed components will accept `ref` to grab inner DOM nodes (`innerRef` works but is deprecated and will throw a warning in development mode).
2. `forwardRef` is the **one** canonical way to animate custom components.

## What do I need to do?

### Fetching DOM refs

`innerRef` will continue working until `5.0`. But now when you want to grab a posed component's DOM reference from outside, you should use `ref`:

```javascript
const Button = posed.button(config);

export default ({ setRef }) => <Button ref={setRef} />;
```

### Animating custom components

Animated custom components are a little different. Currently, your code might look like this:

```javascript
// CustomComponent.js
export default ({ innerRef }) => <div ref={innerRef} />;

// index.js
import CustomComponent from './CustomComponent';

const PosedCustomComponent = posed(CustomComponent)(config);
```

Now, `CustomComponent` must be wrapped in React's `forwardRef` function. Typically, you'd call its second argument `ref`, but to ease migration you can rename it to whichever property you're already using. For instance:

```javascript
import { forwardRef } from 'react';

export default forwardRef((props, innerRef) => <div ref={innerRef} />);
```

## Conclusion

Now, it doesn't matter whether you `styled` your `posed` or `posed` your `styled` components. This new approach is robust no matter how strict your environment is.

Most importantly, it's simpler to communicate to users, which typically has the happy side-effect of simpler expression in code. This time, it nets us a saving of ~0.6kb!
