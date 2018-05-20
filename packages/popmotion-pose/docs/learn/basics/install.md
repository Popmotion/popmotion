---
title: Install
description: Overview of Pose's installation options.
category: basics
next: popmotion-get-started
---

# Install

- [Pose](#install-pose)
- [React Pose](#install-react-pose)

## Pose

### Package managers (recommended)

#### npm

```bash
npm install popmotion popmotion-pose --save
```

#### yarn

```bash
yarn add popmotion popmotion-pose
```

### File include

**Note:** The Pose documentation uses the `import` syntax for importing individual modules.

**If you use one of the following installation methods, Pose will be available as the global `pose` function.**

So, when you see in the docs `import pose from 'popmotion-pose'`, you can instead simply use the global `pose` variable.

[Popmotion](https://popmotion.io) is also included with the minified file as a global `popmotion` variable.

#### Download

You can download the latest version of Pose at https://unpkg.com/popmotion-pose/dist/popmotion-pose.js

#### `script` include

You can include it in your HTML with this `script` tag:

```
<script src="https://unpkg.com/popmotion-pose/dist/popmotion-pose.js"></script>
```

### CodePen

You can fork the [Popmotion Pose playground on CodePen](https://codepen.io/popmotion/pen/bvqJbV?editors=0010), which is set up with the latest version of Pose.

You an also add Pose to any existing CodePen project by clicking on Settings > JavaScript and then pasting `https://unpkg.com/popmotion-pose/dist/popmotion-pose.js` into the "Add External JavaScript" field.

## React Pose

**React Pose requires React 16.3.0.**

### Package managers (recommended)

#### npm

```bash
npm install popmotion popmotion-pose react-pose --save
```

#### yarn

```bash
yarn add popmotion popmotion-pose react-pose
```

### File include

**Note:** The Pose documentation uses the `import` syntax for importing individual modules.

**If you use one of the following installation methods, top-level React Pose exports will be available as the global `posed` and `PoseGroup` variables.**

So, when you see in the docs `import posed, { PoseGroup } from 'react-pose'`, you can instead simply use the global `posed` and `PoseGroup` variables.

[Popmotion](https://popmotion.io) is also included with the minified file as a global `popmotion` variable.

#### Download

You can download the latest version of Pose at https://unpkg.com/react-pose/dist/react-pose.js

#### `script` include

You can include it in your HTML with this `script` tag:

```
<script src="https://unpkg.com/react-pose/dist/react-pose.js"></script>
```

### CodePen

You can fork the [React Pose playground on CodePen](https://codepen.io/popmotion/pen/mxmrPZ?editors=0010), which is set up with the latest version of React Pose.

You an also add React Pose to any existing CodePen project by clicking on Settings > JavaScript and then pasting `https://unpkg.com/react-pose/dist/react-pose.js` into the "Add External JavaScript" field.
