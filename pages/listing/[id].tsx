import { useRouter } from 'next/router'
import Link from 'next/link'
import { ListingType } from 'lib/prisma'
import { useEffect, useState } from 'react'
import { getListing } from 'lib/getListing'
import ImageSlider from 'components/ImageSlider'

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

  console.log('listing data is ', data)

  function formatDetail(quantity: number, type: string) {
    return quantity > 1 ? `${quantity} ${type}s` : `${quantity} ${type}`
  }

  return (
    <>
      {/* listing summary */}

      <div className="w-[300px]">
        <ImageSlider
          data={data.images.map(({ id, source }) => {
            const splits = source.split('/')
            const imgId = splits[splits.length - 1]
            const path = `/${imgId}.jpg`
            return { id, path, url: source }
          })}
        ></ImageSlider>
      </div>
      <h1 className="text-lg font-medium"> {data.name}</h1>
      <div className="space-x-2">
        {data.rating != null && <span>{data.rating}</span>}
        <span>{data.reviews.length} reviews</span>
        {data.host.isSuperhost && <span>Superhost</span>}
      </div>
      <div>{data.location}</div>
      {/* rooms */}
      <h2>{`${data.placeType} hosted by ${data.host.name}`}</h2>
      <div>
        {data.homeDetails.map(({ id, type, quantity }) => (
          <span key={id}>{formatDetail(quantity, type)}</span>
        ))}
      </div>
      {/* amenities */}
      <div className="px-3">
        <h2 className="text-lg font-medium">What this place offers</h2>
        <div>
          {data.amenities?.map((el) => (
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
