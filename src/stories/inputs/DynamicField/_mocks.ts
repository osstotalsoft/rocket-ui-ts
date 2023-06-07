import { ControlType } from 'components/inputs/DynamicField/types'
import { options } from '../Autocomplete/_mocks'

export const controlTypes = Object.values(ControlType)

export type ControlData = {
  type: ControlType
  link?: {
    label: string
    kind?: string
    story?: string
    url?: string
  }
  props: {
    name: string
    label: string
    value: any
    type: ControlType
    options?: any[]
    resolver?: any
  }[]
}

export const controlData: ControlData[] = [
  {
    type: ControlType.Text,
    link: {
      label: 'TextField',
      kind: 'Components/Inputs/TextField',
      story: 'Docs'
    },
    props: [
      {
        name: 'helperText',
        label: 'Helper text',
        value: '',
        type: ControlType.Text
      },
      {
        name: 'error',
        label: 'Has errors',
        value: false,
        type: ControlType.Checkbox
      },
      {
        name: 'isClearable',
        label: 'Is clearable',
        value: false,
        type: ControlType.Checkbox
      }
    ]
  },
  {
    type: ControlType.Integer,
    link: {
      label: 'TextField',
      kind: 'Components/Inputs/TextField',
      story: 'Docs'
    },
    props: [
      {
        name: 'helperText',
        label: 'Helper text',
        value: '',
        type: ControlType.Text
      },
      {
        name: 'minValue',
        label: 'Minimum value',
        value: 1,
        type: ControlType.Numeric
      },
      {
        name: 'maxValue',
        label: 'Maximum value',
        value: 100,
        type: ControlType.Numeric
      },
      {
        name: 'error',
        label: 'Has errors',
        value: false,
        type: ControlType.Checkbox
      },
      {
        name: 'isClearable',
        label: 'Is clearable',
        value: false,
        type: ControlType.Checkbox
      }
    ]
  },
  {
    type: ControlType.Numeric,
    link: {
      label: 'TextField',
      kind: 'Components/Inputs/TextField',
      story: 'Docs'
    },
    props: [
      {
        name: 'helperText',
        label: 'Helper text',
        value: '',
        type: ControlType.Text
      },
      {
        name: 'minValue',
        label: 'Minimum value',
        value: 1,
        type: ControlType.Numeric
      },
      {
        name: 'maxValue',
        label: 'Maximum value',
        value: 100,
        type: ControlType.Numeric
      },
      {
        name: 'decimalScale',
        label: 'Decimal scale',
        value: 2,
        type: ControlType.Integer
      },
      {
        name: 'thousandSeparator',
        label: 'Thousand separator',
        value: ',',
        type: ControlType.Text
      },
      {
        name: 'error',
        label: 'Has errors',
        value: false,
        type: ControlType.Checkbox
      },
      {
        name: 'isClearable',
        label: 'Is clearable',
        value: false,
        type: ControlType.Checkbox
      }
    ]
  },
  {
    type: ControlType.Date,
    link: {
      label: 'DateTime',
      kind: 'Components/Inputs/DateTime',
      story: 'Docs'
    },
    props: [
      {
        name: 'helperText',
        label: 'Helper text',
        value: '',
        type: ControlType.Text
      },
      {
        name: 'showPicker',
        label: 'Show picker',
        value: 'date',
        type: ControlType.Autocomplete,
        options: ['date', 'time', 'dateTime']
      },
      {
        name: 'error',
        label: 'Has errors',
        value: false,
        type: ControlType.Checkbox
      },
      {
        name: 'clearable',
        label: 'Is clearable',
        value: false,
        type: ControlType.Checkbox
      }
    ]
  },
  {
    type: ControlType.Checkbox,
    link: {
      label: 'Checkbox',
      url: 'https://mui.com/material-ui/react-checkbox/'
    },
    props: [
      {
        name: 'disabled',
        label: 'Is disabled',
        value: false,
        type: ControlType.Checkbox
      },
      {
        name: 'indeterminate',
        label: 'Indeterminate',
        value: false,
        type: ControlType.Checkbox
      }
    ]
  },
  {
    type: ControlType.Autocomplete,
    link: {
      label: 'Autocomplete',
      kind: 'Components/Inputs/Autocomplete',
      story: 'Docs'
    },
    props: [
      {
        name: 'helperText',
        label: 'Helper text',
        value: '',
        type: ControlType.Text
      },
      {
        name: 'error',
        label: 'Has errors',
        value: false,
        type: ControlType.Checkbox
      },
      {
        name: 'isClearable',
        label: 'Is clearable',
        value: false,
        type: ControlType.Checkbox
      },
      {
        name: 'withLoadOptions',
        label: 'With load options',
        value: false,
        resolver: {
          loadOptions: async () => {
            await new Promise(resolve => setTimeout(resolve, 1500))
            return options
          }
        },
        type: ControlType.Checkbox
      }
    ]
  },
  {
    type: ControlType.Custom,
    props: []
  }
]
