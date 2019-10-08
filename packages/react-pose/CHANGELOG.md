# Changelog

Pose for React adheres to [Semantic Versioning](http://semver.org/).

## [4.0.9] 2019-10-08

### Updated

- Adding deprecation notice to README.md.

## [4.0.8] 2018-03-05

### Fixed

- [#746](https://github.com/Popmotion/popmotion/pull/746)

## [4.0.7] 2018-02-12

### Fixed

- Allowing user to override `dragEnd` [#730](https://github.com/Popmotion/popmotion/issues/730)

## [4.0.6] 2018-01-08

### Fixed

- Return ComponentType<PoseElementProps & T> from Component factory [#688](https://github.com/Popmotion/popmotion/issues/688)

## [4.0.5] 2018-01-08

### Fixed

- Animating all other children when items are moving. [#682](https://github.com/Popmotion/popmotion/issues/682)

## [4.0.4] 2018-12-06

### Fixed

- Removing old files from `lib`. [#662](https://github.com/Popmotion/popmotion/issues/662)

## [4.0.3] 2018-12-03

### Fixed

- Fixed issue with propagating children. [#657](https://github.com/Popmotion/popmotion/pull/657)

### Changed

- Upgraded `@emotion/is-prop-valid` 

## [4.0.2] 2018-11-16

### Fixed

- Fixed issue with `getDerivedStateFromProps` [#629](https://github.com/Popmotion/popmotion/pull/629)

## [4.0.1] 2018-11-06

### Fixed

- Removed errant `console.log`. [#611](https://github.com/Popmotion/popmotion/pull/611)

## [4.0.0] 2018-11-05

### Removed

- Removed support for `hostRef` and `innerRef` properties.

### Fixed

- Fixed some Typescript errors. [#610](https://github.com/Popmotion/popmotion/issues/610)

## [3.4.0] 2018-11-01

### Upgraded

- `popmotion-pose@3.4.0`

## [3.3.8] 2018-11-01

### Fixed

- Keeping context private to local file.
- Fixing `forwardRef` support.
- Moving from `UNSAFE_componentWillUpdate` to `getSnapshotBeforeUpdate` [#579](https://github.com/Popmotion/popmotion/pull/579)
- Fixing `hasChanged` check for array poses. [#575](https://github.com/Popmotion/popmotion/pull/575/)
- Stop reusing stale children [#604](https://github.com/Popmotion/popmotion/pull/604)

## [3.3.7] 2018-10-19

### Fixed

- Fixing caching bug with dynamically generated pose configs.

## [3.3.6] 2018-09-28

### Fixed

- Type error.

## [3.3.5] 2018-09-28

### Fixed

- Ensure children of `Transition` receive latest props. [#494](https://github.com/Popmotion/popmotion/issues/494)

## [3.3.4] 2018-09-21

### Added

- `onRest` to `PoseGroup`/`Transition` [#502](https://github.com/Popmotion/popmotion/issues/502)
  
### Fixed

- Batching rerenders for leaving children to prevent animation stuttering. [#363](https://github.com/Popmotion/popmotion/issues/363)

## [3.3.3] 2018-09-17

### Fixed

- Filtering props from children that may have previously been set by `PoseGroup` itself.

## [3.3.2] 2018-09-17

### Fixed

- Overriding `Transition` props with child props.

## [3.3.1] 2018-09-17

### Added

- `Transition` now forwards children to props.

## [3.3.0] 2018-09-06

### Added

- Support for `applyAtStart` and `applyAtEnd` properties.

## [3.2.2] 2018-09-03

### Fixed

- Forcing update to `popmotion-pose`.

## [3.2.1] 2018-08-30

### Fixed

- Detecting `mouseup` outside window and stopping dragging/pressing accordingly.

## [3.2.0] 2018-08-30

### Added

- `onPressStart`/`onPressEnd` callbacks.

## [3.1.1] 2018-08-30

### Added

- Adding ability to initialise posed component config as a function that receives the first props. [#451](https://github.com/Popmotion/popmotion/issues/451)

## [3.1.0] 2018-08-28

### Added

- Animate Between Anything. Animate x/y/width/height/top/left/bottom/right between any two value types, even `calc` and `'auto'`!

## [3.0.2] 2018-08-20

### Fixed

- Filtering invalid DOM props. [#431](https://github.com/Popmotion/popmotion/pull/431)

## [3.0.1] 2018-08-20

### Fixed

- Fixed `ComponentFactory` type. [#434](https://github.com/Popmotion/popmotion/pull/434)

## [3.0.0] 2018-08-19

### Added

- `popmotion-pose@3.0.0`

## [2.3.0] 2018-08-18

### Added

- `hoverable` from `popmotion-pose@2.2.0`

## [2.2.3] 2018-08-16

### Fixed

- Correctly comparing previous `poseKey` when posed component updates [#424](https://github.com/Popmotion/popmotion/pull/424).

## [2.2.1] 2018-08-14

### Upgraded

- `popmotion-pose@2.1.2`

## [2.2.0] 2018-07-14

### Upgraded

- `popmotion-pose@2.1.0`

## [2.1.3] 2018-06-14

### Upgraded

- `popmotion-pose@2.0.4`

## [2.1.2] 2018-06-08

### Upgraded

- `popmotion-pose@2.0.3`

## [2.1.1] 2018-06-06

### Fixed

- Fixing TypeScript's automatic import (which used an absolute path).
- Updating `react` definitions.

## [2.1.0] 2018-06-06

### Added

- `poseKey` prop. If this property is changed, it will force an enter into the pose(s) defined in `pose`.

### Fixed

- Adding a shallow equivalency check for `pose` arrays. Now, if `pose` is an array, `['a'] === ['a']`.

## [2.0.0] 2018-06-01

### Changed

- Move `popmotion` from `dependencies` to `peerDependencies`.

### Upgraded

- `popmotion-pose` to `2.0.0`

### Removed

- Babel plugin process wouldn't quit, so removed.

## [1.7.0] 2018-05-19

### Added

- Rollup for smaller build sizes.

## [1.6.4] 2018-05-10

### Added

- Shamefully swapped `Proxy` for explicit list of DOM elements. This is because `Proxy` breaks client-rendered sites for googlebot.

## [1.6.3] 2018-05-10

### Added

- Removing an errant console.log. Who needs linting?

## [1.6.2] 2018-05-10

### Added

- IE11 support. Use posed.div, button, a, li or span.

## [1.6.1] 2018-05-10

### Fixed

- Now merging `enter`/`exit` poses with user-set poses when posed components are used within a `PoseGroup`

### Added

- New warning if user isn't passing `hostRef` to underlying DOM element.

## [1.6.0] 2018-05-10

### Updated

- `popmotion-pose@1.4.2`
- Adding error messages.

## [1.5.3] 2018-05-04

### Fixed

- TS errors with PoseElementProps

## [1.5.2] 2018-04-13

### Fixed

- Checking `ref` for `instanceof Element` before setting in case `innerRef` has been passed to a component.

## [1.5.1] 2018-04-12

### Added

- `onDragStart`/`onDragEnd` callbacks to posed components.

## [1.5.0] 2018-04-12

### Added

- `posed(Component)` via [Jess Telford](https://twitter.com/jesstelford)
- React < 16.3 compatibility

## [1.4.0] 2018-04-11

### Added

- Labels (Pose 1.3.0)

## [1.3.0] 2018-04-10

### Added

- `beforeChildren` and `afterChildren` props (Pose 1.2.0)

## [1.2.0] 2018-04-09

### Added

- Dynamic pose props (Pose 1.1.0)

## [1.1.4] 2018-04-08

### Fixed

- Fixing botched React version mismatch in global file.

## [1.1.3] 2018-04-08

### Fixed

- [#285](https://github.com/Popmotion/popmotion/issues/285) PoseGroup child `enter` poses now animate correctly.

## [1.1.2] 2018-04-03

### Deprecated

- Deprecating `onChange` in favour of `onValueChange`. `onChange` will be removed in version 2.0.0. This is because React elements already use the `onChange` prop.

## [1.1.1] 2018-04-02

### Changed

- Using React `16.3.0` final release.

## [1.1.0] 2018-04-02

### Added

- Support for conditional rendering within `PoseGroup` (@efimweb)

## [1.0.2] 2018-03-29

### Fix

- Fixing types for `posed`

## [1.0.1] 2018-03-28

### Update

- Latest version of Pose

## [1.0.0] 2018-03-28

### Update

- Converting `PoseElement` from deprecated lifecycle method to `UNSAFE_componentWillUpdate`
- Fixing `posed` typescript def

## [0.1.7] 2018-03-25

### Update

- Updating Pose

## [0.1.6] 2018-03-25

### Update

- Updating Pose

## [0.1.5] 2018-03-25

### Update

- Updating Pose

## [0.1.4] 2018-03-24

### Update

- Exporting `popmotion` when using script import.

## [0.1.2] 2018-03-21

### Update

- Pose updated to 1.0.10

## [0.1.1] 2018-03-21

### Update

- Pose updated to 1.0.9

## [0.1.0] 2018-03-21

### Update

- RC

## [0.0.1] 2018-03-07

### Update

- Initial release