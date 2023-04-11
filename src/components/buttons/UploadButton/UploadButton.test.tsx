import React from 'react'
import { render, screen, fireEvent } from '../../../testingUtils'
import UploadButton from './UploadButton'

const dummyData =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const blob = new Blob([dummyData])

describe('UploadButton Render Tests', () => {
  test('renders button', () => {
    // arrange
    render(<UploadButton />)

    // act
    const buttonBase = screen.getByRole('button')
    const iconButton = screen.getByTestId('BackupIcon')

    // assert
    expect(buttonBase).toBeInTheDocument()
    expect(iconButton).toBeInTheDocument()
  })
})

describe('UploadButton File Validation Tests', () => {
  let textFile: File
  beforeEach(() => {
    textFile = new File([blob], 'dummyData.txt', { type: 'text/plain' })
  })

  it('uploads given file', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onFilesChanged).toHaveBeenCalledTimes(1)
    expect(onFilesChanged).toHaveBeenCalledWith([textFile])
    expect(onError).not.toHaveBeenCalled()
  })

  it('accepts given file types', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton accept=".txt" onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onFilesChanged).toHaveBeenCalledTimes(1)
    expect(onFilesChanged).toHaveBeenCalledWith([textFile])
    expect(onError).not.toHaveBeenCalled()
  })

  it('rejects bad file types', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton accept="image/*" onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith({ message: 'Bad file type', files: [textFile] })
    expect(onFilesChanged).not.toHaveBeenCalled()
  })

  it('accepts files less than total size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton maxTotalSize={1000} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onFilesChanged).toHaveBeenCalledTimes(1)
    expect(onFilesChanged).toHaveBeenCalledWith([textFile])
    expect(onError).not.toHaveBeenCalled()
  })

  it('rejects files bigger than total size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton maxTotalSize={1} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith({ message: 'Total size exceeded', totalFileSize: textFile.size })
    expect(onFilesChanged).not.toHaveBeenCalled()
  })

  it('accepts files less than item size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton maxItemSize={1000} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onFilesChanged).toHaveBeenCalledTimes(1)
    expect(onFilesChanged).toHaveBeenCalledWith([textFile])
    expect(onError).not.toHaveBeenCalled()
  })

  it('rejects files bigger than item size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton maxItemSize={1} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith({ message: 'File size exceeded', files: [textFile] })
    expect(onFilesChanged).not.toHaveBeenCalled()
  })

  it('accepts files bigger than min total size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton minTotalSize={1} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onFilesChanged).toHaveBeenCalledTimes(1)
    expect(onFilesChanged).toHaveBeenCalledWith([textFile])
    expect(onError).not.toHaveBeenCalled()
  })

  it('rejects files less than min total size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton minTotalSize={1000} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith({ message: 'Total size too small', totalFileSize: textFile.size })
    expect(onFilesChanged).not.toHaveBeenCalled()
  })

  it('accepts files bigger than min item size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton minItemSize={1} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onFilesChanged).toHaveBeenCalledTimes(1)
    expect(onFilesChanged).toHaveBeenCalledWith([textFile])
    expect(onError).not.toHaveBeenCalled()
  })

  it('rejects files less than min item size', () => {
    // arrange
    const onFilesChanged = jest.fn()
    const onError = jest.fn()

    render(<UploadButton minItemSize={1000} onFilesChanged={onFilesChanged} onError={onError} />)
    const buttonBase = screen.getByRole('button')
    const inputRoot = buttonBase.children[0]
    const input = inputRoot.children[0]

    // act
    fireEvent.change(input, { target: { files: [textFile] } })

    // assert
    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith({ message: 'File size too small', files: [textFile] })
    expect(onFilesChanged).not.toHaveBeenCalled()
  })
})
