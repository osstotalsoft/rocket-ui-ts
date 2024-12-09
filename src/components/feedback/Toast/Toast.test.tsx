import { fireEvent, renderHook, screen, waitFor } from '@testing-library/react'
import React, { act } from 'react'
import { render } from 'testingUtils'
import { Button, useToast, usePromiseToast, Typography } from '../../index'
import { emptyFunction } from '../../utils/constants'
import { Stack } from '@mui/material'

describe('Toast', () => {
  it.each([
    {
      variant: 'success',
      transitionType: 'Slide',
      position: 'top-center',
      expectedVariant: 'Toastify__toast--success',
      expectedTransition: 'Toastify__slide-enter--top-center ',
      expectedPosition: 'Toastify__toast-container--top-center'
    },
    {
      variant: 'info',
      transitionType: 'Zoom',
      position: 'top-right',
      expectedVariant: 'Toastify__toast--info',
      expectedTransition: 'Toastify__zoom-enter ',
      expectedPosition: 'Toastify__toast-container--top-right'
    },
    {
      variant: 'warning',
      transitionType: 'Bounce',
      position: 'bottom-right',
      expectedVariant: 'Toastify__toast--warning',
      expectedTransition: 'Toastify__bounce-enter--bottom-right',
      expectedPosition: 'Toastify__toast-container--bottom-right'
    },
    {
      variant: 'error',
      transitionType: 'Flip',
      position: 'bottom-center',
      expectedVariant: 'Toastify__toast--error',
      expectedTransition: 'Toastify__flip-enter',
      expectedPosition: 'Toastify__toast-container--bottom-center'
    },
    {
      variant: null,
      transitionType: 'Slide',
      position: 'top-center',
      expectedVariant: 'Toastify__toast--default',
      expectedTransition: 'Toastify__slide-enter--top-center ',
      expectedPosition: 'Toastify__toast-container--top-center'
    }
  ])(
    'Should render a toast of type: $variant with the correct specifications',
    async ({ variant, transitionType, position, expectedVariant, expectedTransition, expectedPosition }) => {
      const { result } = renderHook(() => useToast())

      render(
        <Button
          onClick={() =>
            result.current('This is a message!', variant as any, {
              transitionType: transitionType as any,
              position: position as any
            })
          }
        />
      )
      await act(async () => fireEvent.click(screen.getByRole('button')))

      await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass(expectedVariant, expectedTransition))
      await waitFor(() => expect(screen.getByRole('alert').parentNode.parentNode).toHaveClass(expectedPosition))
    }
  )

  it('Should close the toast when click-ing the x button', async () => {
    const { result } = renderHook(() => useToast())

    render(<Button onClick={() => result.current('This is a success message!', 'success')} />)

    await act(async () => fireEvent.click(screen.getByRole('button')))
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())

    await act(async () => fireEvent.click(screen.getByLabelText('close')))
    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument())
  })

  it('Toast should not close when click-ing on its container with closeOnClick disabled', async () => {
    const { result } = renderHook(() => useToast())

    render(<Button onClick={() => result.current('This is an error message!', 'error', { closeOnClick: false })} />)

    await act(async () => fireEvent.click(screen.getByRole('button')))
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())

    fireEvent.click(screen.getByRole('alert'))
    await waitFor(() => expect(screen.queryByRole('alert')).toBeInTheDocument())
  })
})

describe('Promise toast', () => {
  it('Promise toast should behave as expected', async () => {
    const resolveAfter3Sec = () => new Promise((_resolve, reject) => setTimeout(reject, 3000))
    const { result } = renderHook(() => usePromiseToast())

    render(
      <Button
        onClick={() =>
          result.current(resolveAfter3Sec(), 'Promise is pending', 'Promise resolved 👌', 'Promise rejected 🤯')
        }
      />
    )
    await act(async () => fireEvent.click(screen.getByRole('button')))

    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass('Toastify__toast--default'))
    await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass('Toastify__toast--error'), {
      timeout: 4000
    })
  })
})

describe('Actions toast', () => {
  it('Should render a toast with actions', async () => {
    const { result } = renderHook(() => useToast())

    const CustomMessageWithActions = () => (
      <Stack direction="row" alignItems="flex-end" justifyContent="flex-end" gap={1}>
        <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
          <Typography>{'Button 1'}</Typography>
        </Button>
        <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
          <Typography>{'Button 2'}</Typography>
        </Button>
      </Stack>
    )

    render(
      <Button
        onClick={() =>
          result.current('This is a custom toast with actions!', 'success', {
            actions: <CustomMessageWithActions />
          })
        }
      />
    )

    await act(async () => fireEvent.click(screen.getByRole('button')))
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())

    const button1 = screen.getByRole('button', { name: 'Button 1' })
    const button2 = screen.getByRole('button', { name: 'Button 2' })

    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
  })
})
