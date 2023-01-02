import Image from 'next/image'
import { ListingType } from 'lib/prisma'
import ImageSlider from 'components/ImageSlider'
import format from 'date-fns/format'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function ListingCards({
  data,
  activeCategory,
}: {
  data: ListingType[]
  activeCategory: any
}) {
  const [showListings, setShowListings] = useState(false)

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowListings(true)
  }, [])

  if (!showListings) {
    // You can show some kind of placeholder UI here
    return null
  }

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

          return (
            <Link className="space-y-3" key={id} href={`/listing/${id}`}>
              <ImageSlider
                data={listingImages.map(({ id, source }) => {
                  const splits = source.split('/')
                  const imgId = splits[splits.length - 1]
                  const path = `/${imgId}.jpg`

                  return { id, path, url: source }
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
            </Link>
          )
        })}
    </div>
  )
}

export default ListingCards
