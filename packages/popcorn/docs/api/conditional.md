---
title: conditional
description: Creates a function that conditionally transforms provided values.
category: functions
---

# `conditional`

`conditional` is used to create a function that will conditionally transform incoming values.

<TOC />

## Import

```javascript
import { conditional } from 'popcorn';
```

## Usage

`conditional` is provided a `check` and `transform` function, and returns a new function.

This function, when provided a value, will provide it to `check`.

If `check` returns `true`, it will return the value as transformed by `transform`. If `false`, it will return the value.

```javascript
const conditionallyDouble = conditional(
  v => v > 5,
  v => v * 2
);

conditionallyDouble(4); // 4
conditionallyDouble(6); // 12
```

## Types

```typescript
type Check = (v: any) => boolean;
type Apply = (v: any) => any;

conditional(check: Check, transform: Apply) => (v: any) => any;
```
