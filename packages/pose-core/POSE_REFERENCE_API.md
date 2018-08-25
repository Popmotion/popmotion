# Pose reference API

This document **is not** representative of any real API, but rather outlines an "ideal" or aspirational, reference API that all flavours of Pose should strive to implement.

This will allow fully transportable code between platforms and standardised settings.

Currently, flavours of Pose exist for React, React Native, and (unpublished) React 360. The only thing stopping the development of versions for Vue and Angular (for instance) is time. [Get in contact](https://twitter.com/popmotionjs) if you're interested in developing these.

## The API

Flavours of Pose **may** add platform-specific capabilities but should target this API as minimum.

```typescript
type PoseConfig = {
  // UI events
  hoverable?: boolean,
  pressable?: boolean,
  draggable?: boolean | 'x' | 'y',
  focusable?: boolean,
  pinchable?: boolean,
  rotatable?: boolean,

  // UI event configuration
  dragBounds?: {
    // number denoting default units for positional type (ie px in DOM)
    // string being value types eg %
    top?: number | string
    right?: number | string
    bottom?: number | string
    left?: number | string
  },

  // Other options
  passive?: {
    [key: string]: PassiveValue
  },
  label?: string,

  // Poses
  init?: Pose,
  hover?: Pose,
  press?: Pose,
  drag?: Pose,
  focus?: Pose,
  blur?: Pose,
  pinch?: Pose,
  rotate?: Pose,
  ...poses?: Pose
};

/**
 * Pose
 * All pose properties may also be defined as a function that resolves when a pose is entered.
 * This function will be provided certain properties, either user-defined or set by the pose implementation. This allows the creation of dynamic, responsive poses.
 */
type Pose = {
  delay?: number,
  delayChildren?: number,
  beforeChildren?: boolean,
  afterChildren?: boolean,
  staggerChildren?: number,
  staggerDirection?: 1 | -1,
  transition?: TransitionDefinition,
  timeline?: Timeline,
  ...values: PosedValue
};

type TransitionDefinition = Transition | { [key: string]: Transition };

type Transition = {
  min?: number,
  max?: number,
  round?: boolean
} & Tween | Spring | Decay | Physics | Keyframes;

type Tween = {
  type?: 'tween',
  duration? = 300: number,
  elapsed? = 0: number,
  ease? = 'easeOut': Easing,
  loop? = 0: number,
  flip? = 0: number,
  yoyo? = 0: number
};

type Spring = {
  type: 'spring',
  stiffness? = 100: number,
  damping? = 10: number,
  mass? = 1.0: number,
  restDelta? = 0.01: number,
  restSpeed? = 0.01: number
};

type Decay = {
  type: 'decay',
  power? = 0.8: number,
  timeConstant? = 350: number,
  restDelta? = 0.5: number,
  modifyTarget: (target: number) => number
};

type Physics = {
  type: 'physics',
  acceleration? = 0: number,
  restSpeed? = 0.001: number,
  friction? = 0: number,
  springStrength? = 0: number
};

type Keyframes = {
  type: 'keyframes',
  values: number[] | string[],
  easings: Easing[],
  times: number[],
  ...Tween
};

type PassiveValue = {
  fromValue: string,
  fromParent: boolean | string, // boolean is immediate parent, string is `label` of ancestor,
  input: string[] | number[],
  output: string[] | number[]
};

type Easing =
  'linear' |
  'easeIn' |
  'easeOut' |
  'easeInOut' |
  'circIn' |
  'circOut' |
  'circInOut' |
  'backIn' |
  'backOut' |
  'backInOut' |
  'anticipate' |
  number[]; // Array of four numbers for cubic bezier

/**
 * Timeline (Proposed API)
 * Based on the current Popmotion API https://popmotion.io/api/timeline/
 */
type Timeline = {
  playlist: Array<
    TimelineSegment,
    TimelineSegment[], // Parallel timeline segments,
    [...TimelineSegment, number], // Staggered timeline segments
    number, // Absolute timestamp,
    string, // Relative timestamp, ie '-200', 200 ms before previous segment
  >,
  duration?: number,
  ease? = 'linear': Easing,
  loop?: number,
  flip?: number,
  yoyo?: number
};

type TimelineSegment = {
  track: string, // Of format 'label.value' or 'label[n].value'
  from: number | string | { [key: string]: number | string },
  to: number | string | { [key: string]: number | string },
  duration?: number
};
```

## Implemented

|                             | React | React Native | React 360 |
| --------------------------- | ----- | ------------ | --------- |
| Animate between value types |       |              |           |
| Hoverable                   | ✅     |              | ✅         |
| Pressable                   | ✅     |              |           |
| Draggable                   | ✅     | ✅            |           |
| Focusable                   | ✅     |              |           |
| Pinchable                   |       |              |           |
| Rotatable                   |       |              |           |
| Tween                       | ✅     | ✅            | ✅         |
| Physics                     | ✅     |              |           |
| Decay                       | ✅     | ✅            | ✅         |
| Spring                      | ✅     | ✅            | ✅         |
| Keyframes                   | ✅     |              |           |
| Timeline                    |       |              |           |
| `dragBounds`                | ✅     |              |           |
| Serialised passive values   |       | ✅ *1         | ✅ *1      |
| `init` pose                 | ✅     |              |           |
| Serialised `transition`     | ✅     |              |           |
| Timeline                    |       |              |           |

### Notes

1. Currently implemented with differing API than defined above.
