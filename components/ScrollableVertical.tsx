import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect'
import { useEffect, useRef, useState } from 'react'

type ScrollableVerticalProps = {
  style: string
  children: React.ReactNode
  onScroll?: { onScrollUp: () => void; onScrollDown: () => void }
  onMount?: () => void
}

type ScrollDirection = 'UP' | 'DOWN' | null

export function ScrollableVertical({
  style,
  children,
  onScroll,
  onMount,
}: ScrollableVerticalProps) {
  const savedHandler = useRef(onScroll)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = onScroll
  }, [onScroll])

  const scrollThreshold = 80
  const ref = useRef<HTMLDivElement>(null)
  const scrollTop = useRef<number>(0)
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)

  function handleScroll() {
    const lastScroll = scrollTop.current
    const currentScroll = ref.current?.scrollTop || 0

    if (
      currentScroll - lastScroll >= scrollThreshold ||
      lastScroll - currentScroll >= scrollThreshold
    ) {
      setScrollDirection(currentScroll > lastScroll ? 'DOWN' : 'UP')
      scrollTop.current = currentScroll
    }
  }

  useEffect(() => {
    if (onMount) {
      onMount()
    }
    const refCopy = ref.current
    if (refCopy) {
      ref.current.addEventListener('scroll', handleScroll)

      return () => refCopy?.removeEventListener('scroll', handleScroll)
    }
  }, [onMount])

  useEffect(() => {
    console.log('effect scroll run **************')

    if (savedHandler.current) {
      switch (scrollDirection) {
        case 'UP':
          return savedHandler.current.onScrollUp()
        case 'DOWN':
          return savedHandler.current.onScrollDown()
      }
    }
  }, [scrollDirection])

  return (
    <div className="flex flex-col overflow-y-hidden">
      <div
        className={`overflow-y-auto h-full scrollbar-hide ${style}`}
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}
