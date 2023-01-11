import { useRouter } from 'next/router'
import Image from 'next/image'
import { ListingType, ReviewType } from 'lib/prisma/prisma'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { findAllListings } from 'lib/prisma/findListing'
import ImageSlider from 'components/ImageSlider'
import clsx from 'clsx'
import { StarIcon } from 'components/icons/StarIcon'
import { ListingReview } from '@prisma/client'
import { format } from 'date-fns'
import { useHasMounted } from 'hooks/useHasMounted'
import { useWindowWidth } from 'hooks/useWindowWidth'

export default function ListingDetail({
  listings,
}: {
  listings: ListingType[]
}) {
  const hasMounted = useHasMounted()
  const router = useRouter()
  const id = router.query.id as string
  const [data, setData] = useState<ListingType | null>(null)

  const titleClass = 'text-2xl font-medium'

  useEffect(() => {
    const data = listings.find((listing) => listing.id === id) || null
    setData(data)
  }, [id, listings])

  if (!data) return <div>Error: no data</div>

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
        <div className="flex items-center gap-2 font-medium text-sm">
          {data.rating != null && (
            <>
              <StarIcon className="text-[0.85em] relative bottom-[0.15em] inline" />
              <span>{data.rating}</span>
            </>
          )}
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
            alt={`${data.host.name} avatar image`}
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
      {/* reviews */}
      <DetailSection>
        <div className={clsx(titleClass, 'flex items-center mb-7 gap-2')}>
          <StarIcon className="text-[0.85em] relative bottom-[0.05em]" />
          <span> {data.rating} </span>
          <span> {'·'} </span>
          <h2> {`${data.reviews.length} reviews`}</h2>
        </div>
        {hasMounted && (
          <>
            <div className="flex gap-8 overflow-x-auto scrollbar-hide mb-6">
              {data.reviews.slice(0, 3).map((el) => (
                <ReviewCard key={el.id} data={el} />
              ))}
            </div>
            <button className="border border-black font-medium w-full rounded-lg py-2">
              {`Show all ${data.reviews.length} reviews`}
            </button>
          </>
        )}
      </DetailSection>
    </>
  )
}

export async function getStaticProps() {
  const listings = await findAllListings()
  return {
    props: {
      listings,
    },
  }
}

export async function getStaticPaths() {
  const listings = await findAllListings()
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
    <div className={clsx('py-8 mx-6 border-b  border-zinc-250', className)}>
      {children}
    </div>
  )
}

function ReviewCard({ data }: { data: ReviewType }) {
  const cardTextRef = useRef<HTMLDivElement | null>(null)
  const [hasMore, setHasMore] = useState(false)
  const windowWidth = useWindowWidth()

  useLayoutEffect(() => {
    if (!cardTextRef.current) return

    const overflowed =
      cardTextRef.current.scrollHeight > cardTextRef.current.offsetHeight
    setHasMore(overflowed ? true : false)
  }, [windowWidth, setHasMore])

  return (
    <div className="border border-zinc-250 rounded-3xl w-[85%] h-60 flex-none space-y-4 p-5">
      <div className="flex items-center gap-3">
        <Image
          src={data.reviewer.avatarUrl}
          alt={data.reviewer.name}
          width="40"
          height="40"
        />
        <div>
          <div className="font-medium leading-5"> {data.reviewer.name}</div>
          <div className="text-sm text-zinc-500">
            {format(new Date(data.createdAt), 'MMMM yyyy')}
          </div>
        </div>
      </div>
      <div ref={cardTextRef} className="text-zinc-700 line-clamp-5">
        {data.review}
      </div>
      {hasMore && (
        <button className="font-medium underline"> Show more </button>
      )}
    </div>
  )
}
