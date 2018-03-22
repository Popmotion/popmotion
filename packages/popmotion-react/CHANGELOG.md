# Changelog

Popmotion x React adheres to [Semantic Versioning](http://semver.org/).

## [2.1.1] 2018-03-22

* Updating `v` prop updates `v` function.

## [2.1.0] 2017-12-12

* Adding `context`.

## [2.0.0] 2017-12-12

* Upgrading to Popmotion 8.

## [1.1.1] 2017-08-24

* Changing `popmotion` to peer dependency.

## [1.1.0] 2017-07-06

### Added

* Support for `TransitionGroup` lifecycle methods.
* Changelog

### Fixed

* `setStateTo` on init was being provided `this.value` as `e`.
* `previousState` was being incorrectly sent as `state`.
