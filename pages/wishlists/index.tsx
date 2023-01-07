import { Listing } from '@prisma/client'
import SignInForm from 'components/SignInForm'
import { useWishlists } from 'lib/swr/useWishLists'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Wishlists() {
  const { data: session } = useSession()
  const [data, setData] = useState<any>(null)
  const [nameInput, setNameInput] = useState<any>('')
  const userEmail = session?.user?.email ?? ''
  console.log('session?.user?.email', session?.user?.email)
  const { wishlists, isLoading, isError } = useWishlists(userEmail)

  console.log('wishlists are', wishlists)

  async function createWishList() {
    const body = {
      userEmail,
      name: nameInput,
    }

    const response = await fetch('/api/wishlists/add', {
      method: 'POST',
      body: JSON.stringify(body),
    })

    const result = await response.json()
    console.log('***response listing card', result)
    setNameInput('')
  }

  return (
    <div className="w-full flex flex-col ml-3">
      <div>Wishlists</div>

      {userEmail ? (
        <div>
          {isLoading && <div> isLoading ... </div>}
          {wishlists && (
            <div className="my-3 flex flex-col gap-3">
              {wishlists.map(({ id, name }) => (
                <Link
                  key={id}
                  href={`/wishlists/${id}`}
                  className="bg-blue-600 w-fit text-white p-3"
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
          <div className="flex items-center gap-3">
            <button onClick={createWishList}> Create a wishlist </button>
            <input
              name="name"
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="border border-black"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <h3>Please Sign in</h3>
          <button
            className="rounded-sm p-2 bg-black text-white"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  )
}
