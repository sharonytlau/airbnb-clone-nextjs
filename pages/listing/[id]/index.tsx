import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ListingDetail() {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <>
      <h1>Listing: {id}</h1>
    </>
  )
}
