---
title: Value Types
description: Handle special value types with collections of parsers, transformers and tests.
---

# Value Types

Popmotion actions work with simple numbers, which are sometimes composed into more complex objects with `composite`.

It provides `valueTypes` to help handle common value types, for instance `px` measurements or `hex` colours.

Each `valueType` provides three methods:
- `test`: Accepts a value and returns `true` if the provided value is of that type.
- `parse`: Accepts a value and returns that value in a usable format, either a `Number` or an `Object` of named numerical properties.
- `transform`: The reverse of parse, accepts either a number or an object and converts that into the value type.

```javascript
import { valueTypes } from 'popmotion';

const { px } = valueTypes;
px(5) === '5px' // true
```

## Included value types

- `alpha`: `Number` between `0` and `1`
- `complex`: See below
- `color`: `String` of either `hex`, `hsla` or `rgba` type
- `degrees`: `String` ending in `deg`
- `hex`: `String` beginning with `#` and followed by 3 or 6-digit hex code
- `hsla`: `String` with valid `hsla` property
- `percent`: `String` ending in `%`
- `px`: `String` ending in `px`
- `scale`: `Number` with a `default` of `1` instead of `0`
- `rgbUnit`: Integer between `1` and `255`
- `rgba`: String in `rgba(rgbUnit, rgbUnit, rgbUnit, alpha)` format

## Complex type

