---
title: pipe
description: Left-to-right function composition.
category: functions
---

# `pipe`

`pipe` composes a new function out of a series of provided functions.

When this new function is provided a value, it will run this value through the provided functions in left-to-right order.

This provides a way of composing logic from simpler, reusable functions.

<TOC />

## Import

```javascript
import { pipe } from '@popmotion/popcorn';
```

## Usage

```javascript
const double = v => v * 2;
const add = toAdd => v => v + toAdd;
const negative = v => -v;

const func = pipe(double, add(1), negative);

func(2); // -5
```

## Types

```typescript
pipe(...funcs: Function): Function
```
