import { useEffect, useLayoutEffect } from 'react'

// avoid useLayoutEffect warning
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
