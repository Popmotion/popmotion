# Pose Core

## Factory for Pose animation state machines

[![npm version](https://img.shields.io/npm/v/pose-core.svg?style=flat-square)](https://www.npmjs.com/package/pose-core)
[![npm downloads](https://img.shields.io/npm/dm/pose-core.svg?style=flat-square)](https://www.npmjs.com/package/pose-core)
[![Twitter Follow](https://img.shields.io/twitter/follow/popmotionjs.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

## Install

```
npm install pose-core --save
```

## Create a poser factory

### JavaScript

```javascript
import poseFactory from 'pose-core';

const pose = poseFactory(config);
```

### TypeScript

```typescript
const pose = poseFactory<Value, Action, Poser>(config);
```

## Config options

All config options are mandatory.

### `getDefaultProps`

Returns default properties to be injected into every poser's `config.props` property.

```typescript
(config: PoserConfig) => { [key: string]: any }
```

### `readValue`

Read and return from `Value`.

```typescript
(value: Value) => any;
```

### `createValue`

Create a new `Value`. Each `Value` is responsible for tracking a single value defined in the poser's poses.

```typescript
type CreateValueProps = {
  passiveParent?: Value,
  passiveProps?: any // Passed as the second value in the `passive` tuple
}

(init: any, props?: CreateValueProps) => Value
```

### `resolveTarget`

Accepts the target as defined in the pose, and returns an animatable version of it. For instance React Animated only animates raw numbers, so it runs every `target` through `parseFloat`.

```typescript
(value: Value, target: any) => any
```

### `getTransitionProps`

Takes the `target` as returned from `resolveTarget` and returns default props to be passed to the entered pose's `transition` function. 

```typescript
(value: Value, target: any) => { [key: string]: any }
```

### `bindOnChange`

Bind the `onChange` callbacks to their respective `Value`s. 

```typescript
type OnChangeMap = { [key: string]: (v: any) => void };
type ValuesMap = Map<string, Value>;

(values: Map<string, Value>, onChange: OnChangeMap) => (key: string) => void;
```

### `startAction`

Takes an action (ie animation or interaction) and returns the subscription returned from its `start` (or equivalent) method. This subscription might be the same as the action (in the case of Animated) or different (in the case of Popmotion)

```typescript
(action: Action, onComplete: Function) => ActionSubscription
```

### `stopAction`

Takes an action subscription and stops it.

```typescript
(actionSubscription: ActionSubscription) => void
```

### `getInstantTransition`

Returns an `Action` that represents an instant transition. We do this rather than simply set on the corresponding `Value` because both Animated and Popmotion allow these "instant" actions to be composed with things like a delay action.

```typescript
(value: Value, to: number) => Action
```

### `addActionDelay`

Returns an action that delays the execution of the initially provided action.

```typescript
(delay: number, action: Action) => Action
```

### `defaultTransitions`

A `Map` that contains Action factory functions that match the signature of the pose's `transition` property.

The `Map` must contain **at least** a `'default'` action factory.

```typescript
Map<string, (props: Props) => Action>
```

### `selectValueToRead`

Accepts `Value` and returns the value returned by `poser.get(key: string)`

```typescript
(value: Value) => any
```

### `extendAPI`

A chance to add methods to the output `Poser`. For instance the Popmotion Pose factory uses this to append DOM-specific FLIP methods. Simply return `api` for no change.

```typescript
(api: Poser) => Poser
```
