import { Category } from '@prisma/client'
import clsx from 'clsx'
import { RightChevronIcon } from 'components/icons/RightChevronIcon'
import { LeftChevronIcon } from 'components/icons/LeftChevronIcon'
import Image from 'next/image'
import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from 'react'

export default function CategorySlider({
  data,
  activeCategory,
  setActiveCategory,
}: {
  data: Category[]
  activeCategory: string
  setActiveCategory: Function
}) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const innerSliderRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const walkX = useRef(0)
  const pageX = useRef(0)
  const animationRef = useRef<number | null>(null)
  const isDragging = useRef(false)
  const sliderWidth = useRef(0)
  const [showNavButton, setShowNavButton] = useState({
    left: false,
    right: true,
  })

  useLayoutEffect(() => {
    if (sliderRef.current) {
      sliderWidth.current = sliderRef.current.clientWidth
    }
  }, [])

  function setSliderPosition() {
    if (!sliderRef.current) return
    if (walkX.current) {
      sliderRef.current.scrollLeft =
        sliderRef.current.scrollLeft - walkX.current
      startX.current = pageX.current
      walkX.current = 0
    }
  }

  function animation() {
    setSliderPosition()
    if (isDragging.current) window.requestAnimationFrame(animation)
  }

  function pointerStart(e: React.PointerEvent) {
    if (!sliderRef.current) return

    isDragging.current = true

    // startX.current = e.pageX - sliderRef.current.getBoundingClientRect().x
    startX.current = e.pageX

    animationRef.current = requestAnimationFrame(animation)
  }

  function pointerMove(e: React.PointerEvent) {
    if (!sliderRef.current) return

    e.preventDefault()

    if (isDragging.current) {
      innerSliderRef.current?.classList.add('pointer-events-none')
      pageX.current = e.pageX

      walkX.current = (e.pageX - startX.current) * 1
    }
  }

  function pointerEnd() {
    if (!sliderRef.current) return
    isDragging.current = false

    innerSliderRef.current?.classList.remove('pointer-events-none')

    cancelAnimationFrame(animationRef.current!)
    // scrollLeft.current = sliderRef.current.scrollLeft
  }

  useEffect(() => {
    if (!sliderRef.current) return

    const refCopy = sliderRef.current

    if (refCopy) {
      sliderRef.current.addEventListener('scroll', onScroll)

      return () => refCopy?.removeEventListener('scroll', onScroll)
    }

    function onScroll() {
      if (!sliderRef.current) return
      console.log('scrolling')
      const isAtEnd =
        sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
        sliderRef.current.scrollWidth

      const isAtStart = sliderRef.current.scrollLeft === 0
      setShowNavButton({ left: !isAtStart, right: !isAtEnd })
    }
  }, [])

  function scrollToLeft() {
    console.log('clicked')
    if (sliderRef.current)
      sliderRef.current.scrollBy({
        left: -sliderWidth.current,
        behavior: 'smooth',
      })
  }

  function scrollToRight() {
    console.log('clicked')

    if (sliderRef.current)
      sliderRef.current.scrollBy({
        left: sliderWidth.current,
        behavior: 'smooth',
      })
  }

  const isActive = (title: string) => {
    return title === activeCategory
  }

  const getCategoryStyle = (title: string) => {
    const active = 'border-b-2 border-gray-900'
    const inactive = ''

    return isActive(title) ? active : inactive
  }

  const getIconStyle = (title: string) => {
    const active = 'opacity-90'
    const inactive = 'opacity-60'

    return isActive(title) ? active : inactive
  }

  const getTitleStyle = (title: string) => {
    const active = 'text-gray-900'
    const inactive = 'text-gray-500'

    return isActive(title) ? active : inactive
  }

  return (
    <div className="relative w-full overflow-hidden flex-center">
      {
        <NavButton
          direction="left"
          onClick={scrollToLeft}
          visible={showNavButton}
        />
      }
      <div
        className="w-full overflow-auto py-7 px-7 shadow-[0_3px_3px] shadow-gray-100 touch-pan-y scrollbar-hide"
        ref={sliderRef}
        onTouchStart={() => {
          console.log('touch !!!')
        }}
        onPointerDown={pointerStart}
        onPointerMove={pointerMove}
        onPointerUp={pointerEnd}
        onPointerLeave={pointerEnd}
      >
        <div className=" flex gap-7" ref={innerSliderRef}>
          {data.map(({ title }) => {
            return (
              <button
                key={title}
                className="flex-[0_0_4rem]  flex-center"
                onClick={() => {
                  setActiveCategory(title)
                }}
              >
                <div
                  className={clsx(
                    'flex flex-col items-center gap-2 ',
                    getCategoryStyle(title)
                  )}
                >
                  <div
                    className={clsx(
                      'w-[22px] h-[22px] relative',
                      getIconStyle(title)
                    )}
                  >
                    <Image
                      src={`/${title.toLowerCase()}.png`}
                      alt={title}
                      fill
                    />
                  </div>
                  <div
                    className={clsx(
                      'font-medium text-xs tracking-tight',
                      getTitleStyle(title)
                    )}
                  >
                    {title}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      {
        <NavButton
          direction="right"
          onClick={scrollToRight}
          visible={showNavButton}
        />
      }
    </div>
  )
}

function NavButton({
  direction,
  onClick,
  visible,
}: {
  direction: 'left' | 'right'
  onClick: () => void
  visible: { left: Boolean; right: Boolean }
}) {
  const isLeft = direction === 'left'

  return (
    <button
      className={clsx(
        'absolute z-10 h-full transition duration-100 from-white via-white ',
        `${direction}-0`,
        {
          'pr-7 bg-gradient-to-r': isLeft,
          'pl-7 bg-gradient-to-l': !isLeft,
          'opacity-0': (isLeft && !visible.left) || (!isLeft && !visible.right),
          'opacity-1': (isLeft && visible.left) || (!isLeft && visible.right),
        }
      )}
      onClick={onClick}
    >
      <div className=" border border-0.5 border-zinc-300 rounded-full w-7 h-7 flex-center text-xl text-black">
        {isLeft ? <LeftChevronIcon /> : <RightChevronIcon />}
      </div>
    </button>
  )
}
