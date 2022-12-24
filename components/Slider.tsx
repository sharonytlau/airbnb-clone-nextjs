import clsx from 'clsx'
import { setDefaultOptions } from 'date-fns'
import Image from 'next/image'
import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from 'react'

function Slider({ data }: any) {
  const [dotIndex, setDotIndex] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const sliderRef = useRef<HTMLDivElement>(null)
  const currentTranslate = useRef(0)
  const currentIndex = useRef(0)
  const prevTranslate = useRef(0)
  const startX = useRef(0)
  const animationRef = useRef<number | null>(null)
  const dragging = useRef(false)
  const threshHold = 60
  const itemCount = data.length

  function setSliderPosition() {
    if (!sliderRef.current) return
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`
  }

  const setPositionByIndex = useCallback(
    (w = dimensions.width) => {
      currentTranslate.current = currentIndex.current! * -w
      prevTranslate.current = currentTranslate.current
      setSliderPosition()
    },
    [dimensions.width]
  )

  function animation() {
    setSliderPosition()
    if (dragging.current) window.requestAnimationFrame(animation)
  }

  function pointerStart(index: number) {
    return function (event: React.PointerEvent) {
      currentIndex.current = index
      startX.current = event.pageX
      dragging.current = true
      animationRef.current = requestAnimationFrame(animation)
    }
  }

  function pointerMove(event: React.PointerEvent) {
    if (dragging.current) {
      const moveBy = event.pageX - startX.current
      const newTranslate = prevTranslate.current + moveBy

      if (moveBy < 0) {
        currentTranslate.current = Math.max(
          -(itemCount - 1) * dimensions.width,
          newTranslate
        )
      }
      if (moveBy > 0) {
        currentTranslate.current = Math.min(0, newTranslate)
      }
    }
  }

  function pointerEnd() {
    cancelAnimationFrame(animationRef.current!)
    dragging.current = false

    const movedBy = currentTranslate.current - prevTranslate.current

    // to next slide
    if (movedBy < -threshHold && currentIndex.current! < itemCount - 1)
      currentIndex.current! += 1

    // to previous slide
    if (movedBy > threshHold && currentIndex.current! > 0)
      currentIndex.current! -= 1

    setPositionByIndex()
    setDotIndex(currentIndex.current)
  }

  function getElementDimensions(element: HTMLDivElement) {
    const width = element.clientWidth
    const height = element.clientHeight
    return { width, height }
  }

  useEffect(() => {
    // reset dimension if window resizes
    const handleResize = () => {
      if (sliderRef.current) {
        const { width, height } = getElementDimensions(sliderRef.current)

        setDimensions({ width, height })
        setPositionByIndex(width)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setPositionByIndex])

  useLayoutEffect(() => {
    if (sliderRef.current) {
      setDimensions(getElementDimensions(sliderRef.current))
      setPositionByIndex(getElementDimensions(sliderRef.current).width)
    }
  }, [setPositionByIndex])

  return (
    <div className="relative">
      <div className="w-full aspect-w-20 aspect-h-19 rounded-3xl overflow-hidden">
        <div ref={sliderRef} className="flex transition duration-300 ease-out">
          {data.map(({ id, source }: any, index: any) => {
            return (
              <div
                key={id}
                className="relative flex-[1_0_100%] touch-pan-y "
                onPointerDown={pointerStart(index)}
                onPointerMove={pointerMove}
                onPointerUp={pointerEnd}
                onPointerLeave={pointerEnd}
              >
                <Image
                  src={`${source}/w=800`}
                  fill
                  alt={'title'}
                  draggable={false}
                />
              </div>
            )
          })}
        </div>
      </div>
      <Dots
        count={itemCount}
        activeIndex={dotIndex}
        styles="absolute text-yellow-400 bottom-2 left-1/2 -translate-x-1/2 transition"
      />
    </div>
  )
}

function Dots({
  count = 2,
  activeIndex = 0,
  styles,
}: {
  count: number
  activeIndex: number
  styles: string
}) {
  return (
    <ul className={clsx('flex space-x-1.5', styles)}>
      {Array(count)
        .fill(1)
        .map((el, i) => {
          return (
            <li key={i}>
              <button
                className={clsx('rounded w-1.5 h-1.5 bg-white', {
                  'opacity-70': i !== activeIndex,
                })}
              ></button>
            </li>
          )
        })}
    </ul>
  )
}

export default Slider
