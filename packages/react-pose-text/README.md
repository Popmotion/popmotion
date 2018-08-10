# React Pose Text

## React Pose animations for words and letters

[![npm version](https://img.shields.io/npm/v/react-pose-split-text.svg?style=flat-square)](https://www.npmjs.com/package/react-pose)
[![npm downloads](https://img.shields.io/npm/dm/react-pose-split-text.svg?style=flat-square)](https://www.npmjs.com/package/react-pose)
[![Twitter Follow](https://img.shields.io/twitter/follow/popmotionjs.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

React Pose Text brings the power of React Pose animations to text, for less than 1kb!

Animate individual words and characters using poses.

```javascript
<SplitText letterPoses={poses}>
  Hello world!
</SplitText>
```

## License

React Pose Text is free for **non-profit** use under a GPL-v3 license.

A permissive, commercial license is exclusive to backers of the [Popmotion Patreon](https://patreon.com/popmotion)!

## Usage

### Install

```
npm install react-pose react-pose-text
```

### `SplitText`

React Pose Text exposes a single component, `SplitText`.

Words and characters wrapped by this component will be ready to animate using poses.

```javascript
import SplitText from '@popmotion/split-text';

export default () => (
  <SplitText>Hello world!</SplitText>
);
```

### Animations

Poses can be defined for both words and individual characters using the `words` and `letter` props respectively:

```javascript
<SplitText words={wordPoses} letters={letterPoses}>
  Hello world!
</SplitText>
```

You can either pass the name of the desired pose to `SplitText` itself:

```javascript
<SplitText pose="active">
```

Or, if `SplitText` is an descendant of another posed component, pose changes will propagate down:

```javascript
const Container = posed.div();

export default () => (
  <Container pose={isActive ? "active" : "inactive"}>
    <SplitText words={wordPoses}>
      Hello world!
    </SplitText>
  </Container>
)
```

### Enter/exit animations

Like any posed components, `SplitText` can be animated using `PoseGroup`, allowing for enter and exit animations:

```javascript
const letterPoses = {
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

export default ({ showText }) => (
  <PoseGroup animateOnMount>
    {showText ? (
      <SplitText letters={letterPoses}>
        Hello world!
      </SplitText>
    ) : null}
  </PoseGroup>
)
```

### Dynamic poses

Pose properties can be dynamic, which means they're functions that are resolved when a pose is set.

`SplitText` provides the following props to these functions:

- `wordIndex`: The index of the current word.
- `letterIndex`: The index of the current letter.
- `letterInWordIndex`: The index of the current letter within the current word.
- `numWords`: Total number of words.
- `numLetters`: Total number of letters.
- `numLettersInWord`: Total number of letters within the current word.

You can use this information to, for instance, set custom stagger strategies using `delay`:

```javascript
const wordPoses = {
  hover: {
    y: -5,
    delay: ({ wordIndex }) => wordIndex * 50
  },
  rest: {
    y: 0,
    delay: ({ wordIndex }) => numWords - wordIndex * 50 // Reverse stagger
  }
};
```
