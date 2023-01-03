import { useRouter } from 'next/router'
import Image from 'next/image'
import { ListingType } from 'lib/prisma'
import { useEffect, useState } from 'react'
import { getListing } from 'lib/getListing'
import ImageSlider from 'components/ImageSlider'
import clsx from 'clsx'

export default function ListingDetail({
  listings,
}: {
  listings: ListingType[]
}) {
  const router = useRouter()
  const id = router.query.id as string
  const [data, setData] = useState<ListingType | null>(null)

  const titleClass = 'text-2xl font-medium'

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

      <div className="relative">
        <ImageSlider
          data={data.images.map(({ id, source }) => {
            const splits = source.split('/')
            const imgId = splits[splits.length - 1]
            const path = `/${imgId}.jpg`
            return { id, path, url: source }
          })}
          page="detail"
        ></ImageSlider>
        <button
          className="rounded-full bg-white w-12 h-12 absolute top-2 left-2 text-3xl"
          onClick={() => router.back()}
        >
          {'<'}
        </button>
      </div>
      <DetailSection className="space-y-2">
        <h1 className={titleClass}> {data.name}</h1>
        <div className="space-x-2 font-medium text-sm">
          {data.rating != null && <span>{data.rating}</span>}
          <span className="underline">{data.reviews.length} reviews</span>
          {data.host.isSuperhost && <span>Superhost</span>}
        </div>
        <div className="font-medium text-sm underline">{data.location}</div>
      </DetailSection>
      {/* home details */}
      <DetailSection>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <h2
              className={titleClass}
            >{`${data.placeType} hosted by ${data.host.name}`}</h2>
            <div className="space-x-1">
              {data.homeDetails.map(({ id, type, quantity }) => (
                <span key={id}>{formatDetail(quantity, type)}</span>
              ))}
            </div>
          </div>
          <Image
            src={data.host.avatarUrl}
            alt={data.name}
            width="56"
            height="56"
            className="self-start"
          />
        </div>
      </DetailSection>
      {/* amenities */}
      <DetailSection>
        <h2 className={titleClass}>What this place offers</h2>
        <div className="font-medium my-4 space-y-4">
          {data.amenities?.slice(0, 6).map((el) => (
            <div key={el.id}>{el.title}</div>
          ))}
        </div>
        <button className="border border-black font-medium w-full rounded-lg py-2">
          {`Show all ${data.amenities.length} amenities`}
        </button>
      </DetailSection>
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

function DetailSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx('py-8 mx-6 border-b-2  border-zinc-200', className)}>
      {children}
    </div>
  )
}
