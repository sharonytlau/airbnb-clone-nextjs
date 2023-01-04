import { useEventListener } from 'hooks/useEventListener'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect'
import { useEffect, useRef, useState } from 'react'

type ScrollableVerticalProps = {
  style: string
  children: React.ReactNode
  onScroll?: { onScrollUp: () => void; onScrollDown: () => void }
}

type ScrollDirection = 'UP' | 'DOWN' | null

export function ScrollableVertical({
  style,
  children,
  onScroll,
}: ScrollableVerticalProps) {
  const savedHandler = useRef(onScroll)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = onScroll
  }, [onScroll])

  const scrollThreshold = 80
  const scrollableRef = useRef<HTMLDivElement>(null)
  const scrollTop = useRef<number>(0)
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)

  function handleScroll() {
    const lastScroll = scrollTop.current
    const currentScroll = scrollableRef.current?.scrollTop || 0

    if (
      currentScroll - lastScroll >= scrollThreshold ||
      lastScroll - currentScroll >= scrollThreshold
    ) {
      setScrollDirection(currentScroll > lastScroll ? 'DOWN' : 'UP')
      scrollTop.current = currentScroll
    }
  }

  useEventListener('scroll', handleScroll, scrollableRef)

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
        ref={scrollableRef}
      >
        {children}
      </div>
    </div>
  )
}
