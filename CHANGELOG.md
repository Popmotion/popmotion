# Change log

Redshift adheres to [Semantic Versioning](http://semver.org/). Change log added v1.4.0.

## [3.0.0] Unreleased

### Added
- Creating new Elements (previously "Actions") now ~3x faster.
- New Actions (previously "Rubix") can extend Elements with custom methods.
- Value types added. Now any value going through any route (css/values/attr etc) can be a special value (like a color value). Add new value splitters/combiners with `Redshift.addValueType()`.
- Element types added.
- Super modular structure allows you to rip out or extend virtually every facet of Redshift.
- Removed Input framelag.

### Changed
- Changed `redshift` to `Redshift`, as this is a major API change and `Redshift` is a singleton.
- `redshift.newX()` functions changed to `new Redshift.X()` constructors:
    - `newAction` -> `new Element`
    - `newActionGroup` -> `new ElementSystem`
    - `newInput` -> `new Input`
    - `newProcess` -> `new Process`
This cuts out a function call and allows developers to extend these prototypes.
- `redshift.dom()` replaced with `Redshift.select()`, which will take a DOM selector, NodeList, or array of object literals and return an `ElementSystem` with each item assigned its own `Element`.
- `redshift.addRubix()` changed to `Redshift.addAction()`, for clearer and semantic naming. 

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
