import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  typescript: {
    reactDocgen: 'react-docgen',
    check: false
  },
  features: { storyStoreV7: true },
  webpackFinal: async (config: any) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  }
  // webpackFinal: config => {
  //   config.resolve.modules = [...(config?.resolve?.modules || []), path.resolve(__dirname, '../src')]

  //   return config
  // }
} as StorybookConfig
