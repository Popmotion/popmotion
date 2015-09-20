# Change log

Popmotion adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0] Unreleased

### Removed
- `ui.addRoute` - see Roles
- `ui.addPreset`, `ui.addAction` - see Tween, Simulate and Track classes

### Added
- Full SVG support
- Roles - `ui.css`, `ui.attr`, `ui.svg`, `ui.draw`. These are auto-assigned to Actors when initialised with an `element` property, but can also be manually assigned with the `as` property.
- Actors can have multiple roles by providing an array to `as`.
- New roles can be created with `new ui.Role()`.
- Value names can be translated via a Role's `map` property. For example `ui.cssRole` automatically maps `x` to `translateX`.
- Action classes/definitions - `Tween`, `Simulate`, `Track`

### Changed
- `addToQueue` Actor method is now `then`.
- `mapLink` Actor value property is now `mapFrom`.
- Default tween `duration` set to `300`.
- Default tween `ease` set to `"easeOut"`. 

### Deprecated
- `flipValues`, `reverse`, `reset`, `resetProgress`, `resetOrigins` and `seek` Actor methods - these are all going to be moved to the `Tween` class in `3.2.0`

## [2.0.4] 2015-08-10

### Fixed
- Fixing `bounce` and `capture` simulation calls.

## [2.0.3] 2015-08-10

### Removed
- Removed undocumented `ui.addSimulation` - new simulations now passed as function instead of simulation name.

## [2.0.2] 2015-08-10

### Changed
- `Actor.seek` no longer an Action, much higher performance.

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
