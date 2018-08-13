---
title: React Pose Text
description: Animate words and characters using the power of React Pose animations.
category: plugins
draft: true
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

`SplitText` acts like a regular posed component, which means we can animate between poses using all the normal methods:

#### "pose" property

`SplitText` accepts a `pose` property:

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

#### As a child

`SplitText` responds to changes in pose further up the tree too. For instance, you might want 

#### PoseGroup



### Special pose props



