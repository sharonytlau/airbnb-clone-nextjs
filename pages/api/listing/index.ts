import { findAllListings } from 'lib/prisma/findListing'
import type { NextApiHandler } from 'next'

// GET /api/listing
// return all listings
const handler: NextApiHandler = async function (req, res) {
  if (req.method === 'GET') {
    const listings = await findAllListings()

    // if (!listings) {
    //   return res.status(404).json({ error: 'Listing not found!' })
    // }

    return res.status(200).json(listings)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export default handler
