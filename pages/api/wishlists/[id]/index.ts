import prisma from 'lib/prisma/prisma'
import type { NextApiHandler } from 'next'

// GET /api/wishlists?id=:id
// return wishlist of id
const handler: NextApiHandler = async function (req, res) {
  if (req.method === 'GET') {
    const wishListId = req.query.id as string

    const result = await prisma.userWishList.findUnique({
      where: {
        id: wishListId,
      },
      include: {
        listing: true,
      },
    })

    console.log('query result:', result)

    if (!result) {
      return res.status(404).json({ error: 'Listing not found!' })
    }

    return res.status(200).json(result)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export default handler
