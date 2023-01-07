import prisma from 'lib/prisma/prisma'
import type { NextApiHandler } from 'next'

// GET /api/wishlists?id=:id
// return wishlist of id
const handler: NextApiHandler = async function (req, res) {
  if (req.method === 'POST') {
    const wishListId = req.query.id as string
    const { listingId } = JSON.parse(req.body)
    console.log('***req body is', JSON.parse(req.body))

    const result = await prisma.userWishList.update({
      where: {
        id: wishListId,
      },
      data: {
        listing: {
          connect: {
            id: listingId,
          },
        },
      },
    })

    console.log('*** add result ', result)

    return res.status(200).json({ message: `Wishlist created` })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}

export default handler
