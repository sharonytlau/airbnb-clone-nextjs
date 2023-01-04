import { Listing } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Wishlists() {
  const { data: session } = useSession()
  const [data, setData] = useState<any>(null)
  const userEmail = session?.user?.email
  console.log('session?.user?.email', session?.user?.email)

  useEffect(() => {
    if (userEmail) {
      fetch(`/api/wishlists/get?userEmail=${userEmail}`)
        .then((res) => res.json())
        .then((res) => {
          console.log('wishlist data is', res)
          setData(res)
        })
    }
  }, [userEmail])

  return (
    <div>
      <div>Wishlists</div>
      {!!data?.length &&
        data.map(({ listing }: { listing: Listing }) => (
          <div key={listing.id}>{listing.location}</div>
        ))}
    </div>
  )
}
