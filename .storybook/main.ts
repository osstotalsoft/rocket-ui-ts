// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc')
  ],
  staticDirs: ['../public'],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {}
  },
  typescript: {
    reactDocgen: 'react-docgen',
    check: false
  },
  webpackFinal: async (config: any) => {
    config.resolve.plugins = [new TsconfigPathsPlugin({ configFile: join(__dirname, '../tsconfig.json') })]
    return config
  }
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
