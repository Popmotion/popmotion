---
title: Install
description: Overview of Pose's installation options.
category: react
next: popmotion-get-started
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# Install

**React Pose requires React 16.3.0.**

<TOC />

## Package managers (recommended)

### npm

```bash
npm install react-pose --save
```

### yarn

```bash
yarn add react-pose
```

## File include

**Note:** The Pose documentation uses the `import` syntax for importing individual modules.

**If you use one of the following installation methods, top-level React Pose exports will be available as the global `posed` and `PoseGroup` variables.**

So, when you see in the docs `import posed, { PoseGroup } from 'react-pose'`, you can instead simply use the global `posed` and `PoseGroup` variables.

### Download

You can download the latest version of Pose at https://unpkg.com/react-pose/dist/react-pose.js

### Script include

You can include it in your HTML with this `script` tag:

```
<script src="https://unpkg.com/react-pose/dist/react-pose.js"></script>
```

## CodePen

You can fork the [React Pose playground on CodePen](https://codepen.io/popmotion/pen/mxmrPZ?editors=0010), which is set up with the latest version of React Pose.

You an also add React Pose to any existing CodePen project by clicking on Settings > JavaScript and then pasting `https://unpkg.com/react-pose/dist/react-pose.js` into the "Add External JavaScript" field.
