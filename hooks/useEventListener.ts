import { RefObject, useEffect, useRef } from 'react'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect'

export function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(eventName: K, handler: (event: Event) => void, element?: RefObject<T>) {
  // Use ref to store handler to avoid unnecessary effect rerun
  const savedHandler = useRef(handler)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    console.log('use event listener run')

    // Define the listening target, use the window object by default
    const targetElement: T | Window = element?.current ?? window

    const isSupported = targetElement && targetElement.addEventListener
    if (!isSupported) return

    const listener: typeof handler = (event) => savedHandler.current(event)
    targetElement.addEventListener(eventName, listener)

    return () => {
      targetElement.removeEventListener(eventName, listener)
    }
  }, [eventName, element])
}
