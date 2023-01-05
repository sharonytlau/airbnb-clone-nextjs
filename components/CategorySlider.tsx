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
  useContext,
} from 'react'
import WindowWidthContext from 'context/WindowWidthContext'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect'
import { ImageWrapper } from './ImageWrapper'

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
  const sliderWidth = useRef(0)
  const [showNavButton, setShowNavButton] = useState({
    left: false,
    right: true,
  })
  const windowWidth = useContext(WindowWidthContext)
  const isLargeScreen = windowWidth > 950

  useIsomorphicLayoutEffect(() => {
    if (sliderRef.current) {
      sliderWidth.current = sliderRef.current.clientWidth
    }
  }, [])

  useEffect(() => {
    if (!sliderRef.current) return

    const refCopy = sliderRef.current

    if (refCopy) {
      sliderRef.current.addEventListener('scroll', onScroll)

      return () => refCopy?.removeEventListener('scroll', onScroll)
    }

    function onScroll() {
      if (!sliderRef.current) return
      const isAtEnd =
        sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
        sliderRef.current.scrollWidth - 1

      console.log({
        isAtEnd,
        add: sliderRef.current.scrollLeft + sliderRef.current.offsetWidth,
        scrollWidth: sliderRef.current.scrollWidth,
        scrollLeft: sliderRef.current.scrollLeft,
        offsetWidth: sliderRef.current.offsetWidth,
      })

      const isAtStart = sliderRef.current.scrollLeft === 0
      setShowNavButton({ left: !isAtStart, right: !isAtEnd })
    }
  }, [])

  function scrollToLeft() {
    if (sliderRef.current)
      sliderRef.current.scrollBy({
        left: -sliderWidth.current,
        behavior: 'smooth',
      })
  }

  function scrollToRight() {
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
    const active = 'border-b-[3px] border-gray-900'
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
    <div className="relative w-full overflow-hidden flex-center shadow-[0_8px_4px_-4px_rgba(0,0,0,0.04),0_3px_2px_-2px_rgba(0,0,0,0.06)] ">
      {isLargeScreen && (
        <NavButton
          direction="left"
          onClick={scrollToLeft}
          visible={showNavButton}
        />
      )}
      <div
        className="w-full overflow-auto px-7 scrollbar-hide flex gap-4 sm:gap-7"
        ref={sliderRef}
      >
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
                  'flex flex-col items-center gap-2 pt-1 pb-3 md:py-7',
                  getCategoryStyle(title)
                )}
              >
                <div
                  className={clsx(
                    'w-[22px] h-[22px] relative',
                    getIconStyle(title)
                  )}
                >
                  <ImageWrapper
                    src={`/${title.toLowerCase()}.png`}
                    alt={title}
                    width="48"
                    height="48"
                    className="w-full h-auto"
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
      {isLargeScreen && (
        <NavButton
          direction="right"
          onClick={scrollToRight}
          visible={showNavButton}
        />
      )}
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
