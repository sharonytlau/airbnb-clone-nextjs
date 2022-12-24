import Image from 'next/image'
import { ListingWithImage } from 'lib/prima'
import Slider from 'components/Slider'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

function ListingCards({ data }: { data: ListingWithImage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-y-10 gap-x-6">
      {data.map((el) => {
        const {
          listingImages = [],
          title,
          subtitle,
          period,
          price,
          rating,
        } = el
        return (
          <div className="space-y-3" key={title}>
            {/* <div className="w-full h-0 pb-[95%] relative rounded-3xl overflow-hidden"> */}
            <Slider
              data={listingImages.map(({ id, source }) => {
                return { id, source }
              })}
            />
            <div className="flex justify-between text-[15px]">
              <div>
                <p className="font-medium"> {title} </p>
                <p className="text-zinc-450"> {subtitle} </p>
                <p className="text-zinc-450"> {period} </p>
                <p className="mt-1.5">
                  <span className="font-semibold">{`$${price}`}</span>
                  <span> night </span>
                </p>
              </div>
              <div> {`★ ${rating}`} </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListingCards
