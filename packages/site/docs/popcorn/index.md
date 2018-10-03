# Popcorn

Popcorn is the Lodash of animation.

It contains utility functions to help animation and UI developers manipulate values over time and space.

## Features

- **Powerful interpolation:** [The powerful `interpolate`](/api/interpolate) function can map a range of numbers onto another range of numbers, colors and complex strings.
- **Linear RGB mixing:** Hex and RGB values are mixed as linear RGB, which avoids the usual brightness dips in many animation libraries. [Learn more](https://www.youtube.com/watch?v=LKnqECcg6Gw)
- **Tiny:** Import only what you need with ES6 imports.

## Install

### Package managers

Popcorn is currently available as `@popmotion/popcorn` on npm.

```bash
npm install @popmotion/popcorn
```

```bash
yarn add @popmotion/popcorn
```

### File download

Download or link to the [latest version of Popcorn](https://unpkg.com/popcorn/dist/popcorn.min.js). All functions will be available on the `popcorn` global variable (e.g. `popcorn.velocityPerSecond`).
