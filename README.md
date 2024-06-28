<!--
 Copyright (c) TotalSoft.
 This source code is licensed under the MIT license.
-->

<h1 align="center">Rocket-UI</h1>

<p align="center">
  <a href="https://osstotalsoft.github.io/rocket-ui-ts">
    <img width="200" src="src/stories/assets/img/rocket.png">
  </a>
</p>

<p align="center">
  <a href="https://osstotalsoft.github.io/rocket-ui-ts">Rocket UI Components Collection</a>
</p>

> A set of reusable and composable React components built on top of Material UI core for developing fast and friendly web applications interfaces.

# Installation

You first need to install `@totalsoft/rocket-ui` the package

```
npm install @totalsoft/rocket-ui
```

Then you can use anything you need from the library.

```javascript
import { IconButton } from '@totalsoft/rocket-ui'
```

# Contributing guide

> This library uses Yarn 2 Plug'n'Play, see its [documentation](https://yarnpkg.com/migration/guide) in order to install it locally. 

When using Visual Studio Code please follow these steps: [Editor Setup for VSCode](https://yarnpkg.com/getting-started/editor-sdks#vscode) (allows VSCode to read .zip yarn cache files and supports features like go-to-definition).

## - Build

```javascript
yarn install
yarn build
```

## - Test

```javascript
yarn test
```

## - Testing the build and package creation locally

First create the build, the result will be located in the `dist` folder

```
yarn run build
```

Then, generate the npm package locally. It will generate a `.tgz` file, this is basically a compressed copy of a target directory. You can install this with `npm i ./file.tgz` or just open it in explorer.

```
npm pack
```

## - Testing local packages

To test the package locally without publishing to a npm repository, you can create a link in your testing project. For example:

```shell
npm link <YOUR_PATH>\rocket-ui-ts
```

If the package reference does not already exist in your testing project, you can add it without specifying the version:

```json
{
  "dependencies": {
    ...
    "@totalsoft/rocket-ui": "",
  }
}
```

For additional options see the [official documentation](https://docs.npmjs.com/cli/v8/commands/npm-link)

## Running Storybook locally
This project's documentation is written using Storybook. 

To start it locally run the following command in your terminal:
`yarn storybook` 

Or use the existing `Storybook Debug` VSCode launch configuration, to start it in debug mode.

# License

rocket-ui-ts is licensed under the [MIT](LICENSE) license. @TotalSoft
