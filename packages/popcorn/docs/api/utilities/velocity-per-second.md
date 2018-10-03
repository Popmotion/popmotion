---
title: velocityPerSecond
description: Converts velocity per frame into velocity per second.
category: functions
---

# `velocityPerSecond`

`velocityPerSecond` converts velocity per frame into velocity per second. It is framerate-independent.

<TOC />

## Import

```javascript
import { velocityPerSecond } from '@popmotion/popcorn';
```

## Usage

If a number changed, for instanced, by an increase of `1` in the previous frame, we can calculate its velocity per second by passing `velocityPerSecond` `1` along with the duration of the previous frame (in milliseconds):

```javascript
velocityPerSecond(1, 16.7); // 59.880...
```

## Types

```typescript
velocityPerSecond(velocityPerFrame: number, frameDuration: number): number;
```
