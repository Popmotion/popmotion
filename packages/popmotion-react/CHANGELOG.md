# Changelog

Popmotion x React adheres to [Semantic Versioning](http://semver.org/).

## [1.1.0] 2017-07-06

### Added
- Support for `TransitionGroup` lifecycle methods.
- Changelog

### Fixed
- `setStateTo` on init was being provided `this.value` as `e`.
- `previousState` was being incorrectly sent as `state`.
