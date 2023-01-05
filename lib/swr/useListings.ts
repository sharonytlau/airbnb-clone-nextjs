import { ListingType } from 'lib/prisma/prisma'
import useSWR from 'swr'
import fetcher from './fetcher'

export function useListings() {
  const { data, error, isLoading } = useSWR<ListingType[]>(
    '/api/listing',
    fetcher as any
  )

  return {
    listings: data,
    isLoading,
    isError: error,
  }
}
