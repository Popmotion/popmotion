---
title: toDecimal
description: Rounds a number to a specified decimal place.
category: functions
---

# `toDecimal`

`toDecimal` will round a number to the specified decimal place.

<TOC />

## Import

```javascript
import { toDecimal } from '@popmotion/popcorn';
```

## Usage

```javascript
toDecimal(3.3333); // 3.33
toDecimal(6.6666, 1); // 6.67
```

## Types

```typescript
toDecimal(value: number, precision: number = 2): number
```
