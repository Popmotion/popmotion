---
title: React Pose Text
description: Animate words and characters using the power of React Pose animations.
category: plugins
---

# React Pose Text

React Pose Text automatically splits strings of text into individual words and/or characters. These can then be animated with the full power of Pose:

- Magic animations
- Stagger across words and characters
- Animate any style property, including `color` and `text-shadow`
- Make words and characters individually draggable, or respond to a parent's dragging.
- `enter`/`exit` animations with `PoseGroup`
- Only 1kb!

<TOC />

## License

React Pose Text is free for **non-profit** use under a GPL-v3 license.

A permissive, commercial license is exclusive to backers of the [Popmotion Patreon](https://patreon.com/popmotion)!

## Usage

### Install

```
npm install react-pose react-pose-text
```

### SplitText

React Pose Text exports a single component, `SplitText`.

Strings wrapped with this component will be split into posed components for every word and character.

```javascript
import SplitText from 'react-pose-text';

export default () => (
  <SplitText>Hello world!</SplitText>
);
```

Poses can be defined for both words and characters by providing [Pose configs](https://popmotion.io/pose/api/react-config/) to the `wordPoses` and `charPoses` props, respectively:

```javascript
const charPoses = {
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

export default () => (
  <SplitText charPoses={charPoses}>
    Hello world!
  </SplitText>
);
```

`SplitText` acts like a regular posed component, which means we can animate between poses using the `pose` property:

```javascript
export default ({ isVisible }) => (
  <SplitText
    charPoses={charPoses}
    pose={isVisible ? 'enter' : 'exit'}
  >
    Hello world!
  </SplitText>
);
```

It also responds to pose changes further up the tree:

```javascript
const Sidebar = posed.div({
  visible: {
    x: '0%',
    beforeChildren: true,
    staggerChildren: 50
  },
  hidden: { x: '-100%' }
});

const charPoses = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 10, opacity: 0 }
};

export const ({ isVisible }) => (
  <Sidebar pose={isVisible ? 'enter' : 'exit'}>
    <SplitText charPoses={charPoses}>
      Contents
    </SplitText>
  </Sidebar>
);
```

#### Special pose props

Like normal posed components, all props provided to `SplitText` are sent through to dynamic pose properties:

```javascript
const charPoses = {
  enter: { y: 0 },
  exit: { y: ({ initialOffset }) => initialOffset }
};

export default () => (
  <SplitText initialOffset={5} charPoses={charPoses}>
    Hello world!
  </SplitText>
);
```

But `SplitText` also provides a series of special props to word and character posed components.

Words receive:
- `wordIndex`
- `numWords`

Characters receive:
- `wordIndex`
- `numWords`
- `charIndex`
- `numChars`
- `charInWordIndex`
- `numCharsInWord`

You can use this information to create a wide variety of staggering effects by dynamically generating `delay`:

```javascript
const charPoses = {
  enter: {
    y: 0,
    delay: ({ charIndex }) => charIndex * 50 
  }
};
```
