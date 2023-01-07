import { useRouter } from 'next/router'
import Image from 'next/image'
import { ListingType, ReviewType } from 'lib/prisma/prisma'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { findAllListings } from 'lib/prisma/findListing'
import ImageSlider from 'components/ImageSlider'
import clsx from 'clsx'
import { ListingReview } from '@prisma/client'
import { format } from 'date-fns'
import { useHasMounted } from 'hooks/useHasMounted'
import { useWindowWidth } from 'hooks/useWindowWidth'
import { useWishlist } from 'lib/swr/useWishLists'

export default function WishList() {
  const router = useRouter()
  const id = router.query.id as string
  const { wishlist, isLoading, isError } = useWishlist(id)

  console.log('wishlist get', wishlist)

  return (
    <>
      <button
        className="rounded-full bg-green-200 w-12 h-12 top-2 left-2 text-3xl"
        onClick={() => router.back()}
      >
        {'<'}
      </button>
      <div> {`wishlist: ${id}`} </div>
      {isLoading && <div> Loading ... </div>}
      <div>{wishlist && wishlist.listing.map((el) => el.name)}</div>
    </>
  )
}
