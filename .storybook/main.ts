// import type { StorybookConfig } from '@storybook/react-webpack5'
import * as dedent from 'dedent'
import path from 'path'

const config: any = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // 'storybook-addon-export-to-codesandbox',
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     parser: 'typescript',
    //     injectDecorator: false,
    //     rule: {
    //       // test: [/\.stories\.jsx?$/], This is default
    //       include: [path.resolve(__dirname, '../src/components')] // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: false }
    //     }
    //   }
    // }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  // typescript: {
  //   // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
  //   reactDocgen: 'react-docgen',
  //   // skipBabel: true,
  //   check: false
  // },
  // exportToCodeSandbox: {
  //   // Dependencies that should be included with every story
  //   requiredDependencies: {
  //     react: 'latest',
  //     'react-dom': 'latest', // for React
  //     'react-scripts': 'latest' // necessary when using typescript in CodeSandbox
  //   }
  //   // Content of index.tsx in CodeSandbox
  //   // indexTsx: dedent`
  //   //         import * as ReactDOM from 'react-dom';
  //   //         import { STORY_NAME as Example } from './example';
  //   //         //
  //   //         // You can edit this example in "example.tsx".
  //   //         //
  //   //         ReactDOM.render(
  //   //             <ThemeProvider theme={theme}>
  //   //               <Example />
  //   //             </ThemeProvider>,
  //   //             document.getElementById('root'),
  //   //         );`
  // }
}
export default config
