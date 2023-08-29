import { fireEvent, renderHook, screen, waitFor } from '@testing-library/react'
import React from 'react'
import useToast from './useToast'
import { render } from 'testingUtils'
import Button from 'components/buttons/Button'
import usePromiseToast from './usePromiseToast'

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
      fireEvent.click(screen.getByRole('button'))

      await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass(expectedVariant, expectedTransition))
      await waitFor(() => expect(screen.getByRole('alert').parentNode.parentNode).toHaveClass(expectedPosition))
    }
  )

  it('Should close the toast when click-ing the x button', async () => {
    const { result } = renderHook(() => useToast())

    render(<Button onClick={() => result.current('This is a success message!', 'success')} />)

    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())

    fireEvent.click(screen.getByLabelText('close'))
    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument())
  })

  it('Error toast should not close when click-ing on its container', async () => {
    const { result } = renderHook(() => useToast())

    render(<Button onClick={() => result.current('This is an error message!', 'error')} />)

    fireEvent.click(screen.getByRole('button'))
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
    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass('Toastify__toast--default'))
    await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass('Toastify__toast--error'), {
      timeout: 4000
    })
  })
})
