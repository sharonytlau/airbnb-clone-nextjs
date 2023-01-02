import { useRouter } from 'next/router'
import Link from 'next/link'
import { ListingType } from 'lib/prisma'
import { useEffect, useState } from 'react'
import { getListing } from 'lib/getListing'

export default function ListingDetail({
  listings,
}: {
  listings: ListingType[]
}) {
  const router = useRouter()
  const id = router.query.id as string
  const [data, setData] = useState<ListingType | null>(null)

  useEffect(() => {
    const data = listings.find((listing) => listing.id === id) || null
    setData(data)
  }, [id, listings])

  if (!data) return <div>Error: no data</div>

  return (
    <>
      {/* listing summary */}
      <h1>Listing: {id}</h1>
      <div>
        <span>{data.rating}</span>
        <span>156 reviews</span>
        <span>Superhost</span>
      </div>
      <div>Bali, Indonesia</div>
      {/* rooms */}
      <h2>Entire villa hosted by Wayan </h2>
      <div>
        <span>4 guests</span>
        <span>2 bedrooms</span>
        <span>2 beds</span>
        <span>2 baths</span>
      </div>
      {/* amenities */}
      <div className="px-3">
        <h2 className="text-lg font-medium">What this place offers</h2>
        <div>
          {data.listingAmenities?.map((el) => (
            <div key={el.id}>{el.title}</div>
          ))}
        </div>
        <button className="border border-black font-medium w-full rounded-lg py-2">
          Show all 20 amenities
        </button>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const listings = await getListing()
  return {
    props: {
      listings,
    },
  }
}

export async function getStaticPaths() {
  const listings = await getListing()
  console.log(
    'listings in [id]',
    typeof listings,
    listings.length,
    listings.map
  )

  const paths = listings.map((listing: ListingType) => {
    return {
      params: {
        id: listing.id,
      },
    }
  })

  return {
    paths,
    fallback: true,
  }
}
