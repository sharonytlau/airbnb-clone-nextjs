import prisma from 'lib/prisma'
import type { NextApiHandler } from 'next'

// GET /api/listing?id=:id
const handler: NextApiHandler = async function (req, res) {
  if (req.method === 'GET') {
    const id = req.query.id as string

    const result = await prisma.listing.findUnique({
      where: {
        id,
      },
      include: {
        listingAmenities: true,
        listingImages: true,
      },
    })

    // console.log('query result:', result)

    if (!result) {
      return res.status(404).json({ error: 'Listing not found!' })
    }

    return res.status(200).json(result)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export default handler