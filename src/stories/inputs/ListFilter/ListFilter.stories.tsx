// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ListFilter } from 'components'
import WithChildFiltersPreview from './WithChildFiltersPreview'
import DefaultPreview from './DefaultPreview'
import UserPreferencesPreview from './UserPreferencesPreview'
import DownloadButtonPreview from './DownloadButtonPreview'
import VisibleFiltersPreview from './VisibleFiltersPreview'
import VisibleFieldsPreview from './VisibleFieldsPreview'
import CustomPreview from './CustomPreview'

const meta: Meta<typeof ListFilter> = {
  title: 'Components/Inputs/ListFilter',
  component: ListFilter,
  tags: ['autodocs']
} satisfies Meta<typeof ListFilter>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The minimal ListFilter component
 */
export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <ListFilter 
          filters={filters}
          onChangeFilterValue={handleFilterPropertyChange}
          sortableColumns={sortableColumns}
          localizedStrings={localizedStrings}
        />
        `,
        format: true
      }
    }
  },
  render: () => <DefaultPreview />
}

/**
 * When given additional filters as child components the search field has an expand button that reveals them
 */
export const ChildFilters: Story = {
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
        >
          {children}
        </ListFilter>
          `,
        format: true
      }
    }
  },
  render: () => <WithChildFiltersPreview />
}

/**
 * The component can display a download button for exporting the contents of the list to Excel or CSV
 */
export const DownloadButton: Story = {
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
  render: () => <DownloadButtonPreview />
}


/**
 * Which child filters are visible can be customized using the visibleFilters prop
 */
export const VisibleFilters: Story = {
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
        visibleFilters={localVisibleFilters}
        >
          {children}
        </ListFilter>
          `,
        format: true
      }
    }
  },
  render: () => <VisibleFiltersPreview />
}


/**
 * The data displayed within the list can be customized using the visibleFields prop
 */
export const VisibleFields: Story = {
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
        handleVisibleFieldsChange={handleVisibleFieldsChange}
        visibleFields={localVisibleFields}
        >
          {children}
        </ListFilter>
          `,
        format: true
      }
    }
  },
  render: () => <VisibleFieldsPreview />
}


/**
 * Predetermined filter configurations can be saved and applied using the userPreferences prop
 */
export const UserPreferences: Story = {
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
        visibleUserPreferences={true}
        userPreferences={localUserPreferences}
        selectedUserPreference={selectedUserPreference}
        onUserPreferenceChanged={onUserPreferenceChanged}
        onAddUserPreference={onAddUserPreference}
        onListDeleteChanged={onListDeleteChanged}
        onListImplicitChanged={onListImplicitChanged}
        >
          {children}
        </ListFilter>
          `,
        format: true
      }
    }
  },
  render: () => <UserPreferencesPreview />
}

/**
 * An example that allows enabling/disabling the optional ListFilter features. The user preferences feature applies to the visible filters and fields as well
 */
export const Custom: Story = {
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
  render: () => <CustomPreview />
}