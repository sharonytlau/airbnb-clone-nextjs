import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import SkeletonElement from './SkeletonElement'

export const ImageWrapper = ({
  shape = 'circle',
  ...props
}: Omit<ImageProps, 'onLoadingComplete'> & { shape?: 'circle' | 'square' }) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  return (
    <>
      {!hasLoaded && <SkeletonElement variant={shape} full />}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        onLoadingComplete={(img) => {
          // console.log('has loaded set ***')
          setHasLoaded(true)
        }}
        className={clsx(props.className, { 'opacity-0': !hasLoaded })}
      />
    </>
  )
}
