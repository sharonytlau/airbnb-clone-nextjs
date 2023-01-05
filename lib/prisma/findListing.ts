import prisma from 'lib/prisma/prisma'
import { decimalAdjust } from 'utils/utils'

export async function findAllListings() {
  const fetchedListings = await prisma.listing.findMany({
    include: {
      amenities: true,
      images: true,
      categories: true,
      homeDetails: true,
      host: true,
      reviews: {
        include: {
          reviewer: true,
        },
      },
    },
  })

  const data = fetchedListings.map((listing) => {
    const reviewsWithRating = listing.reviews.filter((el) => el.rating)

    return {
      ...listing,
      rating:
        reviewsWithRating.length > 3
          ? decimalAdjust(
              reviewsWithRating.reduce(
                (total, next) => total + next.rating,
                0
              ) / reviewsWithRating.length,
              -2
            )
          : null,
    }
  })

  console.log('get listing *****', typeof data, data.length)

  return JSON.parse(JSON.stringify(data))
}
