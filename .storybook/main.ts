import { dirname, join } from 'path'
import type { StorybookConfig } from 'storybook-react-rsbuild'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/preview-api')
  ],
  staticDirs: ['../public'],
  framework: 'storybook-react-rsbuild',
  typescript: {
    reactDocgen: 'react-docgen',
    check: false
  }
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
