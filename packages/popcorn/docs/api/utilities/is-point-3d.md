---
title: isPoint3D
description: Test a value for x, y and z properties.
category: functions
---

# `isPoint3D`

Returns `true` if the provided value has an `x`, `y` and `z` properties.

<TOC />

## Import

```javascript
import { isPoint3D } from 'popcorn';
```

## Usage

```javascript
isPoint3D(0); // false
isPoint3D({ x: 0, y: 0 }); // false
isPoint3D({ x: 0, y: 0, z: 0 }); // true
```

## Types

```typescript
isPoint3D(v: any): boolean;
```
