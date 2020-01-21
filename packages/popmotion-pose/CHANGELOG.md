# Changelog

Popmotion Pose adheres to [Semantic Versioning](http://semver.org/).

## [3.4.11] 2019-11-15

### Fixed

- Fixed type definition output.

## [3.4.9] 2019-11-14

### Fixed

- Fixed in Typescript 3.7.

## [3.4.8] 2019-04-24

### Fixed

- Fatal error in Chrome < 36 as a result of undefined `transform` [#775](https://github.com/Popmotion/popmotion/pull/775)

## [3.4.7] 2019-04-09

### Fixed

- Unset event end pose when setting event start pose [#762](https://github.com/Popmotion/popmotion/pull/762)

## [3.4.6] 2019-01-02

### Fixed

- Fixed drag and applyOnEnd conflict [#708](https://github.com/Popmotion/popmotion/pull/708)

## [3.4.5] 2019-01-02

### Fixed

- Prevent window scroll on drag [#706](https://github.com/Popmotion/popmotion/pull/706)

## [3.4.4] 2019-01-02

### Fixed

- Fixed `applyOnStart` [#703](https://github.com/Popmotion/popmotion/pull/703)

## [3.4.3] 2019-01-28

### Updated

- Tightened type definitions for TransitionMapFactory [#714](https://github.com/Popmotion/popmotion/pull/714)

## [3.4.2] 2019-01-23

### Fixed

- Fix drag bounds with negative values [#701](https://github.com/Popmotion/popmotion/pull/701)

## [3.4.1] 2018-12-17

### Fixed

- Allow click within draggable. [#541](https://github.com/Popmotion/popmotion/issues/541)

## [3.4.0] 2018-11-01

### Fixed

- Prevent mutation of `applyOnEnd`. [#571](https://github.com/Popmotion/popmotion/pull/571)
- Upgrading `popmotion@8.5.0`.

## [3.3.2] 2018-10-19

### Fixed

- Ensuring `applyAtEnd` is correctly set if we're animating an element **and** it's defined in `applyAtEnd`.

## [3.3.1] 2018-09-21

### Updated

- `popmotion@8.4.0`

## [3.3.0] 2018-09-06

### Added

- Support for `applyAtStart` and `applyAtEnd` properties.

## [3.2.7] 2018-09-06

### Fixed

- Fixed `position` never being resolved [#470](https://github.com/Popmotion/popmotion/pull/470)
- Fixed `passive` values `.get()` returning the value they were linked to, not the value itself.

## [3.2.6] 2018-09-06

### Fixed

- Exposing more types.

## [3.2.5] 2018-08-05

### Fixed

- Added `position` support for FLIP transforms.

## [3.2.4] 2018-09-03

### Fixed

- Dynamically set positional props. Thanks to [Klaasman](https://github.com/klaasman)

## [3.2.3] 2018-09-01

### Fixed

- Flash of content in Safari. [#459](https://github.com/Popmotion/popmotion/issues/459)

## [3.2.2] 2018-08-30

### Fixed

- Fixing `dragBounds` and `draggable` types. [#396](https://github.com/Popmotion/popmotion/issues/396)

## [3.2.1] 2018-08-30

### Fixed

- Detecting `mouseup` outside window and stopping dragging/pressing accordingly.

## [3.2.0] 2018-08-30

### Added

- `onPressStart`/`onPressEnd` callbacks.

## [3.1.0] 2018-08-28

### Added

- Animate Between Anything. Animate x/y/width/height/top/left/bottom/right between any two value types, even `calc` and `'auto'`!

## [3.0.1] 2018-08-20

### Fixed

- Restricting `preventDefault` only to drag events. 

## [3.0.0] 2018-08-19

### Added

- Pointer events: `drag`, `press`, `hover`, `focus`.
- Support for `init` pose.

### Changed

- Changing `dragging` for `drag`

## [2.2.0] 2018-08-18

### Added

- `hoverable` config option.

## [2.1.2] 2018-08-13

### Fixed

- Added missing `linear` easing.
- Fixed `keyframes` animation type.

## [2.1.1] 2018-07-27

### Fixed

- Bug where `dragBounds` were defined but no corresponding pose with an initial value for that `x`/`y` value was defined. `x`/`y` is now created with the same value type as its defined boundaries.

## [2.1.0] 2018-07-01

### Added

- `popmotion@8.3.0` supports complex value types.

## [2.0.6] 2018-06-15

### Fixed

- Removing `Map`, as its initialiser doesn't play nice with IE11.

## [2.0.5] 2018-06-14

### Fixed

- `transition.delay` now working.

## [2.0.4] 2018-06-14

### Fixed

- Forcing `popmotion@8.2.5`.

## [2.0.3] 2018-06-08

### Fixed

- Fixing local `popmotion` resolution.

## [2.0.2] 2018-06-08

### Upgrade

- `popmotion@8.2.4`
- `pose-core@0.7.4`

## [2.0.1] 2018-05-29

### Changed

Moved `popmotion` to `dependencies`.

## [2.0.0] 2018-05-29

### Added

- `flip: true` required to opt-in to FLIP animations.
- Fully serialised definitions for custom transitions.

### Changed

- Move `popmotion` from `dependencies` to `peerDependencies`.

## [1.5.0] 2018-05-10

### Updated

- Moving to Rollup for distribution.

## [1.4.4] 2018-05-10

### Updated

- `pose-core@1.5.2`

## [1.4.3] 2018-05-10

### Fixed

- Stricter check during dragging for `percent` type.

## [1.4.2] 2018-05-09

### Fixed

- Fixing some types.

## [1.4.1] 2018-05-09

### Fixed

- Fixing some types.

## [1.4.0] 2018-05-09

### Changed

- Migration to `pose-core`

### Deprecated

- `transformProps` -> `props`
- `setTransitionProps` -> `setProps`

### Fixed

- Positional props on poses (like `width`/`top`) can now be set as functions.

## [1.2.0] 2018-04-10

### Added

- `beforeChildren` and `afterChildren` pose props.

## [1.1.0] 2018-04-08

### Added

- Pose props can now be set as functions. These functions will be used to resolve a value's `to` when a pose is entered.
- `setTransitionProps` introduced to update `transitionProps` on a poser. These will be passed through to `transition` functions.

## [1.0.25] 2018-04-02

### Fixed

- Fixing stagger delay calculation when `staggerDirection` is `-1` (@efimweb)

## [1.0.24] 2018-03-28

### Update

- Libralised `PoserProps` type.

## [1.0.23] 2018-03-28

### Fixed

- Fixed flipped-axis FLIP measurements

## [1.0.22] 2018-03-28

### Fixed

- Fixed bug with FLIP `render` happening too late.

## [1.0.21] 2018-03-28

### Fixed

- Improvement to FLIP algo that measures offset from the center of each bounding box.

## [1.0.20] 2018-03-26

### Fixed

- Now parsing numerical values from Stylefire from string to number.

## [1.0.19] 2018-03-26

### Fixed

- Fixed type error where the `poser.flip` callback was set to mandatory

## [1.0.18] 2018-03-25

### Fixed

- There's a bug in Stylefire where Firefox doesn't respect `originX` or `originY` as separate values. For now we're setting `transformOrigin` as a unified value instead.

## [1.0.17] 2018-03-25

### Fixed

- If `x` or `y` were only defined in dragBounds, they couldn't previously be set as percentages.

## [1.0.16] 2018-03-25

### Added

- Default animation for `scale` props increases damping if `to: 0`.

## [1.0.15] 2018-03-25

### Added

- Default animation for `opacity` is now a tween with linear easing
- Default animation for `rotate` props is now underdamped `spring`

## [1.0.14] 2018-03-23

### Fixed

- Bad merge

## [1.0.13] 2018-03-23

### Added

- `dragBounds` can be provided as percentages.
- Dragging now still works if `x` or `y` have been defined as percentages.

## [1.0.12] 2018-03-22

### Fixed

- Updating `getPoses` to strip new properties.

## [1.0.11] 2018-03-22

### Added

- `values` property to allow external creation and ownership of values.

## [1.0.10] 2018-03-21

### Fixed

- Fixed bug where if only defined pose had values set to `true`, it set that as the initial value. Instead we're setting `dragEnd` and `dragging` to `0`.
- `measure` now returns element dimensions.

## [1.0.9] 2018-03-21

### Fixed

- Merging user and internal drag poses.

## [1.0.8] 2018-03-20

### Added

- Temporarily remove transform before measuring final FLIP position in the event that we're mid-flip.
- Added array type to `initialPose`

## [1.0.7] 2018-03-19

### Added

- Positional FLIP

## [1.0.6] 2018-03-19

### Added

- `initialPose` can now be set as an array of multiple poses.

## [1.0.5] 2018-03-19

### Fixed

- FLIP bug fixes.

## [1.0.4] 2018-03-19

### Fixed

- Bug fixes.

## [1.0.3] 2018-03-18

### Update

- Fixing imports.

## [1.0.2] 2018-03-18

### Update

- Exporting `Poser` type.

## [1.0.1] 2018-03-18

### Update

- Exporting `PoserProps` type.

## [1.0.0] 2018-03-18

### Changed

- Finalised API.

## [0.2.3] 2018-03-14

### Changed

- Rewritten in TypeScript.

## [0.2.2] 2018-03-13

### Changed

- Adjusted the default animations.

## [0.2.1] 2018-03-13

### Added

- Ability to pass through custom props to `poser.set(pose, props)`. These will be passed through to the `transition` method of that pose.

### Fixed

- `passive` linking fixed in same-poser.

## [0.2.1] 2018-03-12

### Added

- `onChange` map now available to add onChange events.

## [0.2.0] 2018-03-12

### Changed

- `addChild` now creates and returns the new `Poser`.

## [0.1.1] 2018-03-12

### Added

- `staggerDirection` property.

## [0.1.0] 2018-03-11

### Added

- `onDragStart`, `onDragEnd`, `dragBounds` properties.

## [0.0.16] 2018-03-10

### Removed

- Removed `spawnChild` method.

## [0.0.15] 2018-03-10

### Added

- Undocumented `spawnChild` method.

## [0.0.14] 2018-03-09

### Fixed

- Replacing falsy check for initial value.

## [0.0.13] 2018-03-09

### Fixed

- Checking if `type` exists before running `parse`.

## [0.0.12] 2018-03-09

### Fixed

- Checking if value exists on initialPose before initializing with it.

## [0.0.11] 2018-03-09

### Fixed

- Fixing special value types on `initialPose`.

## [0.0.10] 2018-03-06

### Fixed

- Fix to second `update`.

## [0.0.9] 2018-03-06

### Fixed

- New FLIP properties are now `update`d twice to reset velocity to `0`.

## [0.0.8] 2018-03-06

### Added

- SVG support
- Updated `popmotion` to `8.1.16`

## [0.0.7] 2018-03-05

### Fixes

- Fixing `delay` property

### Updates

- Adding Changelog