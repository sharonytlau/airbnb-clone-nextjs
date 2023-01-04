import { useState } from 'react'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect'
import { useEventListener } from 'hooks/useEventListener'
import { useDebounce } from 'hooks/useDebounce'

export function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState(0)
  const debouncedValue = useDebounce(windowWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEventListener('resize', handleResize)

  // Set state at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleResize()
  }, [])

  return debouncedValue
}
