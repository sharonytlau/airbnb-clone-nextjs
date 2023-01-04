import { eachWeekOfInterval } from 'date-fns'
import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { userEmail, listingId } = JSON.parse(req.body)
    console.log('***req body is', JSON.parse(req.body))

    const result = await prisma.userWish.create({
      data: {
        user: {
          connect: {
            email: userEmail,
          },
        },
        listing: {
          connect: {
            id: listingId,
          },
        },
      },
    })

    console.log('*** add result ', result)

    res.status(200).json({ message: `Listing added to the wishlist` })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
