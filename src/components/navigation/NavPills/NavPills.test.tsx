import React from 'react'
import { render } from '../../../testingUtils'
import NavPills from '../../../components/navigation/NavPills'
import IconButton from '../../../components/buttons/IconButton'
import { Color } from '../../../components/navigation/NavPills/types'
import getTheme from '../../themes'
import { fireEvent, screen } from '@testing-library/react'

const tabs = [
  {
    label: 'Item one',
    content: 'Content 1'
  },
  {
    label: 'Item two',
    content: 'Content 2'
  }
]

const theme = getTheme() as any

const basicColors = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'info' },
  { color: 'success' },
  { color: 'warning' },
  { color: 'error' },
  { color: 'rose' },
  { color: 'white' },
  { color: 'dark' }
]

const gradients = [
  {
    color: 'primary',
    background: theme.palette.gradients.primary
  },
  {
    color: 'secondary',
    background: theme.palette.gradients.secondary
  },
  {
    color: 'success',
    background: theme.palette.gradients.success
  },
  {
    color: 'info',
    background: theme.palette.gradients.info
  },
  {
    color: 'rose',
    background: theme.palette.gradients.rose
  },
  {
    color: 'error',
    background: theme.palette.gradients.danger
  },
  {
    color: 'warning',
    background: theme.palette.gradients.warning
  }
]

const actions = [<IconButton key={1} type="add" />, <IconButton key={2} type="delete" />]

describe('NavPills', () => {
  it('renders tabs', async () => {
    render(<NavPills tabs={tabs} />)
    const tabElements = await screen.findAllByRole('tab')

    expect(tabElements?.length).toStrictEqual(2)
    expect(screen.getByText('Item one')).toBeInTheDocument()
    expect(screen.getByText('Item two')).toBeInTheDocument()
  })

  it('renders the selected tab content', async () => {
    render(<NavPills tabs={tabs} />)
    const tabPanelElement = await screen.findAllByRole('tab-panel')

    expect(tabPanelElement?.length).toStrictEqual(1)
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('renders vertical tabs', async () => {
    render(<NavPills tabs={tabs} orientation="vertical" />)

    expect(screen.getByRole('vertical-tab-wrapper')).toBeInTheDocument()
    expect(screen.getByRole('vertical-tabs')).toBeInTheDocument()
  })

  describe('Tabs styling', () => {
    it('displays indicator default color', async () => {
      render(<NavPills tabs={tabs} color={'primary'} />)
      const elements = await screen.findAllByText('')
      const indicator = elements.find(a => a.className.includes('MuiTabs-indicator'))

      expect(indicator).toHaveStyle(`background-color: ${theme.palette['primary'].main}`)
    })

    it.each(basicColors)(
      'displays the correct color for the indicator component when selectedColor = { $color }',
      async ({ color }) => {
        render(<NavPills tabs={tabs} selectedColor={color as Color} />)
        const tabElements = await screen.findAllByRole('tab')

        expect(tabElements?.[0]).toHaveStyle(`color: ${theme.palette[color].main}`)
      }
    )

    it('displays the correct styling when sending both color and selectColor properties, color overrides selectColor', async () => {
      const color = 'rose'
      render(<NavPills tabs={tabs} selectedColor={'dark'} color={color} />)
      const tabElements = await screen.findAllByRole('tab')

      expect(tabElements?.[0]).toHaveStyle(`color: ${theme.palette[color].contrastText}`)
      expect(tabElements?.[0]).toHaveStyle(`backgroundColor: ${theme.palette[color].main}`)
    })

    it('displays secondary color for selectorColor by default', async () => {
      render(<NavPills tabs={tabs} />)
      const tabElements = await screen.findAllByRole('tab')
      expect(tabElements?.[0]).toHaveStyle(`color: ${theme.palette['secondary'].main}`)
    })

    it.each(gradients)('applies the correct gradient background for $color color', async ({ color, background }) => {
      render(<NavPills tabs={tabs} color={color as Color} gradient />)
      const tabElements = await screen.findAllByRole('tab')
      expect(tabElements?.[0]).toHaveStyle(`background: ${background}`)
    })
  })

  it('renders a list of actions', async () => {
    render(<NavPills tabs={tabs} actions={actions} />)
    const actionElements = await screen.findAllByRole('action')

    expect(actionElements?.length).toStrictEqual(2)
  })

  it('renders a list of actions for vertical tabs', async () => {
    render(<NavPills tabs={tabs} actions={actions} orientation="vertical" />)
    const actionElements = await screen.findAllByRole('action')

    expect(actionElements?.length).toStrictEqual(2)
  })

  it('handles tab changes by default', () => {
    render(<NavPills tabs={tabs} />)
    fireEvent.click(screen.getByText('Item two'))

    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })

  it('uses the correct onChange function when the components is controlled', () => {
    const handleChange = jest.fn()
    render(<NavPills tabs={tabs} onChange={handleChange} />)
    fireEvent.click(screen.getAllByRole('tab')[1])

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
