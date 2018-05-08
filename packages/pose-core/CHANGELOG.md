# Changelog

Pose Core adheres to [Semantic Versioning](http://semver.org/).

## [0.4.0] 2018-05-07

- Adding `convertValue` method. Allows users to define values like Popmotion's `value` or React Animated's `Animated.Value` and for the Pose flavour to upgrade that to a format it uses internally (for example with additional metadata)

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
