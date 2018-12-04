# Changelog

Pose Core adheres to [Semantic Versioning](http://semver.org/).

## [2.0.2] 2018-12-03

### Fixed

- Don't override child props with parent props. [#594](https://github.com/Popmotion/popmotion/pull/594)

## [2.0.1] 2018-09-06

### Fixed

- Ensuring any values set in `apply` props are set upon mount.

## [2.0.0] 2018-09-06

### Added

- Support for `applyAtStart` and `applyAtEnd` properties.

## [1.0.4] 2018-09-06

### Fixed

- Exposing more types.

## [1.0.3] 2018-08-26

### Fixed

- Fixing bug with `init` pose when `initialPose` was set.

## [1.0.2] 2018-08-20

### Fixed

- Fixing bug in pose unsetting priority.

## [1.0.1] 2018-08-19

### Fixed

- Updating `unset` logic.

## [1.0.0] 2018-08-19

### Added

- New pose resolution logic.

## [0.8.1] 2018-08-18

### Added

- Exporting `TransitionMap` type.

## [0.8.0] 2018-06-14

### Added

- Passing `passiveParentKey` to `createValue`.

## [0.7.4] 2018-06-08

### Fixed

- `setProps` wasn't updating `state.props`.

## [0.7.3] 2018-05-29

### Added

- Support for `default` named transition

## [0.7.0] 2018-05-28

### Added
- Tests
- Support for transition definitions. Instead of defining animations with the native library:

```javascript
transition: ({ value, ...props }) => Animated.spring(value, props)
```

This can be defined as:

```javascript
transition: { type: 'spring' }
```

### Removed
- Removed support for `transitionProps` and `setTransitionProps`.

## [0.6.2] 2018-05-17

### Upgrade

- `hey-listen@1.0.5`

## [0.6.1] 2018-05-17

### Fixed

- Adding `module` path.

## [0.6.0] 2018-05-17

### Changed

- Moving to Rollup for bundling.

## [0.5.2] 2018-05-10

### Fixed

- Creating default `ancestorValues` if none exists.

## [0.5.1] 2018-05-10

### Fixed

- Reversing logic for throwing `transitionProps` warning.

## [0.5.0] 2018-05-09

### Added

- New `readValueFromSource` config option. Function that can read from the source target when no default pose is defined.

## [0.4.1] 2018-05-09

### Changed

- Moving error messages to `hey-listen`.

## [0.4.0@rc] 2018-05-07

- Adding `convertValue` method. Allows users to define values like Popmotion's `value` or React Animated's `Animated.Value` and for the Pose flavour to upgrade that to a format it uses internally (for example with additional metadata)
- Adding support for popmotion-pose `setTransformProps` and `transformProps`, adding deprecation warnings.
- Adding `invariant` error message for when a pose is detected that isn't an object.

## [0.3.0] 2018-05-06

- Passing `props` through to `createValue` to allow it be mutated for special cases.

## [0.2.0] 2018-05-05

- Passing through all transition props to `getInstantTransition`

## [0.1.7] 2018-04-24

- Adding `key` to `createValue`.

## [0.1.6] 2018-04-24

- Adding `setProps`.

## [0.1.5] 2018-04-23

- Making config types optional.

## [0.1.4] 2018-04-22

- `scale` values default to `1`.

## [0.1.3] 2018-04-22

- Fixing `delay`

## [0.1.2] 2018-04-22

- Adding `initialPose` to `addChild`.

## [0.1.1] 2018-04-22

- Adding lifecycle method for preTransition

## [0.0.1] 2018-04-18

- First publish
