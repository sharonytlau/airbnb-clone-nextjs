import clsx from 'clsx'
import MediaContext from 'context/MediaContext'
import Image from 'next/image'
import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
  useContext,
} from 'react'

export default function ImageSlider({ data }: any) {
  const { isLargeScreen } = useContext(MediaContext)
  const [dotIndex, setDotIndex] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const sliderRef = useRef<HTMLDivElement>(null)
  const currentTranslate = useRef(0)
  const currentIndex = useRef(0)
  const prevTranslate = useRef(0)
  const startX = useRef(0)
  const animationRef = useRef<number | null>(null)
  const isDragging = useRef(false)
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
    if (isDragging.current) window.requestAnimationFrame(animation)
  }

  function pointerStart(index: number) {
    return function (e: React.PointerEvent) {
      currentIndex.current = index
      startX.current = e.pageX
      isDragging.current = true
      animationRef.current = requestAnimationFrame(animation)
    }
  }

  function pointerMove(e: React.PointerEvent) {
    e.preventDefault()
    if (isDragging.current) {
      const moveBy = e.pageX - startX.current
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
    isDragging.current = false

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
      {/* <button className="absolute top-1/2 -translate-y-1/2 left-0 text-7xl text-white z-10">
        {'‹'}
      </button> */}

      <div className="w-full aspect-w-20 aspect-h-19 rounded-3xl overflow-auto scrollbar-hide">
        <div ref={sliderRef} className="flex transition duration-300 ease-out">
          {data.map(({ id, path, url }: any, index: any) => {
            return (
              <div
                key={id}
                className="relative flex-[1_0_100%] touch-pan-y "
                onPointerDown={!isLargeScreen ? pointerStart(index) : undefined}
                onPointerMove={!isLargeScreen ? pointerMove : undefined}
                onPointerUp={!isLargeScreen ? pointerEnd : undefined}
                onPointerLeave={!isLargeScreen ? pointerEnd : undefined}
                // onScroll={pointerEnd}
              >
                <Image
                  src={path}
                  fill
                  alt={'property image'}
                  draggable={false}
                  data-source-url={url}
                  className="object-cover object-center"
                />
              </div>
            )
          })}
        </div>
      </div>
      {itemCount > 1 && (
        <Dots
          count={itemCount}
          activeIndex={dotIndex}
          styles="absolute text-yellow-400 bottom-2 left-1/2 -translate-x-1/2 transition"
        />
      )}
      {/* <button className="absolute top-1/2 -translate-y-1/2 right-0 text-7xl text-white">
        {'›'}
      </button> */}
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
