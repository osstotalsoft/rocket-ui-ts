// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { TextEncoder } from 'util'

global.TextEncoder = TextEncoder

// structuredClone polyfill for JSDOM (required by @mui/x-internal-gestures in MUI X v9)
if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = (obj: unknown) => (obj === undefined ? undefined : JSON.parse(JSON.stringify(obj)))
}

// Suppress known MUI v9 internal "not wrapped in act()" warnings.
// These originate from MUI's own async internals (TouchRipple animation, Autocomplete
// dropdown effects, Tooltip visibility timers) and cannot be resolved from test code.
const originalError = console.error.bind(console)
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    const msg = typeof args[0] === 'string' ? args[0] : ''
    if (msg.includes('not wrapped in act(') && msg.includes('inside a test')) return
    originalError(...args)
  }
})
afterAll(() => {
  console.error = originalError
})
