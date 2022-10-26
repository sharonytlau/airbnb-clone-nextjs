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
  const scrollThreshold = 80
  const ref = useRef<HTMLDivElement>(null)
  const scrollTop = useRef<number>(0)
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)

  function handleScroll() {
    console.log('event listener executed')
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
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll)

      return () => ref.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log('effect scroll run **************')

    if (onScroll) {
      switch (scrollDirection) {
        case 'UP':
          return onScroll.onScrollUp()
        case 'DOWN':
          return onScroll.onScrollDown()
      }
    }
  }, [onScroll, scrollDirection])

  return (
    <div className="flex flex-col overflow-y-hidden">
      <div
        className={`flex flex-col overflow-y-auto h-full scrollbar-hide ${style}`}
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}
