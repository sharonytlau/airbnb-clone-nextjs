import clsx from 'clsx'
import WindowWidthContext from 'context/WindowWidthContext'
import Image from 'next/image'
import React, { useRef, useEffect, useCallback, useContext } from 'react'

import { useGesture } from '@use-gesture/react'
import { clamp } from 'utils/utils'
import {
  motion,
  useAnimationControls,
  useMotionValue,
  AnimationControls,
} from 'framer-motion'
import { LeftChevronIcon } from './icons/LeftChevronIcon'
import { RightChevronIcon } from './icons/RightChevronIcon'

export default function ImageSlider({ data, page = 'explore', onTap }: any) {
  const windowWidth = useContext(WindowWidthContext)
  const sliderRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dotControls = useAnimationControls()
  const x = useMotionValue(0)
  const opacityLeftButton = useMotionValue(0)
  const opacityRightButton = useMotionValue(0)
  const buttonVisible = useMotionValue('hidden')
  const indexRef = useRef(0)
  const widthRef = useRef(0)

  const itemCount = data.length

  function toX() {
    const closestIndex = -Math.round(-x.get() / widthRef.current)
    setX(closestIndex * widthRef.current)
  }

  const clampIndex = useCallback(
    function (num: number) {
      return clamp(num, 0, itemCount - 1)
    },
    [itemCount]
  )

  const clampX = useCallback(
    function (num: number) {
      return clamp(num, -(itemCount - 1) * widthRef.current, 0)
    },
    [itemCount]
  )

  let setX = useCallback(
    function (newX: number) {
      // change the translate value according to gesture
      x.set(clampX(newX))

      // reset dots and buttons styles according to current index
      const index = clampIndex(Math.ceil(-x.get() / widthRef.current))
      dotControls.set((i) => ({
        opacity: i === index ? 1 : 0.6,
        scale: i === index ? 1.2 : 1,
      }))
      opacityLeftButton.set(index ? 0.9 : 0)
      opacityRightButton.set(index === itemCount - 1 ? 0 : 0.8)

      // store the index
      indexRef.current = index
    },
    [
      dotControls,
      x,
      opacityLeftButton,
      opacityRightButton,
      itemCount,
      clampIndex,
      clampX,
    ]
  )

  useGesture(
    {
      onDrag: (state) => {
        if (!sliderRef.current) return

        // disable drag on desktop devices
        if ('pointerType' in state.event && state.event.pointerType === 'mouse')
          return

        // call event handler on tap
        if (state.tap) {
          onTap()
          return
        }
        // swipe event (will fire after several drag events if conditions were met, state.active is always `false`)
        if (state.swipe[0]) {
          const width = widthRef.current
          const initial = x.get() + state.delta[0]
          console.log('initial is', initial)

          const prevIndex = Math.round(-x.get() / width)
          const newX = (prevIndex - state.swipe[0]) * -width
          setX(newX)
          return
        }

        // damp the value on swift drag gesture
        const newDelta =
          state.velocity[0] < 1
            ? state.delta[0]
            : state.delta[0] / state.velocity[0]
        const newX = x.get() + newDelta
        setX(newX)

        if (!state.active) {
          toX()
        }
      },
      onWheel: (state) => {
        if (!sliderRef.current) return

        // horizontal scroll or vertical scroll with shiftKey down
        const isHorizontal =
          (state.shiftKey && state.axis === 'y') ||
          (!state.shiftKey && state.axis === 'x')
        if (!isHorizontal) return

        const wheelOffset = state.axis === 'y' ? state.delta[1] : state.delta[0]
        const newX = x.get() - wheelOffset
        setX(newX)

        if (!state.active) {
          toX()
        }
      },
    },
    {
      target: sliderRef,
      drag: {
        axis: 'x',
        preventScroll: true,
        keys: false,
        // make it easier to swipe on mobile devices
        swipe: {
          distance: [30, 30],
          velocity: [0.3, 0.3],
          duration: 400,
        },
      },
    }
  )

  // control button opacity
  useGesture(
    {
      onHover: (state) => {
        buttonVisible.set(state.active ? 'visible' : 'hidden'),
          console.log('!!!hover state', state)
      },
    },
    { target: wrapperRef }
  )

  // effect on resize
  useEffect(() => {
    if (!sliderRef.current) return

    const currentWidth = sliderRef.current.offsetWidth
    widthRef.current = currentWidth

    setX(-indexRef.current * currentWidth)
  }, [windowWidth, setX])

  const buttonClasses =
    'absolute top-1/2 -translate-y-1/2 text-md rounded-full bg-white text-zinc-800 z-50 w-7 h-7 flex-center transition duration-300'

  return (
    <div className="relative" ref={wrapperRef}>
      <motion.button
        className={clsx('left-2', buttonClasses)}
        style={{ opacity: opacityLeftButton, visibility: buttonVisible }}
        onClick={(e) => {
          e.preventDefault()
          setX(-(indexRef.current - 1) * widthRef.current)
        }}
      >
        <LeftChevronIcon />
      </motion.button>
      <div
        ref={sliderRef}
        className={clsx(
          'w-full overflow-hidden',
          { 'aspect-w-20 aspect-h-19 rounded-xl': page === 'explore' },
          { 'aspect-w-3 aspect-h-2': page === 'detail' }
        )}
      >
        <motion.div
          className="flex touch-pan-y transition ease-out"
          style={{ x }}
        >
          {data.map(
            ({ id, path, url }: { id: string; path: string; url: string }) => {
              return (
                <div key={id} className="relative flex-[1_0_100%]">
                  <Image
                    src={path}
                    fill
                    alt={'property image'}
                    draggable={false}
                    data-source-url={url}
                    className="object-cover object-center bg-neutral-300"
                  />
                </div>
              )
            }
          )}
        </motion.div>
      </div>
      {/* only show dots when there is more than one image */}
      {itemCount > 1 && (
        <Dots
          count={itemCount}
          styles="absolute text-yellow-400 bottom-2 left-1/2 -translate-x-1/2 transition"
          controls={dotControls}
        />
      )}
      <motion.button
        className={clsx('right-2', buttonClasses)}
        style={{ opacity: opacityRightButton, visibility: buttonVisible }}
        onClick={(e) => {
          e.preventDefault()
          setX(-(indexRef.current + 1) * widthRef.current)
        }}
      >
        <RightChevronIcon />
      </motion.button>
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
  controls: AnimationControls
}) {
  return (
    <ul className={clsx('flex space-x-1.5', styles)}>
      {Array(count)
        .fill(1)
        .map((el, i) => {
          return (
            <li key={i} data-key={i}>
              <motion.div
                className={clsx(
                  'rounded w-1.5 h-1.5 bg-white transition duration-100'
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
