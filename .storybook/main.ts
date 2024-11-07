import { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/preview-api'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc')
  ],
  staticDirs: ['../public'],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {}
  },
  core: {
    builder: getAbsolutePath('@storybook/builder-webpack5')
  },
  typescript: {
    reactDocgen: 'react-docgen',
    check: false
  },
  webpackFinal: async (config: any) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  }
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
