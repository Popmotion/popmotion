# Changelog

Popmotion adheres to [Semantic Versioning](http://semver.org/).

## [9.2.1] 2020-02-22

### Update

-   Upgrading to `style-value-types@4.0.3`.

## [9.2.0] 2020-02-22

### Update

-   Upgrading to `framesync@5.1.0` for better Node compatibility.

## [9.1.0] 2020-01-08

### Update

-   Support for hex alpha in `mixColor`.

## [9.0.2] 2020-12-18

### Update

-   Dependency updates.

## [9.0.1] 2020-12-01

### Fixed

-   If `offsets` is a different length to `values`, rather than throw an error we now just generate default offsets.

## [9.0.0] 2020-10-24

-   Full API revamp, see documentation.

## [8.7.5] 2020-09-03

### Fixed

-   Refreshing published bundle.

## [8.7.2] 2020-04-28

### Fixed

-   Decay and inertia correctly start motion at from prop when using modifyTarget
-   Decay and inertia no longer round target calculation
-   Inertia calls modifyTarget even with zero-velocity

### Changed

-   Inertia implementation refinements

## [8.7.1] 2019-11-14

### Upgrade

-   Upgraded to Typescript 3.7.

## [8.7.0] 2019-06-25

### Added

-   `repeatDelay` prop to `tween`.

## [8.6.10] 2019-05-09

### Fixed

-   Fixing undefined action creator. (https://github.com/Popmotion/popmotion/issues/794)[#794]

## [8.6.9] 2019-05-01

### Update

-   Dependencies.

## [8.6.8] 2019-04-01

### Update

-   `@popmotion/popcorn@0.3.6`

## [8.6.7] 2019-04-01

### Fixed

-   Making `inertia.complete` call conditional on there not being a subsequent animation. (https://github.com/Popmotion/popmotion/pull/763)[#763]

## [8.6.6] 2019-04-01

### Update

-   `@popmotion/popcorn@0.3.5`

## [8.6.5] 2019-04-01

### Update

-   Changing the behaviour of `inertia` to always spring back if the initial value is out of bounds. On multi-axis `inertia` animations it used to be possible that both values are out of bounds and only one was travelling towards its bound - this led to a situation where one animation used a spring and the other used decay.

## [8.6.4] 2019-03-12

### Upgrade

-   Upgrading `style-value-types@3.1.0`.

## [8.6.3] 2019-02-21

### Fixed

-   Correctly integrating remainder of `elapsed` in yoyo tweens to ensure multiple concurrent tweens stay in sync.

## [8.6.2] 2019-01-28

### Updated

-   Tightened type definitions for TransitionMapFactory [#714](https://github.com/Popmotion/popmotion/pull/714)

## [8.6.1] 2019-01-23

### Added

-   Adding `bounceStiffness`, `bounceDamping`, `restDelta`, `timeConstant` and `power` options to `inertia`.

## [8.6.0] 2019-01-16

### Added

-   `inertia` animation.

## [8.5.5] 2018-12-28

### Update

-   `stylefire@8.3.4`

## [8.5.4] 2018-12-10

### Fixed

-   When a subscriber is added, only that subscriber is fired with the latest value.

## [8.5.3] 2018-11-20

### Fixed

-   Ensuring `.stop()` is part of `ColdSubscription` definition.

## [8.5.2] 2018-11-16

### Upgrade

-   Moving to `popcorn@0.2.0`

## [8.5.0] 2018-11-01

### Fixed

-   Enforcing minor upgrade to Popcorn.

## [8.4.2] 2018-11-01

### Fixed

-   Migrating functions to Popcorn.

## [8.4.1] 2018-09-29

### Fixed

-   Calling `transform.steps()` should round properly to each step. [#528](https://github.com/Popmotion/popmotion/issues/528)

## [8.4.0] 2018-09-21

### Updated

-   Moved to `framesync@4.0.0`

## [8.3.8] 2018-08-30

### Fixed

-   Calling `tween.resume()` would speed the tween up by firing multiple timers. [#395](https://github.com/Popmotion/popmotion/issues/395)

## [8.3.7] 2018-08-30

### Fixed

-   Updating latest style-value-types and stylefire

## [8.3.6] 2018-08-21

### Fixed

-   Fixed `postinstall` script by removing Chalk.

## [8.3.4] 2018-08-20

### Fixed

-   Forcing `multitouch` to use `passive: true`.

## [8.3.2] 2018-06-27

### Fixed

-   Forced fix from `style-value-types@3.0.3`

## [8.3.2] 2018-06-27

### Fixed

-   Updated color regex in `style-value-types`

## [8.3.1] 2018-06-27

### Fixed

-   Fixing some TypeScript definition incompatibilities with newer versions of TS.

## [8.3.0] 2018-06-20

### Added

-   Support for animating value types:
    -   `px`
    -   `deg`
    -   `%`
    -   `vw`
    -   `vh`
    -   Complex types including:
        -   SVG paths
        -   CSS gradients
        -   CSS shadows

## [8.2.5] 2018-06-13

### Fixed

-   Removing `import`s from output declaration files.

## [8.2.4] 2018-06-08

### Added

-   Exporting popular types from index.ts.

## [8.2.3] 2018-05-28

### Fixed

-   Renaming `popmotion.min.js` back to `popmotion.global.min.js`

## [8.2.1] 2018-05-17

### Fixed

-   Removing `process.env.NODE_ENV` from bundled hey-listen

## [8.2.0] 2018-05-17

### Changed

-   Added Rollup to build process. Now just 11.1kb.

### Deprecated

-   `css` and `svg` functions from `stylefire`. Use `styler` instead.

## [8.1.23] 2018-05-10

### Fixed

-   If an action stops more than once, `parallel` doesn't increase the stop counter.

## [8.1.22] 2018-03-23

### Fixed

-   Making `easing` type optional in `interpolate`.

## [8.1.21] 2018-03-13

### Updated

-   Updating `stylefire`.

## [8.1.20] 2018-03-13

### Updated

-   Updating `stylefire`.

## [8.1.19] 2018-03-13

### Updated

-   Updating `stylefire`.

## [8.1.18] 2018-03-13

### Updated

-   Changed `Update` type definition to `Function`.

## [8.1.17] 2018-03-09

### Updated

-   Stylefire updated to `1.2.6`

## [8.1.16] 2018-03-06

### Fixed

-   `value` now fires a velocity check at the end of the following frame to set velocity to `0` if it hasn't been updated.

## [8.1.15] 2018-03-06

### Updated

-   Stylefire updated to `1.2.5`

## [8.1.14] 2018-03-04

### Updated

-   Stylefire updated to `1.2.4`

## [8.1.13] 2018-03-04

### Updated

-   Stylefire updated to `1.2.3`

## [8.1.12] 2018-03-04

### Update

-   Running `parseFloat` on string values when returning velocity.
-   Stylefire and Style Value Types upgrade

## [8.1.11] 2018-02-19

### Update

-   `interpolate` roughly 200x faster when interpolating between just two numbers.

## [8.1.10] 2018-02-04

### Fixed

-   Stylefire update.

## [8.1.9] 2018-01-22

### Fixed

-   Fix removeEventListener in Chrome 46 [#248](https://github.com/Popmotion/popmotion/pull/248)

## [8.1.8] 2018-01-15

### Fixed

-   Fixing TS errors for `stop`

## [8.1.7] 2018-01-04

### Changed

-   Updating Framesync to improve performance at 30fps.

## [8.1.6] 2018-01-03

### Fixed

-   Fix build.

## [8.1.5] 2018-01-03

### Fixed

-   Upgrading Stylefire.
-   Corrected types on `tween`.

## [8.1.4] 2017-12-22

### Added

-   `generateStaticSpring` transformer.

## [8.1.3] 2017-12-18

### Added

-   `conditional` transformer.

## [8.1.2] 2017-12-12

### Changed

-   Removed `esnext` and `module` settings from package.json, added `src` to exclude.

## [8.1.1] 2017-12-12

### Changed

-   Adding README.md to package.

## [8.1.0] 2017-12-12

### Release!

## [8.0.37@beta] 2017-12-11

### Changed

-   `everyFrame` now outputs the `timeSinceStart` rather than the current framestamp (which can be taken from `framesync`).

### Fixed

-   Actions that use internal `everyFrame` actions now stop the timer when complete.

## [8.0.35@beta] 2017-12-09

### Added

-   The API matching of `parallel` and `composite` can now accept arguments with the same shape. For instance:

```javascript
composite({
    x: physics(),
    y: physics(),
}).setSpringStrength({ x: 100, y: 50 })
```

## [8.0.34@beta] 2017-12-05

### Changed

-   `keyframes` prop `ease` is now `easings`. `ease` applies easing to the overall tween.

## [8.0.33@beta] 2017-12-04

### Added

-   `timeline` animation.

### Changed

-   `stagger` now outputs array.

## [8.0.32@beta] 2017-11-28

### Added

-   New `schedule` compositor.

### Changed

-   `transformChildValues` is now `transformMap`, and finally docced.

## [8.0.31@beta] 2017-11-27

### Fixed

-   Stopped new instances of actions mutating shared vars.

## [8.0.30@beta] 2017-11-24

### Fixed

-   Published with wrong version of Stylefire.

## [8.0.29@beta] 2017-11-24

### Fixed

-   Ensuring `everyFrame` stops when it's bloody well told to.

## [8.0.28@beta] 2017-11-22

### Changed

-   Upgrading Stylefire

## [8.0.27@beta] 2017-11-16

### Fixed

-   `delay` waits appropriate number of time before `complete`.

## [8.0.26@beta] 2017-11-16

### Fixed

-   Fixing `scale` delta equation and firing `preventDefault` on multitouch events.

## [8.0.25@beta] 2017-11-16

### Fixed

-   Providing `multitouch` `scale` and `rotate` props outputs the delta as applied to those values.

## [8.0.24@beta] 2017-11-16

### Added

-   `keyframes` `ease` property can now be a single function.
-   `multitouch` accepts initial `scale` and `rotate` properties.
-   `filter` chainable to actions and reactions.

### Changed

-   `touch` becomes `multitouch`.
-   `reaction` becomes `multicast`.
-   `onFrame` becomes `everyFrame`.

## [8.0.22@beta] 2017-11-16

### Fixed

-   Fixed `tween` flip.

## [8.0.21@beta] 2017-11-16

### Added

-   `scale` and `rotate` properties to `touch`.
-   `listen` action.

## [8.0.20@beta] 2017-11-14

### Fixed

-   Fixed `isActive` bug with observable. Should look at removing this in favor of Reaction.

## [8.0.19@beta] 2017-11-14

## [8.0.18@beta] 2017-11-14

### Changed

-   Changed `spring` equation.

## [8.0.17@beta] 2017-11-14

### Changed

-   Changed `spring` equation.

## [8.0.16@beta] 2017-11-14

### Fixed

-   Reactivating a reaction when provided a new parent.

## [8.0.15@beta] 2017-11-14

### Fixed

-   Re-reversing `spring` initial velocity.

## [8.0.14@beta] 2017-11-14

### Fixed

-   Not reversing `spring` initial velocity.

## [8.0.13@beta] 2017-11-14

### Fixed

-   `keyframes` composite undefined value fixed.

## [8.0.12@beta] 2017-11-11

### Added

-   `value` handles objects and arrays.
-   `reaction` and `value` automatically stop previous action if used to start a new one.

### Fixed

-   `composite` APIs now map return values to the provided object, rather than as a flat array.

## [8.0.11@beta] 2017-11-10

### Added

-   Object, array and colour support to `keyframes`.

### Changed

-   `pointerDelta` has been removed, `pointer` now accepts an initial point.

## [8.0.10@beta] 2017-11-09

### Fixed

-   Fixing broken entry point in `package.json`.

## [8.0.9@beta] 2017-11-08

### Added

-   Color support to all vector actions.

## [8.0.8@beta] 2017-11-08

### Added

-   `crossfade`, `delay`, `merge` and `stagger` compositors.

## [8.0.7@beta] 2017-11-07

### Added

-   `chain` compositor.

## [8.0.4@beta] 2017-10-30

### Added

-   New reactive API.
-   `keyframes` animation.
-   `decay` animation.
-   `delta` transformer.

### Removed

-   `flow` alias for `pipe`
-   Transformers: `add`/`subtract`/`divide`/`multiply`/`conditional`/`alpha`/`percent`/`degrees`/`px`/`rgbUnit`/`rgba`/`hex`/`color`/`hsla`
-   Renderers: Moved to [Stylefire](https://github.com/Popmotion/stylefire)
-   Render Loop: Moved to [Framesync](https://github.com/Popmotion/framesync)
-   Color Tween: Moved to [Popmotion Color Tween](https://github.com/Popmotion/popmotion-color-tween)
-   Value Types: Moved to [Style Value Types](https://github.com/Popmotion/style-value-types)

### Changed

-   `physics` prop `to` is now `to`
-   `physics` prop `spring` is now `springStrength`
-   `physics` prop `autoStopSpeed` is now `restSpeed`.
-   `spring` prop `restDisplacement` is now `restDelta`.

## [7.8.2] 2017-10-02

### Changed

-   Now publishing `dist` folder on npm for use on CodePen via unpkg.com

### Changed

-   `spring` transformer becomes `linearSpring` to avoid clashing with the `spring` action.

## [7.8.1] 2017-08-29

### Fixed

-   Fixing mistake where Framesync's renamed `currentFrameTime` was exported instead of the previously-named `currentFrameTimestamp`.

## [7.8.0] 2017-08-29

-   Spinning off `framesync` to it's own module and deprecating render loop functions for removal in `8.0.0`.

## [7.7.1] 2017-08-27

### Fixed

-   Bug in `touches` (via [Mars](https://twitter.com/marsi))

## [7.7.0] 2017-08-24

### Added

-   `touches` action for multitouch support. (via [Mars](https://twitter.com/marsi))
-   `parallel.getChildren` method now returns array of children actions.
-   `parallel` can now accept an `onUpdate` function that is provided an array of latest child values.

## [7.6.2] 2017-08-17

### Fixed

-   Composite Actions were firing `onUpdate` as soon as registered.

## [7.6.1] 2017-08-17

### Fixed

-   Actions were firing `onUpdate` as soon as registered.

## [7.6.0] 2017-08-07

### Added

-   New `spring` action based on an interpretation of Apple's `CASpringAnimation` by [@skevy](https://github.com/skevy)

## [7.5.6] 2017-08-04

### Fixed

-   Prevent `Value.toUpdate` from being undefined.

## [7.5.5] 2017-08-02

### Fixed

-   Only firing `onStop` on an action bound to a value if the action is active.

## [7.5.4] 2017-07-31

### Fixed

-   A key is only added to Renderer's `changedValues` array if it doesn't already exist for that frame.

## [7.5.3] 2017-07-18

### Fixed

-   Consistency issue with scheduling update on `value.set` - area to look at in the future.

## [7.5.2] 2017-07-18

### Fixed

-   Bug with `css` translate map.

## [7.5.1] 2017-07-17

### Fixed

-   Fixed a bug with `smooth`, preventing it from working if the initial given numbers were `0`, or if it was called twice in the same frame.

## [7.5.0] 2017-07-17

### Added

-   Enforced order for css `transform` properties.

## [7.4.0] 2017-07-16

### Added

-   Added `seek` to `tween`.

## [7.3.1] 2017-07-13

### Added

-   Updated `snap` transform to take numbers for regular interval snapping.

## [7.3.0] 2017-07-13

### Added

-   New `snap` transformer.

## [7.2.9] 2017-07-12

### Changed

-   `trackOffset` now calls `get` instead of `getBeforeTransform`.

## [7.2.8] 2017-07-12

### Fixed

-   `angle` calculation fixed.

## [7.2.7] 2017-07-11

### Fixed

-   `steps` now returning actual value rather than stepped progress.

## [7.2.6] 2017-07-05

### Fixed

-   `speedPerSecond` divide by `0` bug.

## [7.2.5] 2017-07-05

### Fixed

-   `lastUpdated` set to `0` on action start to prevent `NaN` velocities.

## [7.2.4] 2017-07-05

### Fixed

-   `prev = current` on action start, to prevent `NaN` velocities.

## [7.2.3] 2017-07-04

### Fixed

-   `pointer` events are now `passive: true` if `preventDefault` is also set to `true` to fix bug introduced by Chrome 56.

## [7.2.2] 2017-07-03

### Changed

-   `composite` action is now `passive: true` to enable composition of other passive actions.

## [7.2.0] 2017-06-26

### Added

-   `value` can now be provided to an action's `onUpdate` for automatic action management.

## [7.1.1] 2017-06-23

-   Minor bugfix.

## [7.1.0] 2017-06-23

### Added

-   `complex` `valueType`.

## [7.0.3] 2017-06-23

### Fixed

-   Changed `pointer` to read mouse event `client` positioning instead of `page`, to make consistent with touch events.

## [7.0.2] 2017-06-23

-   Minor bugfix.

## [7.0.1] 2017-06-23

-   Minor bugfix.

## [7.0.0] 2017-06-22

### Features

-   `trackOffset` action returns to simplify the process of tracking the offset of other actions.
-   `esnext` package.json property supported.

### Deprecated

-   `flow` is now `pipe`, to avoid terminology clashes with [Flow](https://flow.org/). `flow` will continue to work until `7.1.0`.

### Removed

-   `blendTweens` is now an optional include.

## [6.7.2] 2017-06-01

### Fixed

-   Removing dependencies from `package.json`

## [6.7.1] 2017-06-01

### Fixed

-   `colorTween` now uses `transform` property to convert from progress to color, which fixes composition compatibility.

## [6.7.0] 2017-06-01

### Added

-   `transform` property for actions. If set, any values passed to `onUpdate` or returned from `get` will be run through this function.
-   `getBeforeTransform` method added for actions. Will return the current value, before transform is applied.

## [6.3.5] 2017-03-03

### Added

-   `applyOffset` transformer.

## [6.3.4] 2017-03-01

### Fixed

-   Undocumented range easing property in `interpolate` transformer was looking at the wrong index.

## [6.3.3] 2017-18-01

### Added

-   `top`, `left`, `bottom` and `right` CSS renderer value types.

## [6.3.2] 2017-11-01

### Added

-   `smooth` transformer

## [6.3.1] 2017-11-01

### Fixed

-   `transformChildValues` transformer now keeps a local mutable state rather than mutating the provided state.

## [6.3.0] 2017-11-01

### Added

-   Actions now have an `output` shorthand for setting the `onUpdate` property.

## [6.2.1] 2017-09-01

### Added

-   Updated bezier tween blend algorithm.
-   Exposed bezier resolver as a transformer.

## [6.2.0] 2017-09-01

### Added

-   Bezier tween blending

## [6.1.0] 2017-06-01

-   Public release of new API

## [6.0.0@alpha] 2017-01-01

-   New API

## [5.0.20] 2016-11-15

### Fixed

-   Accidentally transpiled a version of 6.0.

## [5.0.19] 2016-11-15

### Added

-   `track` Can take `preventDefault` as optional second param. Defaults to `true`.

## [5.0.18] 2016-08-08

### Fixed

-   Firing `onActivateLoop` even if task is already active to prevent `once` from running more than once.

## [5.0.17] 2016-05-08

### Fixed

-   Actually fixing spring clamping this time.

## [5.0.16] 2016-05-08

### Fixed

-   Spring physics action now automatically ending when target is reached.

## [5.0.15] 2016-18-07

### Fixed

-   Missing compilation of `5.0.14`

## [5.0.14] 2016-18-07

### Fixed

-   Preventing `current` being overwritten by value type default properties.
-   `Tween`s now finish automatically when scrubbed, fixing timeline/stagger bug where tweens wouldn't end.

## [5.0.13] 2016-06-07

### Fixed

-   `track.start` and `track.stop` now returning `this`, allowing chaining.
-   `from` restored as `track` default value.

## [5.0.12] 2016-06-01

### Fixed

-   @[jamieowen](https://github.com/jamieowen): `transform` now being prefixed correctly.
-   [#156](https://github.com/Popmotion/popmotion/issues/156): Explicit tween `from` values now honoured by `flow.start`.

### Changed

-   Converted project from 4 space indent to 2.

## [5.0.11] 2016-05-21

### Changed

-   Tween `blend` property set to `false` by default.

### Fixed

-   Mouse tracking in Firefox - `Object.watch` is truthy in Firefox.

## [5.0.10] 2016-05-21

### Fixed

-   @[FreakTheMighty](https://github.com/FreakTheMighty): Setting bound pointer listener to ensure correct removal on `Pointer.stop`.

## [5.0.9] 2016-05-21

### Fixed

-   @[jamieowen](https://github.com/jamieowen): Prefixed properties now being set correctly.

## [5.0.8] 2016-05-15

### Added

-   Unit tests for `transformers.createMapper`.

### Fixed

-   Fixed mapped values calculated from `transformers.createMapper` mappers that are outside of the input range returning `undefined`.

## [5.0.7] 2016-04-20

### Changed

-   Subsequent actions started on a flow are only given the flow's velocity if their velocity is 0.

## [5.0.6] 2016-04-17

### Changed

-   Inherited actions now receive a `parentId` property with the `id` of their parent action.

## [5.0.5] 2016-04-13

### Fixed

-   On `set`, `current` was returning undefined if `values` prop set as value, forcing an `adapter` read.

## [5.0.4] 2016-04-13

### Fixed

-   If `adapter` returns a string that should be a pure number, we parse that as a float.

## [5.0.3] 2016-04-06

### Fixed

-   Regression from testing `5.0.2`.

## [5.0.2] 2016-04-06

### Fixed

-   Fixing entry point in `package.json`.

## [5.0.1] 2016-03-30

Minor bugfixes.

## [5.0.0] 2016-03-29

### Popmotion 5.0: timelines, streamlined API, tween blending, still 12kb.

**Warning:** This is a major API revision. Previous Popmotion code **will** be incompatible with this upgrade.

### Added

-   **Timelines**: Super-simple yet fully-featured nestable timelines to easily sequence `tweens`.
-   **Tween blending**: Smooth transitions between overlapping tweens.
-   **Standalone actions**: `tween`, `physics` and `track` can all run without the need for an `actor`.
-   **Adapters**: Minimal `get`/`set` API wrappers for smoothing differences between DOM, SVG and frameworks.
-   **Transformers**: Composable functions to transform values between update and render.
-   **Unified physics engine**: Handles `velocity`, `friction` and `spring` in one unified `physics` action.
-   **Small**: All this for less than 12kb minified & gzipped.
-   **Smaller**: Rewritten entirely using ES6 exports to allow tree-shaking, ignoring the parts of Popmotion you don't include.
-   **Global time dilation**: `setGlobalDilation` method can change the global time.
-   **Flow layer**: Replaces Actors and can work entirely in the background to manage multiple actions on the same object.
-   Support `points` property for `polygon` and `polyline` tags.
-   **MIT**: Changed licence to MIT.

### Removed

-   `new` - dropped in favour of factory functions (ie `new Tween()` becomes `tween()`). This will allow further non-API-breaking optimisations.
-   `Actor` dropped in favour of `flow`. The Actor model was monolithic, flows are automatically generated for `element`s in the background and can be accessed optionally via `detectFlow`.
-   `process`: Now `task`. Prevents conflict with global common in browsers.
-   Removed Action `watch` property in favour of more flexible `transform`: Simply provide a function that returns a different value.
-   Native Meteor support, as we kept forgetting to update it.
-   jQuery support - provide elements as returned from `$('.yourElement').get()` instead.
-   `Sequence`: Dropped in favour of the `timeline` function.
-   `Iterator`: Dropped in favour of using native array methods and the new `stagger` function.
-   `Simulate`: Dropped in favour of unified `physics` action.

### Changed

-   `friction` now a value between `0` and `1` - `0` provides no friction, `1` will strip all velocity within a single frame.

## [4.3.4] 2015-12-30

### Fixed

-   `Simulate.hasChanged` incorrectly calculated.

## [4.3.3] 2015-12-29

### Fixed

-   Added `acceleration` to list of properties that can be set as functions, resolved when an Action starts.

## [4.3.2] 2015-12-26

### Fixed

-   Recursion bug with `Actor.sync` under specific circumstances.

## [4.3.1] 2015-12-24

### Removed

-   `deceleration` from `Simulate`.

### Fixed

-   Fixed bug where `Tween` would start as ended if initialised during `update` ie via a `Sequence`.

## [4.3.0] 2015-12-17

### Added

-   `scale` value type hooked up to CSS and SVG roles.
-   `utils.camelToDash` utility function for converting camelCase props to dash-case.

### Changed

-   Default `Simulate` `stopSpeed` changed from `5` to `0.0001` to account for tiny numbers like 0-1.

## [4.2.7] 2015-12-09

### Fixed

-   SVG properties set ie `fillOpacity` are now getting set as `fill-opacity`.

## [4.2.6] 2015-12-08

### Fixed

-   Fixed recursive loop when splitting Actor values.

## [4.2.5] 2015-12-07

### Added

-   `opacity`, `fillOpacity` and `strokeOpacity` to `ui.svg` Role type map.

## [4.2.4] 2015-12-07

### Added

-   `Simulate.autoEnd` property, set to `false` to prevent simulations from automatically ending.

### Fixed

-   TweenControls `reverse` now work on completed Tweens.

## [4.2.3] 2015-12-06

### Added

-   Actors automatically `sync` on init.

## [4.2.2] 2015-12-03

### Update

-   Moving from Babel's official es2015 preset to a custom build.

## [4.2.1] 2015-12-03

### Update

-   Updating Babel to fix transpilation errors in IE10.

## [4.2.0] 2015-12-02

### Changed

-   Moving to dual commercial and GPLv3 licence.

## [4.1.0] 2015-11-28

### Added

-   Actor value `watch` property can now be a function returning any numerical value.
-   Added `smooth` for all actions.
-   Added `calc.toDecimal` calculator function.

## [4.0.0] 2015-11-20

### Added

-   New core processing loop. Separates processes into four stages: `update`, `preRender`, `render`, `postRender`.
-   `Process.once` to fire a Process for a single frame.
-   Run background processes by passing `true` to `Process.setBackground` or as the last argument to the `Process` constructor. Background processes won't spin up the process loop when activated, only running when non-background processes are active.

### Changed

-   `new ui.Process()` takes `callback, scope` instead of `scope, callback`.
-   `Process` callbacks now receive `scope` as the first argument, then `framestamp, frameDuration`.

### Removed

-   `Process.every`, `Process.reset` and `Process.fire`. Processes should only be started/stopped with `Process.start` and `Process.stop` respectively, to ensure they're run as part of the main loop. `every` is redundant with a combination of `setInterval` and `Process.once`.
-   `Process.start` no longer takes a time period as an argument - use `setTimeout` to `Process.stop`.

## [3.8.1] 2015-11-19

### Fixed

-   Pow easings incorrectly named var.

## [3.8.0] 2015-11-19

### Added

-   Elliot Geno's awesome `'anticipate'` easing. Follow him at [@ElliotGeno](https://twitter.com/ElliotGeno/).
-   In-built easings now available in the `ui.ease` namespace. So instead of providing `'backOut'` you can reference it literally - `ui.ease.anticipate`.
-   Create modified easing function strengths, for instance `ease: ui.modifyEase(ui.ease.backOut, 2)`. `'ease'` and `'back'` in/out/inOut variants and `'anticipate'` are available. You must provide the literal reference rather than string reference.

## [3.7.1] 2015-11-11

### Changed

-   Refactored core clock to increase performance in lower-end devices.

## [3.7.0] 2015-11-07

### Changed

-   Software licence changed. Popmotion is now free for non-commercial uses, and requires a per-project licence for commercial projects.
-   More files converted to ES6 syntax.
-   Moved back to small for production compilation.
-   Upgraded Babel from 5 to 6.

### Added

-   Beginning suite of Mocha unit tests.

## [3.6.3] 2015-11-03

### Added

-   Extra tests to ensure Popmotion is loading correctly in Meteor.

### Fixed

-   Explicit test for rAF for when `window` is available and `requestAnimationFrame` isn't.

## [3.6.2] 2015-11-02

### Added

-   Meteor support. Published on [Atmosphere](https://atmospherejs.com/popmotion/popmotion) as `popmotion:popmotion`.

### Fixed

-   `performance` and `window` checks in Node.

## [3.6.1] 2015-10-29

### Fixed

-   Smoothing lower than frameduration produced odd values.
-   Smooth by `0` `Infinity` error

## [3.6.0] 2015-10-29

### Added

-   New `transform(value, key, actor)` property for `Actor` values. Allows you to return a new value after its been processed by an action, but before it's been limited/rounded etc.
-   Exposed our `Track` `smooth` calculator as `ui.calc.smooth`.

### Changed

-   Refactored some files to cut down on filesize.

### Fixed

-   Fixed a regression from `3.3.3` that fixed `performance` in IE9.

## [3.5.0] 2015-10-21

### Added

-   Roles are now getter/setters, if `get` and `set` methods are present. For example: CSS role has getter/setters, so you can call:

    ui.css(element, {
    position: 'absolute',
    top: 0
    });

## [3.4.4] 2015-10-22

### Fixed

-   `Actor.stop().start()` was failing to run.

## [3.4.3] 2015-10-21

### Fixed

-   `Actor.sync` now returns `Actor` rather than the bound sync `Action`.

## [3.4.2] 2015-10-21

### Fixed

-   `svg` tags are now assigned `ui.css` role.

## [3.4.1] 2015-10-17

### Fixed

-   Delaying test element creation in CSS Role prevents error in server-side rendering.

## [3.4.0] 2015-10-16

### Added

-   `Sequence` class, for creating a sequence of non-sequential actions.
-   `onComplete` property to `Iterator.stagger`.
-   Pass an action as the `Iterator.each` and `Iterator.stagger` `method` argument to automatically run `start` on each `Actor`.

### Changed

-   Using rAF-provided timestamp instead of `performance.now` for smoother motion.

## [3.3.3] 2015-10-13

### Fixed

-   @stoikerty: Fixed `performance.now` check for IE9.

## [3.3.2] 2015-10-10

### Fixed

-   `Pointer` events now properly unbound on `Actor` stop.

## [3.3.1] 2015-10-09

### Added

-   `Actor.smooth` now settable on a per-value basis.
-   `direct` value property added to take direct input values instead of inputOffset.

## [3.3.0] 2015-10-08

### Added

-   `smooth` property added to `Track` - smoothes out values coming from `Input` sources.

## [3.2.1] 2015-10-07

### Fixed

-   `watch` no longer overwritten on `set`.

## [3.2.0] 2015-10-06

### Added

-   `ui.select` now caches and finds cached Actors bound to DOM elements. If one Actor is found, it returns an Actor. If multiple Actors are found, an Iterator.
-   `reverse` method to `Iterator`.

## [3.1.7] 2015-10-05

## Fixed

-   Adjusting `hasChanged` logic to always fire on first frame.
-   Changing `Iterator.stagger` logic for more even staggers.

## [3.1.6] 2015-10-05

## Fixed

-   Manually moved the library class filenames to uppercase.

## [3.1.5] 2015-10-05

## Fixed

-   Renamed some class files to uppercase to fix include fails in some Browserify compilations.

## [3.1.4] 2015-10-05

## Added

-   Simulation functions are now sent `value <object>, frameDuration <int>, timeStarted <timestamp>` as arguments.

## [3.1.3] 2015-10-04

## Fixed

-   Actions fired within an `onComplete` wouldn't start because the number of active Actions was being counted incorrectly.

## [3.1.2] 2015-10-03

### Fixed

-   Major Firefox bug 1) `values` false-positive test for `watch` property, now explicitly checking for `string`.
-   Major Firefox bug 2) `element.style.hasOwnProperty()` always returning false, switching to `in element.style`.

## [3.1.1] 2015-10-02

### Fixed

-   Clearing Actor then/next queue on `start`.
-   Saving all arguments to queue via `then` so we can pass Inputs.

## [3.1.0] 2015-10-01

### Added

-   Action-specific `onStart`, `onUpdate`, `onFrame` and `onComplete` callbacks. These callbacks will be active only for the duration of the action, while callbacks attached to the host Actor will persist through all actions.

### Changed

-   `onStart` callbacks are now fired immediately before the Actor is activated, giving actions extra time to initiate and make use of the [< 100ms response window](https://aerotwist.com/blog/flip-your-animations/).

### Fixed

-   Bugfix for deep-copying Actions on Action start. That was a whoops and a half.

## [3.0.4] 2015-09-30

### Fixed

-   Bugfix for subvalues not being flipped correctly.

## [3.0.3] 2015-09-30

### Fixed

-   SVG Role divide by 0 error when `scale` === 0.

## [3.0.2] 2015-09-29

### Fixed

-   Bugfix where Popmotion would attempt to split numerical values.
-   Bugfix for `complex` valueType regex where negative numbers were made positive.

## [3.0.0] 2015-09-29

### Added

-   Full SVG support.
-   Multiple simultaneous Actions on a single Actor - mix Simulations, Tracking and Tweens on the same elements!
-   Animate complex strings, like `path` `d` attributes.
-   Iterator - to allow single classes to be extended the ActorCollector has been dropped in favour of a generic Iterator class, which can iterate over any set of classes. This also makes it clearer when you're interacting with multiple items vs a single Actor, and these items are not longer limited to Actors.
-   Roles - `ui.css`, `ui.attr`, `ui.svg`, `ui.draw`. These are auto-assigned to Actors when initialised with an `element` property, but can also be manually assigned with the `as` property on Actor initialisation.
-   Actors can have multiple roles by providing an array to `as`.
-   New roles can be created with `new ui.Role()`.
-   Value names can be translated before a Role accesses it, via a Role's `map` property. For example `ui.cssRole` maps `x` to `translateX`.
-   Action classes/definitions - `Tween`, `Simulate`, `Track`

### Removed

-   `ui.addRoute` - see Roles
-   `ui.addPreset`, `ui.addAction` - see Tween, Simulate and Track classes
-   `ActorCollection` - see Iterator
-   `play`, `run`, `track` Actor methods - use `start`

### Changed

-   `addToQueue` Actor method is now `then` and takes Tween, Simulate and Track instances instead of raw properties.
-   `mapLink` Actor value property is now `mapFrom`.
-   Default tween `duration` set to `300`.
-   Default tween `ease` set to `"easeOut"`.
-   `reverse`, `reset` -> `restart`, `seek` methods moved to `TweenControls` (returned when a `Tween` is passed to `start`)

### Deprecated

-   `flipValues`, `reverse`, `reset`, `resetProgress`, `resetOrigins` and `seek` Actor methods - these are all going to be moved to the `Tween` class in `3.2.0`

## [2.0.4] 2015-08-10

### Fixed

-   Fixing `bounce` and `capture` simulation calls.

## [2.0.3] 2015-08-10

### Removed

-   Removed undocumented `ui.addSimulation` - new simulations now passed as function instead of simulation name.

## [2.0.2] 2015-08-10

### Changed

-   `Actor.seek` no longer an Action, much higher performance.

## [2.0.1] 2015-08-07

### Changed

-   Only numerical properties can be set as functions to be resolved on action start.

## [2.0.0] 2015-08-07

### Removed

-   `ui.addEasing()`

### Added

-   New easing functions are now generated with `new ui.Easing()` and provided as the `ease` property. When provided an easeIn function, `in`, `out` and `inOut` methods are returned.

## [1.0.0] 2015-08-06

**Note:** Forked from Redshift v2.1.1.

### Changed

-   `redshift` object name now `ui`.
-   Terminology changes to fix API semantics:
    -   **Action:** Actor
    -   **ActionCollection:** ActionCollection
    -   **Rubix:** Action (as in, an Action an Actor can perform)

### Added

-   Add new easing functions with `ui.addEasing()`. Provide the easeIn function and Popmotion will generate easeOut and easeInOut variants.
-   Add new simulation functions to `run` with `ui.addSimulation()`.
-   Any value can be a special **value type**, ie a color. `'#FFF'` splits into four numerical properties, `Red`, `Blue`, `Green` and `Alpha`.
-   Add new value types with `ui.addValueType()`.
-   HSLA value type support.

## [2.1.1] 2015-06-11

### Fixed

-   Change Action `rubix` from `"seek"` to `"play"` onEnd.

## [2.1.0] 2015-06-11

### Added

-   Added `.seek()` method to Actions.

## [2.0.5] 2015-06-02

### Added

-   ActionGroup returns array of values when a getter is called.

## [2.0.4] 2015-06-01

### Fixed

-   `onStart` regression from 2.0.0 - only firing for 'values' route.

## [2.0.3] 2015-06-01

### Fixed

-   Fixing hasChanged regression, prevented .run() from stopping automatically.

## [2.0.2] 2015-06-01

### Fixed

-   Adding Alpha property to all split color values (default: 1), in case a value has mixed RGB and RGBA properties.

## [2.0.1] 2015-06-01

### Added

-   CSS values travelling through a splitter (ie backgroundColor is split into RGB values) can be set as functions like normal values.

## [2.0.0] 2015-06-01

### Changed

-   Upgraded stepped easing algorithm.
-   `Action.hasChanged` set to `true` when `Action.isActive(true)`

### Removed

-   `.props()` method removed - properties now saved directly to Action object.
-   `.data()` functionality removed, just set properties of Action instead.
-   `.flip()` is now `.flipValues()`.

## [1.4.1] 2015-05-31

### Fixed

-   ActionGroup.stagger() wasn't returning `this`

## [1.4.0] 2015-05-31

### Added

-   Action Groups for controlling multiple Actions at once.
-   Stagger method for Action Groups.
-   DOM selection support for creating Actions prepopulated with DOM elements.

### Fixed

-   Calling .play(preset) while Action was in progress failed to add that call to the play queue.
-   Added check for Process timers before clearing as clearTimeout is costing ~.4ms.
