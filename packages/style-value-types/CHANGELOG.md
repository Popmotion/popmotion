# Changelog

Style Value Types adheres to [Semantic Versioning](http://semver.org/).

### [4.1.1] 2021-03-01

### Fixed

- Fixing es entry point.

### [4.1.0] 2021-03-01

### Fixed

- Unbundling ES code to facilitate code-splitting in Webpack.

## [4.0.3] 2020-02-22

### Fixed

- Fixing `hasOwnProperty` call on `null` for color test.

## [4.0.1] 2020-01-08

### Added

- Restoring support for RGBA/HSLA objects in rgba.parse/hsla.parse.

## [4.0.0] 2020-01-08

### Added

- Support for hex alpha.
- `filter` type.
- Improved handling of decimals with no preceding digit.

### Removed

- Support for RGBA/HSLA objects in rgba.parse/hsla.parse.

## [3.2.0] 2020-12-18

### Fixed

- Including `tslib` as a separate dependency.

## [3.1.9] 2020-07-23

### Fixed

- Fixed opacity with whitespace syntax colors.

## [3.1.8] 2020-07-23

### Fixed

- Fixed whitespace syntax colors.
- Fixed HSL(A) colors containing decimals.

## [3.1.7] 2019-11-14

### Fixed

- Updating to Typescript 3.7.

## [3.1.6] 2019-07-25

### Fixed

- Clamping color alpha to 0-1.

## [3.1.4] 2019-05-01

### Fixed

- Rejecting `complex` values in `color` tests.

## [3.1.3] 2019-04-29

### Fixed

- Dynamic type imports.

## [3.1.2] 2019-04-29

### Removed

- Hard `ValueType` typing from `complex`.

## [3.1.1] 2019-04-29

### Added

- `getAnimatableNone` to `complex` value type.

## [3.1.0] 2019-03-12

### Added

- `progressPercentage` value type.

## [3.0.7] 2018-08-30

### Fixed

- Preventing unit types from matching anything that contains that string ie px matching to `blur(20px)`.

## [3.0.6] 2018-08-16

### Fixed

- Detecting exponential values in complex.createTransformer. [#423](https://github.com/Popmotion/popmotion/issues/423)

## [3.0.5] 2018-08-14

### Fixed

- Preventing `complex` from matching `number`.

## [3.0.4] 2018-08-13

### Fixed

- Fixed a bug in the complex value type where single function-like values, like `grayscale(0%)` aren't recognised as complex value types.

## [3.0.3] 2018-06-28

### Fixed

- Fixing error in `tsconfig.json` that leaves code untranspiled.

## [3.0.2] 2018-06-27

### Fixed

- Improving color regex to pick 6-letter hex codes first.

## [3.0.1] 2018-06-27

### Fixed

- Fixing template algo.

## [3.0.0] 2018-06-22

### Removed

- Removed new `combo` in favour of a single unified `complex` value type that can handle mixed number and color strings.

## [2.0.1] 2018-06-21

### Fixed

- Now finding colors containing spaces within combo values.

## [2.0.0] 2018-06-20

### Added

- New units: `vh`, `vw`
- New space-delimited combo type
- Strengthened unit type tests
- Color types can accept already-parsed numbers
