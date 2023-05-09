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

## Contributing guide

When using Visual Studio Code please follow these steps: [Editor Setup for VSCode](https://yarnpkg.com/getting-started/editor-sdks#vscode) (allows VSCode to read .zip yarn cache files and supports features like go-to-definition).

### - Build

```javascript
yarn install
yarn build
```

### - Test

```javascript
yarn test
```

### - Testing local packages

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

## License

rocket-ui-ts is licensed under the [MIT](LICENSE) license. @TotalSoft
