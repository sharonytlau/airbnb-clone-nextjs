import prisma from 'lib/prisma'

export async function getListing() {
  const listings = await prisma.listing.findMany({
    include: {
      listingAmenities: true,
      listingImages: true,
      categories: true,
    },
  })

  console.log('get listing *****', typeof listings, listings.length)

  return JSON.parse(JSON.stringify(listings))
}
