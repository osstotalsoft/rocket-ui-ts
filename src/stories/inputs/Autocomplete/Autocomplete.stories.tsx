// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete as AutocompleteComponent, Typography } from 'components'
import { CreatablePreview } from './CreatablePreview'
import { DefaultPreview } from './DefaultPreview'
import { OptionTypesPreview } from './OptionTypesPreview'
import { MultipleSelectionPreview } from './MultipleSelectionPreview'
import { customOptions, loadFilteredOptionsPaginated, loadOptions, options } from './_mocks'
import { RequiredPreview } from './RequiredPreview'
import { CustomOptionPreview } from './CustomOptionPreview'
import { GroupedPreview } from './GroupedPreview'
import { Stack } from '@mui/material'
import { all, has } from 'ramda'
import FormattedJson from './components/FormattedJson'

const meta: Meta<typeof AutocompleteComponent> = {
  title: 'Components/Inputs/Autocomplete',
  component: AutocompleteComponent
} satisfies Meta<typeof AutocompleteComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default Autocomplete component.
 *
 * The value must be chosen from a predefined set of allowed values.
 */
export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Autocomplete"
            value={value}
            onChange={onChangeFn}
            options={optionsArray}
          />
        `,
        format: true
      }
    }
  },
  args: {
    label: 'Basic Autocomplete',
    options
  },
  render: args => <DefaultPreview {...args} />
}

/**
 * By default, the component accepts the following options structures:
 * 
```typescript
interface AutocompleteOption {
  id: any
  name: string
}
// or
type AutocompleteOption = string;
```
for instance:

```typescript
const options = [
  { name: 'The Godfather', id: 1 },
  { name: 'Pulp Fiction', id: 2 },
]
// or
const options = ['The Godfather', 'Pulp Fiction']
```
*/
export const OptionTypes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <>
          <Autocomplete
            label="Autocomplete"
            value={{ id: 1, name: 'Cat' }}
            options={[{ id: 1, name: 'Cat' }, { id: 2, name: 'Dog' }, { id: 3, name: 'Turtle' }]}
          />
          <Autocomplete
            label="Numeric Autocomplete"
            value={1}
            options={[1,2,3]}
          />
          <Autocomplete
            label="String Autocomplete"
            value={"first option"}
            options={["first option", "second option", "third option"]}
          />
        </>
        `,
        format: true
      }
    }
  },
  render: args => <OptionTypesPreview {...args} />
}

/**
 * To customize the rendering of the object, the user can use the `renderOption` function property. See its definition 
 *
 * ```javascript
   // Render the option, use `getOptionLabel` by default.
   //
   // @param {object} props The props to apply on the li element.
   // @param {T} option The option to render.
   // @param {object} state The state of each option.
   // @param {object} ownerState The state of the Autocomplete component.
   // @returns {ReactNode}
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement> & { key: any },
    option: T,
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<T, Multiple, DisableClearable, FreeSolo, ChipComponent>
  ) => React.ReactNode
  ```
* Assuming the options array looks as follows, check-out the custom rendering function presented in the next example.
```
const customOptions = [
  { id: 1, name: 'Cat', icon: Pets, description: 'A cat is the best pet' },
  { id: 2, name: 'Dog', icon: EmojiNature, description: 'A dos is a man best friend' },
  { id: 3, name: 'Turtle', icon: BugReport, description: 'Turtles are slow' },
  { id: 4, name: 'Horse', icon: BedroomBaby , description: 'Horses are elegant.'}
]
```
*/
export const OptionRendering: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Custom Options"
            value={value}
            onChange={setValue}
            options={options}
            renderOption={(props, option) => (
              <li {...props}>
                <Box component={option.icon} width={25} height={25} marginRight="15px" />
                <Box>
                  <Typography variant="body1">{option.name}</Typography>
                  <Typography variant="body2" color="error">
                    {option.description}
                  </Typography>
                </Box>
              </li>
            )}
          />
        `,
        format: true
      }
    }
  },
  args: {
    label: 'Custom Options',
    options: customOptions
  },
  render: args => <CustomOptionPreview {...args} />
}

/**
 * By setting the `creatable` property to `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options and can add
 * his own values.
 *
 * The label that is displayed before adding a new option is also configurable using `createdLabel` property. By default it's set to "Add"
 */
export const Creatable: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Creatable Autocomplete"
            value={value}
            onChange={setNumericValue}
            creatable={true}
            createdLabel={"New option"}
            options={options}
          />
        `,
        format: true
      }
    }
  },
  render: () => <CreatablePreview />
}

/**
 * Also known as tags, the user is allowed to enter more than one value.
 * This is possible by setting the `isMultiSelection` property to `true`.
 */
export const MultipleSelection: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Multiple Selection"
            value={value}
            onChange={setValue}
            options={options}
            isMultiSelection
          />
        `,
        format: true
      }
    }
  },
  render: () => <MultipleSelectionPreview />
}

/**
 * Multiple selection can also be done using checkboxes by setting the `withCheckboxes` property to `true`.
 */
