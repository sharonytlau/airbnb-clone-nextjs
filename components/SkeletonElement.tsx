import clsx from 'clsx'
import React from 'react'

type variant = 'circle' | 'square' | 'paragraph' | 'text'

const skeletonClasses = 'animate-pulse bg-neutral-300 mb-2.5 last:mb-0'

export default function SkeletonElement({
  variant = 'text',
  className = '',
  lines = 1,
  size = 1,
  width,
  full,
}: {
  lines?: number
  size?: number
  variant?: variant
  className?: string
  width?: number
  full?: boolean
}) {
  return variant === 'paragraph' ? (
    <div>
      {Array(lines)
        .fill(1)
        .map((el, i) => (
          <SkeletonText
            key={i}
            size={size}
            last={i === lines - 1 ? true : false}
          />
        ))}
    </div>
  ) : variant === 'text' ? (
    <SkeletonText size={size} width={width} />
  ) : variant === 'circle' ? (
    <SkeletonCircle size={size} full={!!full} />
  ) : (
    <SkeletonSquare size={size} full={!!full} />
  )
}

function SkeletonText({
  size,
  width = 100,
  last = false,
}: {
  size: number
  width?: number
  last?: boolean
}) {
  return (
    <div
      className={clsx('h-[1em] rounded-sm w-full', skeletonClasses)}
      style={
        !last || width !== 100
          ? {
              width: `${width}%`,
              height: `${size}em`,
            }
          : {
              width: '75%',
              height: `${size}em`,
            }
      }
    ></div>
  )
}

function SkeletonCircle({
  size,
  full = false,
}: {
  size: number
  full: boolean
}) {
  return (
    <div
      className={clsx('rounded-full', skeletonClasses, {
        'w-full h-full': full,
      })}
      style={
        !full
          ? {
              width: `${size}em`,
              height: `${size}em`,
            }
          : undefined
      }
    ></div>
  )
}

function SkeletonSquare({
  size,
  full = false,
}: {
  size: number
  full: boolean
}) {
  return (
    <div
      className={clsx('rounded-xl', skeletonClasses, {
        'w-full aspect-w-20 aspect-h-19': full,
      })}
      style={
        !full
          ? {
              width: `${size}em`,
              height: `${size}em`,
            }
          : undefined
      }
    ></div>
  )
}
