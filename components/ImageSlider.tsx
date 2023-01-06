import clsx from 'clsx'
import WindowWidthContext from 'context/WindowWidthContext'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect'
import Image from 'next/image'
import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
  useContext,
} from 'react'

import { useScroll } from '@use-gesture/react'
import { ImageWrapper } from './ImageWrapper'
import { checkInRange, clamp } from 'utils/utils'
import { motion, useAnimationControls } from 'framer-motion'
import { LeftChevronIcon } from './icons/LeftChevronIcon'
import { RightChevronIcon } from './icons/RightChevronIcon'

const scrollThreshHold = 60

export default function ImageSlider({ data, page = 'explore' }: any) {
  const windowWidth = useContext(WindowWidthContext)
  const isLargeScreen = windowWidth > 950
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const animationRef = useRef<number | null>(null)
  const isScrolling = useRef(false)
  const currentX = useRef(0)
  const indexRef = useRef(0)
  const controls = useAnimationControls()

  const itemCount = data.length

  const bind = useScroll((event) => {
    if (!sliderRef.current) return

    const scrolling = event.scrolling
    const sliderWidth = sliderRef.current.offsetWidth

    const hasScrollEnded = isScrolling.current && !scrolling

    const scrollX = event.offset[0]
    console.log('scrollX is', scrollX)
    console.log('sliderWidth is', sliderWidth)

    controls.start((i) => {
      if (i === Math.round(scrollX / sliderWidth)) {
        return {
          opacity: 1,
        }
      } else {
        return {
          opacity: 0.6,
        }
      }
    })

    const movementX = event.movement[0]

    if (hasScrollEnded) {
      console.log('scroll stopped')

      if (checkInRange(scrollX, currentX.current, 1)) {
        return
      }

      const moveByIndex =
        movementX < 0
          ? Math.floor((movementX + scrollThreshHold) / sliderWidth)
          : Math.ceil((movementX - scrollThreshHold) / sliderWidth)

      const newX = (indexRef.current + moveByIndex) * sliderWidth

      scrollToPosition(newX)
    }
    isScrolling.current = scrolling ?? false
  })

  //scrollByX: number
  function scrollToPosition(offsetX: number) {
    if (!sliderRef.current) return
    // console.log('scroll to position ***', offsetX)
    sliderRef.current.scrollTo({
      left: offsetX,
      behavior: 'smooth',
    })
    currentX.current = offsetX
    indexRef.current = offsetX / sliderRef.current.offsetWidth
    setCurrentIndex(indexRef.current)
  }

  function scrollToPrevious(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()
    if (!sliderRef.current) return
    const offsetX = (indexRef.current - 1) * sliderRef.current.offsetWidth
    scrollToPosition(offsetX)
  }
  function scrollToNext(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    if (!sliderRef.current) return
    const offsetX = (indexRef.current + 1) * sliderRef.current.offsetWidth
    scrollToPosition(offsetX)
  }

  // const setPositionByIndex = useCallback(
  //   (w = sliderWidth) => {
  //     currentTranslate.current = currentIndex.current! * -w
  //     prevTranslate.current = currentTranslate.current
  //     setSliderPosition()
  //   },
  //   [sliderWidth]
  // )

  function getElementWidth(element: HTMLDivElement) {
    return element.clientWidth
  }

  return (
    <div className="relative">
      <button
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 left-0 text-7xl text-white z-10 w-10 h-10 flex-center transition duration-300',
          currentIndex > 0 ? 'opacity-100' : 'opacity-0'
        )}
        onClick={(e) => scrollToPrevious(e)}
      >
        <LeftChevronIcon />
      </button>
      {/* <button onClick={scrollToPosition}> click me </button> */}
      <div
        ref={sliderRef}
        className={clsx(
          'w-full overflow-auto scrollbar-hide',
          { 'aspect-w-20 aspect-h-19 rounded-xl': page === 'explore' },
          { 'aspect-w-3 aspect-h-2': page === 'detail' }
        )}
        {...bind()}
      >
        <div className="flex">
          {data.map(({ id, path, url }: any, index: any) => {
            return (
              <div key={id} className="relative flex-[1_0_100%]">
                <ImageWrapper
                  src={path}
                  fill
                  alt={'property image'}
                  draggable={false}
                  data-source-url={url}
                  className="object-cover object-center"
                  shape="square"
                />
                {/* <Image
                  src={path}
                  fill
                  alt={'property image'}
                  draggable={false}
                  data-source-url={url}
                  className="object-cover object-center"
                /> */}
              </div>
            )
          })}
        </div>
      </div>
      {itemCount > 1 && (
        <Dots
          count={itemCount}
          styles="absolute text-yellow-400 bottom-2 left-1/2 -translate-x-1/2 transition"
          controls={controls}
        />
      )}
      <button
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 right-0 text-7xl text-white z-10 w-10 h-10 flex-center transition duration-300',
          currentIndex === itemCount - 1 ? 'opacity-0' : 'opacity-100'
        )}
        onClick={(e) => scrollToNext(e)}
      >
        <RightChevronIcon />
      </button>
    </div>
  )
}

function Dots({
  count = 2,
  styles,
  controls,
}: {
  count: number
  styles: string
  controls: any
}) {
  return (
    <ul className={clsx('flex space-x-1.5', styles)}>
      {Array(count)
        .fill(1)
        .map((el, i) => {
          return (
            <li key={i}>
              <motion.div
                className={clsx(
                  'rounded w-1.5 h-1.5 bg-white',
                  i === 0 ? 'opacity-100' : 'opacity-60'
                )}
                custom={i}
                animate={controls}
              ></motion.div>
            </li>
          )
        })}
    </ul>
  )
}
