import React from 'react'

export enum ControlType {
  Text = 'Text',
  Integer = 'Integer',
  Numeric = 'Numeric',
  Date = 'Date',
  Checkbox = 'Checkbox',
  Autocomplete = 'Autocomplete',
  Custom = 'Custom'
}

export type DynamicFieldProps<TCustomComponentProps extends object = any, TAutocompleteOptions = any> = {
  controlType: ControlType
  id?: string
  value?: unknown
  label?: string
  onChange?: (value: unknown) => void
  options?: readonly TAutocompleteOptions[]
  loadOptions?: (input?: string) => Promise<readonly TAutocompleteOptions[]>
  isPaginated?: boolean
  error?: boolean
  helperText?: React.ReactNode
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
  CustomComponent?: (props: TCustomComponentProps) => JSX.Element
  customComponentProps?: TCustomComponentProps
  [key: string]: any
}
