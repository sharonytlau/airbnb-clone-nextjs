import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { ListingType } from 'lib/prisma/prisma'
import ImageSlider from 'components/ImageSlider'
import format from 'date-fns/format'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HeartIcon } from './icons/HeartIcon'
import { useRouter } from 'next/router'
import { useWishlists } from 'lib/swr/useWishLists'
import { StarIcon } from './icons/StarIcon'

function ListingCards({
  data,
  activeCategory,
}: {
  data: ListingType[]
  activeCategory: any
}) {
  const router = useRouter()
  const { data: session } = useSession()
  const userEmail = session?.user?.email || ''
  const [showModal, setShowModal] = useState(false)
  console.log('session user', session?.user)
  const { wishlists, isLoading, isError } = useWishlists(userEmail)
  const listingIdRef = useRef<string | null>(null)

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

  function handleAddToWishlist(listingId: string) {
    setShowModal(true)
    listingIdRef.current = listingId
  }

  async function addToWishlistReq(wishListId: string) {
    setShowModal(false)
    const body = {
      listingId: listingIdRef.current,
    }

    const response = await fetch(`/api/wishlists/${wishListId}/add`, {
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
            <div className="relative" key={id}>
              <Link href={`/listing/${id}`}>
                <ImageSlider
                  data={images.map(({ id, source }) => {
                    const splits = source.split('/')
                    const imgId = splits[splits.length - 1]
                    const path = `/${imgId}.jpg`

                    return { id, path, url: source }
                  })}
                  onTap={() => router.push(`/listing/${id}`)}
                />
                {/* <Link
                href={`/listing/${id}`}
                className="mt-3 flex justify-between text-[15px]"
              > */}
                <div className="mt-3 flex justify-between text-[15px]">
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
                  {rating != null && (
                    <div className="self-start flex gap-1.5 flex-nowrap items-center">
                      <StarIcon className="text-[0.85em] relative bottom-[0.08em]" />
                      <span>{rating}</span>
                    </div>
                  )}
                </div>
              </Link>
              <button
                className="absolute w-7 h-7 top-4 right-4 flex-center"
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToWishlist(id)
                }}
              >
                <HeartIcon className="w-full h-full text-white opacity-60" />
              </button>
              {showModal && (
                <div
                  className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-zinc-300 bg-opacity-5 flex-center"
                  onClick={() => setShowModal(false)}
                >
                  <div className="flex flex-col gap-3">
                    {wishlists &&
                      wishlists.map(({ id, name }) => (
                        <button
                          key={id}
                          className="bg-blue-600 w-fit text-white p-3"
                          onClick={() => addToWishlistReq(id)}
                        >
                          {name}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
    </>
  )
}

export default ListingCards
