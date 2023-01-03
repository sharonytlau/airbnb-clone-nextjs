import { PrismaClient, Prisma, AmenityCategoryEnum } from '@prisma/client'
import format from 'date-fns/format'
import { categories } from './seeds/categories'
import { amenities } from './seeds/amenities'
import { listings } from './seeds/listings'
import { amenityCategories } from './seeds/amenities'
import {
  getRandomNumber,
  getRandomPeriod,
  getRandomHome,
  getRandomUser,
  getRandomPlaceType,
  getRandomListingName,
  getRandomItem,
  getRandomInt,
  randomReivews,
  getRandomNoRepeat,
} from './seeds/utils'
import { decimalAdjust } from 'utils/utils'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  await prisma.category.createMany({
    data: categories,
  })

  console.log(`Created categories`)

  await prisma.amenityCategory.createMany({
    data: amenityCategories,
  })

  console.log(`Created amenity categories`)

  for (const { title, icon, description, category } of amenities) {
    await prisma.listingAmenity.create({
      data: {
        title,
        icon,
        description,
        category: {
          connect: {
            code: category,
          },
        },
      },
    })
  }

  console.log(`Created amenities`)

  for (let gender of ['male', 'female']) {
    for (let i = 0; i <= 3; i++) {
      await prisma.user.create({
        data: {
          ...getRandomUser(gender as 'male' | 'female'),
          isHost: true,
          isSuperhost: Math.random() >= 0.5 ? true : false,
        },
      })
    }
  }

  console.log(`Created hosts`)

  for (let i = 0; i < 500; i++) {
    await prisma.user.create({
      data: {
        ...getRandomUser(),
        isHost: false,
        isSuperhost: false,
      },
    })
  }

  console.log(`Created customers`)

  const fetchedCategories = await prisma.category.findMany()
  const fetchedAmenities = await prisma.listingAmenity.findMany()
  const fetchedHosts = await prisma.user.findMany({
    where: {
      isHost: true,
    },
  })
  const fetchedCustomerIds = (
    await prisma.user.findMany({
      where: {
        isHost: false,
      },
      select: {
        id: true,
      },
    })
  ).map((el) => el.id)

  for (const listing of listings) {
    const [startDate, endDate] = getRandomPeriod()

    await prisma.listing.create({
      data: {
        ...listing,
        categories: {
          connect: listing.categories.map((category) => {
            return {
              id: fetchedCategories.find((el) => el.title === category)?.id,
            }
          }),
        },
        amenities: {
          connect: listing.amenities.map((amenity) => {
            return {
              id: fetchedAmenities.find((el) => el.title === amenity)?.id,
            }
          }),
        },
        startDate: format(startDate, 'yyyy-MM-dd'),
        endDate: format(endDate, 'yyyy-MM-dd'),
        price: decimalAdjust(getRandomNumber(80, 200)),
        homeDetails: {
          create: getRandomHome(),
        },
        placeType: getRandomPlaceType(),
        name: getRandomListingName(listing.categories),
        host: {
          connect: { id: getRandomItem(fetchedHosts).id },
        },
      },
    })
  }

  console.log(`Created listings`)

  const fetchedListingIds = (
    await prisma.listing.findMany({
      select: { id: true },
    })
  ).map((el) => el.id)

  for (let id of fetchedListingIds) {
    const reviewNum = getRandomInt(20, 100)
    const getRandomReviewerId = getRandomNoRepeat(fetchedCustomerIds)

    for (let i = 0; i <= reviewNum; i++) {
      await prisma.listingReview.create({
        data: {
          listing: {
            connect: {
              id,
            },
          },
          reviewer: {
            connect: {
              id: getRandomReviewerId(),
            },
          },
          rating: Math.random() >= 0.5 ? 4 : 5,
          review: getRandomItem(randomReivews),
        },
      })
    }
    console.log(`Created reviews`)
  }

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
