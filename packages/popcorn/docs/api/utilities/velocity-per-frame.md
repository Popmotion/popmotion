---
title: velocityPerFrame
description: Converts velocity per second into velocity per frame.
category: functions
---

# `velocityPerFrame`

`velocityPerFrame` converts velocity per second into velocity per frame. It is framerate-independent.

<TOC />

## Import

```javascript
import { velocityPerFrame } from '@popmotion/popcorn';
```

## Usage

If a number is changing at a velocity of `50` per second, we can find its velocity per frame by passing `50` along with the duration of the previous frame (in milliseconds):

```javascript
velocityPerFrame(50, 16.7); // 0.835
```

## Types

```typescript
snap(velocityPerSecond: number, frameDuration: number): number;
```
