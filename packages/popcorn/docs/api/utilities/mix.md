---
title: mix
description: Mixes between two numbers
category: functions
---

# `mix`

`mix` can interpolate between two numbers.

<TOC />

## Import

```javascript
import { mix } from '@popmotion/popcorn';
```

## Usage

```javascript
mix(0, 100, 0.5); // 50
```

## Types

```typescript
mix(from: number, to: number, progress: number): number
```
