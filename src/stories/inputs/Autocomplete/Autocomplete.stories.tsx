// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete as AutocompleteComponent } from 'components'
import { CreatablePreview } from './CreatablePreview'
import { DefaultPreview } from './DefaultPreview'
import { OptionTypesPreview } from './OptionTypesPreview'
import { MultipleSelectionPreview } from './MultipleSelectionPreview'
import { CheckboxesPreview } from './CheckboxesPreview'
import { customOptions, loadFilteredOptionsPaginated, loadOptions, options } from './_mocks'
import { StylingPreview } from './StylingPreview'
import { RequiredPreview } from './RequiredPreview'
import { CustomOptionPreview } from './CustomOptionPreview'
import { Stack } from '@mui/material'

const meta: Meta<typeof AutocompleteComponent> = {
  title: 'Components/Inputs/Autocomplete',
  component: AutocompleteComponent,
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
    options,
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null
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
// or by setting `simpleValue` property to true
type AutocompleteOption = string;
```
for instance:

```typescript
const options = [
  { name: 'The Godfather', id: 1 },
  { name: 'Pulp Fiction', id: 2 },
]
// or with `simpleValue` property to true
const options = ['The Godfather', 'Pulp Fiction']
```
*/
export const OptionTypes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Numeric Autocomplete"
            value={1}
            onChange={setNumericValue}
            simpleValue={true}
            options={[1,2,3]}
          />
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
 renderOption?: (
  props: React.HTMLAttributes<HTMLLIElement>, // @param {object} props The props to apply on the li element.
    option: T, // @param {T} option The option to render.
    state: AutocompleteRenderOptionState, // @param {object} state The state of the component.
  ) => React.ReactNode;
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
    options: customOptions,
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null
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
  render: args => <CreatablePreview {...args} />
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
  render: args => <MultipleSelectionPreview {...args} />
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
    label: 'Multiple Selection',
    options,
    isMultiSelection: true,
    withCheckboxes: true,
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null
  },
  render: args => <CheckboxesPreview {...args} />
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
    loadOptions,
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null
  },
  render: args => (
    <Stack spacing={3} direction={'row'}>
      <DefaultPreview {...args} value={{ id: 1, name: 'Cat' }} />
      <DefaultPreview {...args} label={`${args.label} with simpleValue`} simpleValue value={1} />
    </Stack>
  )
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
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null,
    isPaginated: true
  },
  render: args => <DefaultPreview {...args} />
}

export const Styling: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
          open
          value={value}
          onChange={onChange}
          placeholder={'Placeholder'}
          typographyContentColor={'error'}
        />
        <Autocomplete
          options=[...]
          inputSelectedColor={'#26C6DA'}
          value={value}
          onChange={onChange}
        />
        `,
        format: true
      }
    }
  },
  render: () => <StylingPreview />
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
          value={requiredValue} 
          onChange={setRequiredValue} 
          options={options} 
        />
        <Autocomplete 
          error 
          label="Error" 
          value={errorValue} 
          onChange={setErrorValue} 
          options={options} 
        />
        <Autocomplete
          helperText="Please, select an option."
          label="Helper text"
          value={helperValue}
          onChange={setHelperValue}
          options={options}
        />
        <Autocomplete
          label="Variant outlined"
          value={helperValue}
          onChange={setHelperValue}
          options={options}
          inputTextFieldProps={{ variant: 'outlined' }}
        />
        `,
        format: true
      }
    }
  },
  render: args => <RequiredPreview {...args} />
}
