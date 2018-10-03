---
title: dilate
description: Dilates the progression between two values.
category: functions
---

# `dilate`

`dilate` is used to dilate the progression between two values.

<TOC />

## Import

```javascript
import { dilate } from '@popmotion/popcorn';
```

## Usage

```javascript
dilate(100, 200, 0.5); // 150
dilate(100, 200, 1); // 200
dilate(100, 200, 2); // 300
```

## Types

```typescript
dilate(prev: number, next: number, dilation: number): number;
```
