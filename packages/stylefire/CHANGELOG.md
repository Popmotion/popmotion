# Changelog

Stylefire adheres to [Semantic Versioning](http://semver.org/).

## [4.1.4] 2019-05-07

### Fix

- Adding rounding to `zIndex`.

## [4.1.3] 2019-05-01

### Upgrade

- Dependencies.

## [4.1.2] 2019-04-30

### Upgrade

- Dependencies.

## [4.1.1] 2019-04-24

### Fixed

- Support for setting CSS variables.

## [4.1.0] 2019-04-10

### Removed

- Support for `size` and `radius` properties. (Undocumented so no major bump).

## [4.0.1] 2019-04-10

### Fixed

- Fixing value types for `size` and `radius`.

## [4.0.0] 2019-04-08

### Added

- `styler.get()` now has an optional `forceRead` argument.
- Support for `size` and `radius` special CSS properties.

### Removed

- `styler.set('propKey')` syntax no longer returns setter.
- `styler.get()` requires a provided key.

### Fixed

- Only parsing read values if they're of the default value type.

## [3.0.2] 2019-04-01

### Update

- `@popmotion/popcorn@0.3.6`

## [3.0.1] 2019-04-01

### Update

- `@popmotion/popcorn@0.3.5`

## [3.0.0] 2019-03-12

### Changed

- `originX`, `originY`, `pathLength` and `pathOffset` now `progress` `ValueType`.

## [2.4.3] 2019-02-29

### Fixed

- Running `transform` template even if transforms are default or none set.

## [2.4.2] 2019-02-28

### Added

- Adding type support for setting values to `undefined`.

## [2.4.1] 2019-02-27

### Added

- Support for `transform` template function to accept the Stylefire-built transform string.

## [2.4.0] 2019-01-30

### Added

- Support for SVG camel-case attributes.

## [2.3.7] 2019-01-17

### Fixed

- `isDashCase` is now optional when using `buildStyleProperty`

## [2.3.6] 2019-01-16

### Added

- Exporting `isTransformProp`

## [2.3.5] 2019-01-07

### Fixed

- Add graceful degradation for NS_ERROR_FAILURE errors in Firefox [#670](https://github.com/Popmotion/popmotion/pull/670)

## [2.3.3] 2018-12-07

### Added

- Moving from `cssText` to `Object.assign(element.style)` - around 2x faster.
- `transform` can now be set as a function to return a custom transform order. This is currently undocumented behaviour.

## [2.3.2] 2018-11-27

### Fixed

- Removing `scrollLeft` and `scrollTop` from cache.
- Adding `scrollX` and `scrollY` alias.

## [2.3.1] 2018-11-19

### Fixed

- Removing options requirement in `styler`.

## [2.3.0] 2018-11-19

### Added

- New `buildStyleProperty` pure function to transform Stylefire props into React-style `style` objects to aid with SSR.

## [2.2.0] 2018-11-16

### Added

- Adding value types for `padding`, `margin`, and `border`.
- Added support for `transform` and `transform-origin` prefixing.

## [2.1.0] 2018-09-21

### Updated

- Moving to `framesync@4.0.0`

## [2.0.7] 2018-08-10

### Fixed

- Adding value type for `skew`.

## [2.0.4] 2018-08-30

### Updated

- `style-value-types@3.0.6`

## [2.0.3] 2018-06-21

### Updated

- `style-value-types@2.0.1`

## [2.0.2] 2018-05-16

### Fixed

Fixing Rollup config.

## [2.0.1] 2018-05-16

### Fixed

Pointing `main` to correct file.

## [2.0.0] 2018-05-16

### Added

- `scrollLeft` and `scrollTop` added for `HTMLElement`.
- Rollup now used to compile modules, filesize down to 3.3kb

### Removed

- Individual `scroll`, `svg` and `css` stylers.

## [1.2.14] 2018-04-06

### Fixed

- Build

## [1.2.13] 2018-04-06

### Fixed

- Was exporting the wrong `createStyler`! Classic.

## [1.2.12] 2018-04-04

### Fixed

- `transform: none` was being set if any `transform` was a string.

## [1.2.11] 2018-04-04

### Fixed

- `originX` and `originY` are now set as a single style value, as `transform-origin-` axis-specific values aren't supported in Firefox.

## [1.2.10] 2018-04-04

### Added

- Now setting `transform` to `none` if all transform values are default.

## [1.2.9] 2018-03-13

### Fixed

- Reverting `Styler` types :(

## [1.2.8] 2018-03-13

### Fixed

- Changing `Styler` type to interface.

## [1.2.7] 2018-03-13

### Fixed

- Updating `styler.set` type.

## [1.2.6] 2018-03-06

### Added

- Exposing `buildStyles` (undocumented)

## [1.2.4] 2018-03-06

### Added

- `props` can now be passed to `styler`.

## [1.2.4] 2018-03-04

### Fixed

- `css.onRead` can now return raw output values by passing `preparseValues: false` - in `2.0.0` this will default to `false`.

## [1.2.3] 2018-03-04

### Fixed

- `css.onRead` now correctly requesting props as dash-case.

## [1.2.2] 2018-03-04

### Fixed

- Upgrading `style-value-types` to `1.0.4`

## [1.2.1] 2018-02-27

### Fixed

- Changing `transform-origin-x` and `y` to camel-case.

## [1.2.0] 2018-02-21

### Added

- `styler` maintains an internal cache of stylers. If a node is passed for the second time, it will return the previously-create styler.
- `translate-origin-x` and `translate-origin-y` default prop types now `percent`.

## [1.1.9] 2018-02-04

### Fixed

- Returning `scrollTop` correctly [PR #8](https://github.com/Popmotion/stylefire/pull/8)

## [1.1.8] 2018-01-03

### Added

- `max-width` and `max-height` as supported value types.

### Fixed

- Fixing IE11 bug.

## [1.1.7] 2017-11-19

### Fixed

- Actually ensuring changed values only get added if not already present.

## [1.1.5] 2017-11-19

### Fixed

- Ensuring changed values only get added if not already present.

## [1.1.4] 2017-10-31

### Changed

- Changing return type of `Setter` from `void` to `any`.

## [1.1.3] 2017-10-31

### Fixed

- Exporting `Styler` type, except actually.

## [1.1.2] 2017-10-31

### Added

- Exporting `Styler` type.

## [1.1.1] 2017-10-31

### Fixed

- Fixing `scroll` export.

## [1.1.0] 2017-10-31

### Added

- `set` now returns a curried setter function if only provided a `key` argument.

## [1.0.1] 2017-10-02

### Added
- Updating README.

## [1.0.0] 2017-10-02

- First publish.