export const Checkboxes: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Autocomplete"
            value={value}
            onChange={onChangeFn}
            options={optionsArray}
            isMultiSelection
            withCheckboxes
          />
        `,
        format: true
      }
    }
  },
  args: {
    label: 'Multiple Selection with Checkboxes',
    options,
    isMultiSelection: true,
    withCheckboxes: true
  },
  render: args => <AutocompleteComponent {...args} />
}

/**
 * The component supports loading options asynchronously. It basically waits for the component to be interacted with to load the options.
 *
 * During the `loading` state, it displays a progress state as long as the network request is pending.
 */
export const LazyLoading: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Autocomplete"
            value={value}
            onChange={onChangeFn}
            loadOptions={loadOptionsFn}
          />
        `,
        format: true
      }
    }
  },
  args: {
    label: 'Lazy Loading',
    loadOptions
  },
  render: args => <DefaultPreview {...args} value={{ id: 1, name: 'Cat' }} />
}

/**
 * The component supports fetching data incrementally for large data sets. When the isPaginated prop is true, the loadOptions callback is fired when the user scrolls to the end of the options.
 *
 * The loadOptions function you provide must be async and it can receive the following 3 parameters:
 * the current value of the search input; the currently loaded options; an "additional" object used to accumulate information required for the incremental query, such as the current page (null by default)
 *
 * The loadOptions function must return an object with the shape {options: Array, hasMore: boolean, additional?: any}.
 * options will contain the new data to append, hasMore is used to determine if there is more data to fetch and the additional object will be passed to loadOptions on the next fetch
 */
export const LazyLoadingPaginated: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Autocomplete"
            value={value}
            onChange={onChangeFn}
            loadOptions={loadOptionsFn}
            isPaginated={true}
          />
        `,
        format: true
      }
    }
  },
  args: {
    label: 'Lazy Loading',
    loadOptions: loadFilteredOptionsPaginated,
    isPaginated: true
  },
  render: args => <DefaultPreview {...args} />
}

/**
 *  Various configurations using `TextField` inherited props. Check-out the code bellow.
 */
export const TextFieldInheritance: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete 
          required 
          label="Required" 
          options={options} 
        />
        <Autocomplete 
          error 
          label="Error" 
          options={options} 
        />
        <Autocomplete
          helperText="Please, select an option."
          label="Helper text"
          options={options}
        />
        <Autocomplete
          label="Variant outlined"
          options={options}
          inputTextFieldProps={{ variant: 'outlined' }}
        />
        `,
        format: true
      }
    }
  },
  render: () => <RequiredPreview />
}

/**
 * You can group the options with the `groupBy` prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.
 *
 * To control how the groups are rendered, provide a custom renderGroup prop. This is a function that accepts an object with two fields:
 * - `group` — a string representing a group name
 * - `children` — a collection of list items that belong to the group
 * The following demo shows how to use this prop to define custom markup and override the styles of the default groups:
 */
export const Grouped: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import React, { useCallback, useState } from 'react'
import { Autocomplete } from 'components'
import { emptyArray } from 'components/utils/constants'
import { groupedOptions } from './_mocks'
import { styled } from '@mui/material'

const GroupHeader = styled('div')(({ theme }) => ({
  ...theme.typography.defaultFont,
  padding: '4px 10px',
  fontWeight: 'bold'
}))

const GroupItems = styled('ul')(({ theme }) => ({
  ...theme.typography.defaultFont,
  paddingLeft:'5px'
}))

export const GroupedPreview = (props: any) => {
  const [value, setValue] = useState(emptyArray)

  const groupBy = useCallback((option: any) => option.category?.name, [])

  const renderGroup = useCallback(
    (params: any) => (
      <li key={params.key}>
        <GroupHeader>{params.group}</GroupHeader>
        <GroupItems>{params.children}</GroupItems>
      </li>
    ),
    []
  )

  return (
    <Autocomplete
      {...props}
      fullWidth
      value={value}
      onChange={setValue}
      options={groupedOptions}
      groupBy={groupBy}
      renderGroup={renderGroup}
    />
  )
}
        `,
        format: true
      }
    }
  },
  args: {
    label: 'Grouped Options'
  },
  render: args => <GroupedPreview {...args} />
}

/**
 * You can give your autocomplete both the option or just it's `valueKey` in the `value` prop.
 * This will render the option from the `options` array when found, otherwise it will render the value as it is.
 * When you have multiple selection enabled, the `value` array can be a mix between.
 */
export const MixedValue: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Autocomplete
          label="Autocomplete"
          value={optionsArray[0].id}
          options={optionsArray}
        />
        <Autocomplete
          label="Multiple Selection"
          value={[optionsArray[0].id, optionsArray[1]]}
          options={optionsArray}
          isMultiSelection
        />
        `,
        format: true
      }
    }
  },
  args: {
    options
  },
  render: args => {
    const options: readonly any[] = args.options
    const value = options[0].id
    const values = [options[0].id, options[1]]
    return (
      <Stack spacing={2}>
        <Stack spacing={2} direction="row" alignItems="flex-end">
          <AutocompleteComponent label="Autocomplete" value={value} options={options} />
          <Typography variant={'body1'}>{`value={${value}}`}</Typography>
        </Stack>
        <Stack spacing={2} direction="row" alignItems="flex-end">
          <AutocompleteComponent label="Multiple Selection" value={values} options={options} isMultiSelection />
          <Typography variant={'body1'}>{`value={${JSON.stringify(values)}}`}</Typography>
        </Stack>
      </Stack>
    )
  }
}
