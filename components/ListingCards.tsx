import Image from 'next/image'
import { useSession } from 'next-auth/react'
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
                className="absolute w-8 h-8 rounded-full bg-white top-0 right-2"
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToWishlist(id)
                }}
              >
                fav
              </button>
            </Link>
          )
        })}
    </div>
  )
}

export default ListingCards
