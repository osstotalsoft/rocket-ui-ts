import React from 'react'
import { render, screen, userClick } from 'testingUtils'
import { Dialog, getTheme } from '../../index'
import { Button } from '@mui/material'

const title = 'Dialog component'
const text =
  'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.'

const theme = getTheme()
const defaultFont = theme.typography.defaultFont

describe('DialogDisplay', () => {
  test('X button is shown by default', () => {
    render(<Dialog id="dialog" open={true} />)
    expect(screen.getByLabelText('Close')).toBeInTheDocument()
  })

  test('X button is not rendered if showX = false', () => {
    render(<Dialog id="dialog" open={true} showX={false} />)
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })

  test('font family of the title is taken from default font', () => {
    render(<Dialog id="dialog" open={true} title={title} />)
    expect(screen.getByText(title)).toHaveStyle(`font-family: ${defaultFont.fontFamily}`)
  })

  test('font family and font size of the dialog content are taken from the default font', () => {
    render(<Dialog id="dialog" open={true} content={text} />)
    const content = screen.getByText(text)

    expect(content).toHaveStyle(`font-family: ${defaultFont.fontFamily}`)
    expect(content).toHaveStyle(`font-size: ${defaultFont.fontSize}px`)
  })

  test('renders DialogText component when the text prop is provided', () => {
    render(<Dialog id="dialog" open={true} textContent={text} />)
    expect(screen.getByText(text)).toHaveClass('MuiDialogContentText-root')
  })

  test('displays dividers when dividers = true', () => {
    render(<Dialog id="dialog" open={true} content={text} dividers />)
    expect(screen.getByText(text)).toHaveClass('MuiDialogContent-dividers')
  })

  test('has transparent backdrop when transparentBackdrop = true', () => {
    render(<Dialog id="dialog" open={true} content={text} transparentBackdrop={true} />)
    const backdrop = screen.getByRole('dialog').parentElement.parentElement.childNodes[0]

    expect(backdrop).toHaveStyle('background-color: transparent')
  })

  test('calls onClose function when clicking the X button', () => {
    const mockOnClose = jest.fn(() => {})

    render(<Dialog id="dialog" open={true} content={text} onClose={mockOnClose} />)
    userClick(screen.getByLabelText('Close'))

    expect(mockOnClose).toHaveBeenCalled()
  })

  test('doesn\'t close on backdrop click when disableBackdropClick = true', () => {
    const mockOnClose = jest.fn(() => {})

    render(<Dialog id="dialog" open={true} content={text} onClose={mockOnClose} disableBackdropClick={true} />)
    userClick(screen.getByRole('dialog').parentElement)

    expect(mockOnClose).not.toHaveBeenCalled()
  })

  test('default value for overflowY is auto', () => {
    render(<Dialog id="dialog" open={true} content={text} />)
    expect(screen.getByText(text)).toHaveStyle('overflow-y: auto')
  })

  test('DialogTitle can be overridden through the titleProps', () => {
    render(<Dialog id="dialog" open={true} title={title} content={text} titleProps={{ sx: { backgroundColor: 'red' } }} />)
    expect(screen.getByText(title)).toHaveStyle('background-color: red')
  })

  test('DialogContent can be overridden through the contentProps', () => {
    render(<Dialog id="dialog" open={true} content={text} contentProps={{ sx: { backgroundColor: 'red' } }} />)
    expect(screen.getByText(text)).toHaveStyle('background-color: red')
  })

  test('DialogContentText can be overridden through the textContentProps', () => {
    render(<Dialog id="dialog" open={true} textContent={text} textContentProps={{ sx: { backgroundColor: 'red' } }} />)
    expect(screen.getByText(text)).toHaveStyle('background-color: red')
  })

  test('DialogActions can be overridden through the actionsProps', () => {
    const buttonText = 'OK'
    render(
      <Dialog
        id="dialog"
        open={true}
        textContent={text}
        actions={<Button>{buttonText}</Button>}
        actionsProps={{ sx: { backgroundColor: 'red' } }}
      />
    )
    expect(screen.getByText(buttonText).parentElement).toHaveStyle('background-color: red')
  })

  test('Close button can be overridden through the closeButtonProps', () => {
    render(<Dialog id="dialog" open={true} content={text} closeButtonProps={{ sx: { backgroundColor: 'red' } }} />)
    expect(screen.getByLabelText('Close')).toHaveStyle('background-color: red')
  })
})
