---
title: SplitText
description: Animate words and characters using the power of React Pose animations.
category: react
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# React Pose Text

React Pose Text automatically splits strings of text into individual words and/or characters. These can then be animated with the full power of Pose:

- Magic animations
- Stagger across words and characters
- Animate any style property, including `color` and `text-shadow`
- Make words and characters individually draggable, or respond to a parent's dragging.
- `enter`/`exit` animations with `PoseGroup`
- Only 1kb!

<CodeSandbox id="4jzzvm1vz7" />

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

```javascript
import SplitText from 'react-pose-text';

export default () => (
  <SplitText>Hello world!</SplitText>
);
```

Strings wrapped with this component will be split into posed components for every word and character.

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

It also responds to pose changes further up the tree.

<CodeSandbox id="100lwoo7wl" />

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

But `SplitText` also provides a series of special props.

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

You can use these props in various ways, for instance to create a variety of staggering effects by dynamically generating `delay`:

```javascript
const charPoses = {
  enter: {
    y: 0,
    delay: ({ charIndex }) => charIndex * 50 
  }
};
```

<CodeSandbox id="zzlr2p70mm" />

#### Pointer events

You can use Pose's pointer events as usual. For instance, you can make every word draggable by setting `draggable: true`:

<CodeSandbox id="yqwwn1rmjv" />

Those poses still cascade down, too. So by setting `dragging` and `dragEnd` poses to our characters, we can make our characters animate while dragging words:

<CodeSandbox id="38047jqp7m" />
