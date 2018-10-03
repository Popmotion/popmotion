---
title: progress
description: Calculates the progress of a value between in a given range.
category: functions
---

# `progress`

`progress` returns the progress of a value in a given range.

Progress is represented as a number between `0` and `1`, but is unclamped.

<TOC />

## Import

```javascript
import { progress } from 'popcorn';
```

## Usage

```javascript
progress(100, -100, 50); // 0.25
progress(100, -100, -300); // 2
```

## Types

```typescript
progress(from: number, to: number, value: number): number
```
