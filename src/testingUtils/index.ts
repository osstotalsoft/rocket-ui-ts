import { render, fireEvent, renderHook, RenderOptions, RenderHookOptions } from '@testing-library/react'
import TestingWrapper from './TestingWrapper'

const customRender = (ui: JSX.Element, options?: RenderOptions<any, HTMLElement, HTMLElement> | undefined) =>
  render(ui, { wrapper: TestingWrapper, ...options })
const customRenderHook = (
  hook: (initialProps: unknown) => unknown,
  options?: RenderHookOptions<unknown, any, HTMLElement, HTMLElement> | undefined
) => renderHook(hook, { wrapper: TestingWrapper, ...options })

// more comprehensive simulation of a user click (mousedown + click)
const userClick = (element: any) => {
  fireEvent.mouseDown(element)
  fireEvent.mouseUp(element)
  element.click()
}

export * from '@testing-library/react'
export { customRender as render, userClick, customRenderHook as renderHook }
