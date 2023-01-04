import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Wishlists() {
  const { data: session } = useSession()
  const [data, setData] = useState<any>(null)
  const userEmail = session?.user?.email
  console.log('session?.user?.email', session?.user?.email)

  useEffect(() => {
    const wishlist = fetch(`/api/wishlists/get?userEmail=${userEmail}`)
      .then((res) => res.json())
      .then((res) => console.log('wishlist data', res))
    setData(wishlist)
  }, [userEmail])

  return <div>Wishlists</div>
}
