---
title: Get Started
description: Introduction to Popmotion's tween, physics and user input tracking functions.
category: basics
---

# Get Started

Popmotion is a JavaScript motion engine that allows developers to combine **actions**, like tweens, physics and input tracking, to create polished and engaging interfaces.

In this simple guide we're going to install Popmotion and create our first animation using the simplest action, the tween.

## Installation

```javascript
npm install popmotion --save
```

## The "Hello World" tween

A tween is, simply, a function that changes a number over a set duration of time.

<Example>{`
import { tween } from 'popmotion';

const helloWorld = tween({
  onUpdate: (v) => console.log(v)
});

helloWorld.start();
`}</Example>
