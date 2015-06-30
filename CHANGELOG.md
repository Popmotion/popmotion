# Change log

Redshift adheres to [Semantic Versioning](http://semver.org/). Change log added v1.4.0.

## [3.0.0] Unreleased

**Note:** This is a major, final, API revision. Initiating objects will need to be rewritten after upgrade, all other

### Changed
- Major terminology changes to fix API semantics:
    - `redshift` -> `Redshift`: As Redshift is a singleton.
    - `redshift.newAction()` -> `new Redshift.Element()`: As "Action" was non-descriptive, "Element" is the body of values that you perform Actions on.
    - `redshift.newActionGroup()` -> `new Redshift.ElementSystem()`: "System" better reflects the current and long-term purpose of this object.
    - "Rubix" are now "Action"s, as they are performed on Elements and "Rubix" was non-descriptive. And completely invented, the fewer random concepts that have the be explained, the better!
    - `redshift.addRubix()` -> `Redshift.addAction()`
- Other object initialisation changes to cut out an unneeded function and encourage extending objects:
    - `redshift.newInput` -> `new Redshift.Input()`
    - `redshift.newProcess` -> `new Redshift.Process()`
- `redshift.dom()` -> `Redshift.select()`
- `redshift.addBezier()` -> `Redshift.addEasing()`: As this method can now add new easing functions as well as bezier curves.
- Performance improvements

### Added

#### Value Types
- Any value going through any route can now be a special value (like a color value). Value types can be default properties, and/or splitter/combine methods that split a value into child values.
- Add new Value Types with `Redshift.addValueType(valueType)`.
- Set a value type by setting a value's `type` property to the name of that type. Alternatively add automatic mapping on custom routes with a route's `typeMap` property.
- HSL/HSLA color support added.

#### Element Types
- Redshift Elements can be a custom type which can provide type-specific methods to Elements. For instance, the `dom` Element type provides a `style` method. A hypothetical `canvas` Element type could provide an alternative `style` method.
- `"dom"` Element type included by default. Automatically set to `"dom"` when creating Elements via `Redshift.select(selector)`.
- Add new Element Types with `Redshift.addElementType(elementType)`.

#### Misc
- `Redshift.addEasing()` can take easing functions (provide easeIn function, and Redshift will generate easeOut and easeInOut variations).
- Add new physics simulations with `Redshift.addSimulation()`.

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
