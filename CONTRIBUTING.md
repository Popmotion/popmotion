# How to contribute

Although Popmotion is run by a single individual, contributions are gladly welcomed!

This guide will run through the types of contributions you can make and how to set the Popmotion repo up, ready for local development.

- [Types of Contribution](#types-of-contribution)
  - [Bugs](#bugs)
  - [Features](#features)
- [Development](#development)
- [Codebase Overview](#codebase-overview)
  - [Package Hierarchy](#package-hierarchy)
- [Get in Touch](#get-in-touch)

## Types of Contribution

### Bugs

Open issues can be found on our [GitHub issues](https://github.com/Popmotion/popmotion/issues) page.

If you begin working on a bug, post your intent on the issue itself. This will prevent more than one person tackling a bug at once.

If the bug you wish to work on doesn't currently have an issue, make one and label it "Bug".

### Features

Before adding any features, open a Feature Proposal as a [new issue](https://github.com/Popmotion/popmotion/issues).

This will let us talk through your proposed API and/or implementation before you spend time on it.

## Development

Follow these steps to get your code PR-ready:

1. [Fork the Popmotion repo](https://github.com/Popmotion/popmotion).
2. Clone your fork locally.
3. Run `yarn` in the repo root ([install Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) if necessary).
4. Add your code and supporting tests.
5. If this is a feature that requires doc changes, make as necessary.
6. Update `CHANGELOG.md`.
7. Ensure your changes build by running `yarn build` in the appropriate package directory(s).

## Codebase Overview

Other than [Stylefire](https://github.com/popmotion/stylefire) and [Framesync](https://github.com/popmotion/framesync), Popmotion is a monorepo. All Popmotion and Pose packages are contained in the [`packages` directory](https://github.com/Popmotion/popmotion/tree/master/packages).

All code and tests must be written in Typescript.

### Package Hierarchy

The 

## Get in Touch

If you need help, you can reach out to the [official Popmotion Twitter](https://twitter.com/popmotionjs) account or post a discussion in our [Spectrum community](https://spectrum.chat/popmotion).
