import prisma from 'lib/prisma'

export async function getListing() {
  const listings = await prisma.listing.findMany({
    include: {
      amenities: true,
      images: true,
      categories: true,
      homeDetails: true,
    },
  })

  console.log('get listing *****', typeof listings, listings.length)

  return JSON.parse(JSON.stringify(listings))
}
