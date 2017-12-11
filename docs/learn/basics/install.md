---
title: Install Popmotion
description: Overview of Popmotion's different installation options.
category: basics
next: get-started
---

# Install Popmotion

## Package managers

### npm

```bash
npm install popmotion --save
```

### yarn

```bash
yarn add popmotion
```

## File include

**Note:** The Popmotion documentation uses the `import` syntax for importing individual modules.

**If you use one of the following installation methods, Popmotion will be available on the global `popmotion` variable.**

So, when you see in the docs `import { tween } from 'popmotion'`, you will use `const { tween } = popmotion` instead.

### Download

You can download the latest version of Popmotion at https://unpkg.com/popmotion/dist/popmotion.global.min.js

### `script` include:

Or include it directly in your HTML with this `script` tag:

```html
<script src="https://unpkg.com/popmotion/dist/popmotion.global.min.js"></script>
```

### CodePen

You can fork the [Popmotion playground on CodePen](https://codepen.io/popmotion/pen/zPjXWa?editors=0010), which is set up with the latest version of Popmotion.

You an also add Popmotion to any existing CodePen project by clicking on Settings > JavaScript and then pasting `https://unpkg.com/popmotion/dist/popmotion.global.min.js` into the "Add External JavaScript" field.
