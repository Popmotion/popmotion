# Changelog

Animated Pose adheres to [Semantic Versioning](http://semver.org/).

## [1.2.3] 2019-01-28

### Updated

- Tightened type definitions for TransitionMapFactory [#714](https://github.com/Popmotion/popmotion/pull/714)

## [1.2.1] 2018-09-21

### Fixed

- Added defaults for scale and rotate.

## [1.2.0] 2018-09-14

### Added

- `keyframes` animation.

## [1.1.0] 2018-09-13

### Added

- Support for transition definitions.

## [1.0.0] 2018-09-12

### Upgrade

- `pose-core@2.0.0`.

## [0.3.4] 2018-06-15

### Adding

- Support for `decay` transition definition.

## [0.3.0-rc] 2018-06-15

### Adding

- Support for transition definitions and named transition maps.

## [0.2.2] 2018-05-06

- Updating type.

## [0.2.1] 2018-05-06

- Updating type.

## [0.2.0] 2018-05-06

- Updating `pose-core`
- Now invalidating `useNativeDriver` on all values in the event one of them is invalidated by interpolating to a non-accelerated value.

## [0.1.1] 2018-05-05

- Fixing negative string units.

## [0.1.0] 2018-05-05

- Passing `useNativeDriver` through to instant transition.

## [0.0.10] 2018-04-24

- Adding `useNativeDriver` to value definition.

## [0.0.9] 2018-04-24

- Ensuring values are converted on creation.

## [0.0.8] 2018-04-24

- Updating `pose-core`

## [0.0.7] 2018-04-23

- Fixing bug in value types.

## [0.0.6] 2018-04-23

- Adding `vh`, `vw`, `sh` and `sw` value types for React Native.

## [0.0.5] 2018-04-23

- `useNativeDriver` override in all transitions

## [0.0.4] 2018-04-23

- Allowing `useNativeDriver` to override default transitions

## [0.0.1] 2018-04-18

- First publish
