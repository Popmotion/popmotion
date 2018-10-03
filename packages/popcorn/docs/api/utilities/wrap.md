---
title: wrap
description: Wraps a number when it breaches the defined range.
category: functions
---

# `wrap`

Wraps a number when it breaches the defined range.

<TOC />

## Import

```javascript
import { wrap } from 'popcorn';
```

## Usage

`wrap` accepts a range, defined as a `min` and `max`.

When a third number is provided:

- If it lies within the range, it is returned.
- If it lies outside the range, it is wrapped back around:

```javascript
wrap(0, 1, 0.5); // 0.5
wrap(0, 1, 1.5); // 0.5
```

## Types

```typescript
wrap(min: number, max: number, v: number): number;
wrap(min: number, max: number) => (v: number) => number;
```
