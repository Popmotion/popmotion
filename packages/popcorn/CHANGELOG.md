# Changelog

Popcorn adheres to [Semantic Versioning](http://semver.org/).

## [0.4.2] 2019-07-25

### Fixed

- Upgrading `style-value-types` to correctly clamp color alpha.

## [0.4.0] 2019-05-01

### Added

- Added `mixObject` to interpolate objects, added capability to `interpolate`.
- Made handling of complex value types more permissive.

## [0.3.9] 2019-04-30

### Fixed

- Improving value compatibility checks in `mixComplex`.

## [0.3.8] 2019-04-30

### Upgrade

- Dependencies.

## [0.3.6] 2019-04-01

### Fixed

- Improving error messaging when people attempt to animate named colors ie `'red'`.

## [0.3.5] 2019-NaN-01

### Fixing

- Ensuring `mixColor` with progress of `>1` or `<0` can never square root a negative.

## [0.3.4] 2019-03-15

### Fixing

- Ensuring `jest` is just a `devDependency`.

## [0.3.3] 2019-03-13

### Adding

- Adding custom `mixer` property to `interpolate`.

## [0.3.2] 2019-03-12

### Fixing

- Converting `interpolate` to generic types.

### Upgrading

- Upgrading `style-value-types@3.1.0`.

## [0.3.1] 2018-11-28

### Fixing

- Explicit types for `interpolate`.

## [0.3.0] 2018-11-27

### Adding

- Support for `clamp` and `ease` options in `interpolate`.

## [0.2.0] 2018-11-16

### Removed

- `dilate` [#612](https://github.com/Popmotion/popmotion/pull/612)

## [0.1.2] 2018-11-05

### Fixed

- Fixed Typescript import paths [#607](https://github.com/Popmotion/popmotion/issues/607)

## [0.1.1] 2018-11-01

### Republish

## [0.1.0] 2018-10-31

### Added

- Exposing `springForce, springForceLinear, springForceExpo` - these are currently private for use in Popmotion libraries.

## [0.0.1] 2018-09-30

### First publish
