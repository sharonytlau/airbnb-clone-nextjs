import { UserWishList } from '@prisma/client'
import { ListingType, WishlistType } from 'lib/prisma/prisma'
import useSWR from 'swr'
import fetcher from './fetcher'

export function useWishlists(userEmail: string) {
  const { data, error, isLoading } = useSWR<WishlistType[]>(
    userEmail ? `/api/wishlists?userEmail=${userEmail}` : null,
    fetcher as any
  )

  return {
    wishlists: data,
    isLoading,
    isError: error,
  }
}

export function useWishlist(id: string) {
  const { data, error, isLoading } = useSWR<WishlistType>(
    `/api/wishlists/${id}`,
    fetcher as any
  )

  return {
    wishlist: data,
    isLoading,
    isError: error,
  }
}
