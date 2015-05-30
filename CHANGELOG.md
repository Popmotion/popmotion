# Change log

Redshift adheres to [Semantic Versioning](http://semver.org/). Change log added v1.4.0.

## [1.4.0]

### Added
- Action Groups for controlling multiple Actions at once.
- Stagger method for Action Groups.
- DOM selection support for creating Actions prepopulated with DOM elements.

### Fixed
- Calling .play(preset) while Action was in progress failed to add that call to the play queue.
- Added check for Process timers before clearing as clearTimeout is costing ~.4ms.