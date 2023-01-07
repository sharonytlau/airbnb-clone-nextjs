import { eachWeekOfInterval } from 'date-fns'
import prisma from 'lib/prisma/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const userEmail = req.query.userEmail as string

    const userId = (
      await prisma.user.findUnique({
        where: {
          email: userEmail,
        },
        select: {
          id: true,
        },
      })
    )?.id

    if (!userId) return res.status(404).json({ error: 'User not found' })

    const result = await prisma.userWishList.findMany({
      where: {
        userId,
      },
      include: {
        listing: {
          include: {
            images: true,
          },
        },
      },
    })

    return res.status(200).json(result)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
