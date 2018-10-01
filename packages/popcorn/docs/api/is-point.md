---
title: isPoint
description: Test a value for an `x` and `y` property.
category: functions
---

# `isPoint`

Returns `true` if the provided value has an `x` and `y` property.

<TOC />

## Import

```javascript
import { isPoint } from 'popcorn';
```

## Usage

```javascript
isPoint(0); // false
isPoint({ x: 0, y: 0 }); // true
```

## Types

```typescript
isPoint(v: any): boolean;
```
