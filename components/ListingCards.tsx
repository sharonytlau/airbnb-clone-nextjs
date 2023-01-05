import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { ListingType } from 'lib/prisma/prisma'
import ImageSlider from 'components/ImageSlider'
import format from 'date-fns/format'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FavIcon } from 'components/icons/FavIcon'
import { HeartIcon } from './icons/HeartIcon'

function ListingCards({
  data,
  activeCategory,
}: {
  data: ListingType[]
  activeCategory: any
}) {
  const { data: session } = useSession()
  const userEmail = session?.user?.email
  console.log('session user', session?.user)

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

  async function handleAddToWishlist(listingId: string) {
    const body = {
      listingId,
      userEmail,
    }

    console.log('*** request body client', body)

    const response = await fetch('/api/wishlists/add', {
      method: 'POST',
      body: JSON.stringify(body),
    })

    const result = await response.json()
    console.log('***response listing card', result)
  }

  return (
    <>
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
            location,
            subtitle,
            startDate,
            endDate,
            price,
            rating,
            images = [],
          } = el

          return (
            <Link
              className=" relative space-y-3"
              key={id}
              href={`/listing/${id}`}
            >
              <ImageSlider
                data={images.map(({ id, source }) => {
                  const splits = source.split('/')
                  const imgId = splits[splits.length - 1]
                  const path = `/${imgId}.jpg`

                  return { id, path, url: source }
                })}
              />
              <div className="flex justify-between text-[15px]">
                <div>
                  <p className="font-medium"> {location} </p>
                  <p className="text-zinc-450"> {subtitle} </p>
                  <p className="text-zinc-450">
                    {formatPeriod(new Date(startDate), new Date(endDate))}
                  </p>
                  <p className="mt-1.5">
                    <span className="font-semibold">{`$${price}`}</span>
                    <span> night </span>
                  </p>
                </div>
                {rating != null && <div> {`★ ${rating}`} </div>}
              </div>
              <button
                className="absolute w-7 h-7 top-1 right-4 flex-center"
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToWishlist(id)
                }}
              >
                <HeartIcon className="w-full h-full text-white opacity-60" />
              </button>
            </Link>
          )
        })}
    </>
  )
}

export default ListingCards
