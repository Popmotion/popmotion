# Change log

Popmotion adheres to [Semantic Versioning](http://semver.org/).

## [2.0.1] 2015-08-07

### Changed
- Only numerical properties can be set as functions to be resolved on action start.

## [2.0.0] 2015-08-07

### Removed
- `ui.addEasing()`

### Added
- New easing functions are now generated with `new ui.Easing()` and provided as the `ease` property. When provided an easeIn function, `in`, `out` and `inOut` methods are returned.

## [1.0.0] 2015-08-06

**Note:** Forked from Redshift v2.1.1.

### Changed
- `redshift` object name now `ui`.
- Terminology changes to fix API semantics:
    - **Action:** Actor
    - **ActionCollection:** ActionCollection
    - **Rubix:** Action (as in, an Action an Actor can perform)

### Added
- Add new easing functions with `ui.addEasing()`. Provide the easeIn function and Popmotion will generate easeOut and easeInOut variants.
- Add new simulation functions to `run` with `ui.addSimulation()`.
- Any value can be a special **value type**, ie a color. `'#FFF'` splits into four numerical properties, `Red`, `Blue`, `Green` and `Alpha`.
- Add new value types with `ui.addValueType()`.
- HSLA value type support.

## [2.1.1] 2015-06-11

### Fixed
- Change Action `rubix` from `"seek"` to `"play"` onEnd.

## [2.1.0] 2015-06-11

### Added
- Added `.seek()` method to Actions.

## [2.0.5] 2015-06-02

### Added
- ActionGroup returns array of values when a getter is called.

## [2.0.4] 2015-06-01

### Fixed
- `onStart` regression from 2.0.0 - only firing for 'values' route.

## [2.0.3] 2015-06-01

### Fixed
- Fixing hasChanged regression, prevented .run() from stopping automatically.

## [2.0.2] 2015-06-01

### Fixed
- Adding Alpha property to all split color values (default: 1), in case a value has mixed RGB and RGBA properties.

## [2.0.1] 2015-06-01

### Added
- CSS values travelling through a splitter (ie backgroundColor is split into RGB values) can be set as functions like normal values.

## [2.0.0] 2015-06-01

### Changed
- Upgraded stepped easing algorithm.
- `Action.hasChanged` set to `true` when `Action.isActive(true)`

### Removed
- `.props()` method removed - properties now saved directly to Action object.
- `.data()` functionality removed, just set properties of Action instead.
- `.flip()` is now `.flipValues()`.

## [1.4.1] 2015-05-31

### Fixed
- ActionGroup.stagger() wasn't returning `this`

## [1.4.0] 2015-05-31

### Added
- Action Groups for controlling multiple Actions at once.
- Stagger method for Action Groups.
- DOM selection support for creating Actions prepopulated with DOM elements.

### Fixed
- Calling .play(preset) while Action was in progress failed to add that call to the play queue.
- Added check for Process timers before clearing as clearTimeout is costing ~.4ms.
