import { PrismaClient, Prisma, AmenityCategoryEnum } from '@prisma/client'
import format from 'date-fns/format'
import { categories } from './seeds/categories'
import { listings } from './seeds/listings'
import { amenityCategories, amenities } from './seeds/amenities'
import {
  decimalAdjust,
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
  getRandomAmenities,
  getFakeCustomers,
  getFakeHosts,
} from './seeds/utils'

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

  await prisma.fakeUser.createMany({
    data: getFakeHosts(6),
  })

  console.log(`Created hosts`)

  await prisma.fakeUser.createMany({
    data: getFakeCustomers(500),
  })

  console.log(`Created customers`)

  const fetchedHosts = await prisma.fakeUser.findMany({
    where: {
      isHost: true,
    },
  })
  const fetchedCustomerIds = (
    await prisma.fakeUser.findMany({
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
    const listingAmenities = getRandomAmenities()

    await prisma.listing.create({
      data: {
        ...listing,
        categories: {
          connect: listing.categories.map((category) => ({
            title: category,
          })),
        },
        amenities: {
          connect: listingAmenities.map((amenity) => {
            return {
              title: amenity,
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

  for (let listingId of fetchedListingIds) {
    const reviewNum = getRandomInt(4, 8)
    const getRandomReviewerId = getRandomNoRepeat(fetchedCustomerIds)

    for (let i = 0; i <= reviewNum; i++) {
      await prisma.listingReview.create({
        data: {
          listing: {
            connect: {
              id: listingId,
            },
          },
          reviewer: {
            connect: {
              id: getRandomReviewerId(),
            },
          },
          rating: getRandomNumber(0.4, 1) >= 0.5 ? 4 : 5,
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
