import Image from 'next/image'
import { ListingType } from 'lib/prisma'
import Slider from 'components/Slider'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import format from 'date-fns/format'

function ListingCards({
  data,
  activeCategory,
}: {
  data: ListingType[]
  activeCategory: any
}) {
  console.log('active category is', activeCategory)

  function formatPeriod(start: Date, end: Date): string {
    const isSameMonth = format(start, 'M') === format(end, 'M')

    const dateStr = isSameMonth
      ? `${format(start, 'MMM. d')} — ${format(end, 'd')}`
      : `${format(start, 'MMM. d')} — ${format(end, 'MMM. d')}`

    return dateStr
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-y-10 gap-x-6">
      {data
        .filter((el) => {
          return el.categories
            .map((el) => {
              return el.title
            })
            .includes(activeCategory)
        })
        .map((el) => {
          const {
            id,
            title,
            subtitle,
            startDate,
            endDate,
            price,
            rating,
            listingImages = [],
          } = el
          console.log('element is', el)

          return (
            <div className="space-y-3" key={id}>
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
                  <p className="text-zinc-450">
                    {formatPeriod(new Date(startDate), new Date(endDate))}
                  </p>
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
