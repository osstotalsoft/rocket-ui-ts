// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ListFilter } from 'components'
import { localizedStrings, sortableColumns } from './_mocks'
import ListFilterDefaultDecorator from './ListFilterDefaultDecorator'
import { filtersWithChildren,  visibleFields, visibleFilters, userPreferencesList } from './_mocks'
import { useArgs } from '@storybook/preview-api'

const meta: Meta<typeof ListFilter> = {
  title: 'Components/Inputs/ListFilter',
  component: ListFilter,
  tags: ['autodocs'],
  argTypes: {
    selectedUserPreference: {
      control: 'object',
      table: { type: {summary: 'object', detail:null}}
    },
    onUserPreferenceChanged: {
      control: {type: 'function'},
      table: { type: {summary: 'func', detail:null}}
    },
    onListImplicitChanged: {
      control: {type: 'function'},
      table: { type: {summary: 'func', detail:null}}
    },
    onListDeleteChanged: {
      control: {type: 'function'},
      table: { type: {summary: 'func', detail:null}}
    },
    onAddUserPreference: {
      control: {type: 'function'},
      table: { type: {summary: 'func', detail:null}}
    },
    userPreferences: {
      control: {type: 'array'},
      table: { type: {summary: 'array', detail:null}}
    }
  }
} satisfies Meta<typeof ListFilter>

export default meta
type Story = StoryObj<typeof meta>

/**
 * An example that allows enabling/disabling the optional ListFilter features. The user preferences feature applies to the visible filters and fields as well
 */
export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <ListFilter
        filters={filters}
        sortableColumns={sortableColumns}
        localizedStrings={localizedStrings}
        onChangeFilterValue={handleFilterPropertyChange}
        handleVisibleFilterChange={handleVisibleFilterChange}
        handleVisibleFieldsChange={handleVisibleFieldsChange}
        visibleFields={localVisibleFields}
        visibleFilters={localVisibleFilters}
        visibleUserPreferences={true}
        userPreferences={localUserPreferences}
        selectedUserPreference={selectedUserPreference}
        onUserPreferenceChanged={onUserPreferenceChanged}
        onAddUserPreference={onAddUserPreference}
        onListDeleteChanged={onListDeleteChanged}
        onListImplicitChanged={onListImplicitChanged}
        downloadEnabled
        downloadButtonVisible={true}
        onDownload={onDownload}
        >
          {children}
        </ListFilter>
        `,
        format: true
      }
    }
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs()
      return (
      <ListFilterDefaultDecorator args={args} updateArgs={updateArgs}>
        <Story/>
      </ListFilterDefaultDecorator>
      )
    }],
  args: {
    filters: filtersWithChildren,
    sortableColumns: sortableColumns,
    localizedStrings: localizedStrings,
    downloadEnabled:false,
    visibleUserPreferences:false,
    onDownload:()=>{},
    visibleFields: visibleFields,
    visibleFilters: visibleFilters,
    userPreferences: userPreferencesList,
    selectedUserPreference: userPreferencesList[0]
  }
}