import { act, renderHook } from '@testing-library/react'
import { UseCounter } from './UseCounter'

describe('useCounter', () => {
  test('Should render the initial count', () => {
    const { result } = renderHook(UseCounter)
    expect(result.current.count).toBe(0)
  })

  test('Should accept and render the same initial count', () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 11,
      },
    })
    expect(result.current.count).toBe(11)
  })

  test('Should increment the count', () => {
    const { result } = renderHook(UseCounter)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('Should decrement the count', () => {
    const { result } = renderHook(UseCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})
