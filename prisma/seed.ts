import { PrismaClient, Prisma, AmenityCategoryEnum } from '@prisma/client'
import format from 'date-fns/format'
import { categories } from './seeds/categories'
import { amenities } from './seeds/amenities'
import { listings } from './seeds/listings'
import { amenityCategories } from './seeds/amenities'
import {
  decimalAdjust,
  getRandomNumber,
  getRandomPeriod,
  getRandomHome,
  getRandomHost,
  getRandomPlaceType,
  getRandomListingName,
} from './seeds/utils'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.amenityCategory.createMany({
    data: amenityCategories,
  })

  console.log(`Created categories`)

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
    console.log(`Created amenity`)
  }

  const fetchedCategories = await prisma.category.findMany()
  const fetchedAmenities = await prisma.listingAmenity.findMany()

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
        rating: decimalAdjust(getRandomNumber(4.7, 5.0), -2),
        homeDetails: {
          create: getRandomHome(),
        },
        ...getRandomHost(Math.random()),
        placeType: getRandomPlaceType(),
        name: getRandomListingName(listing.categories),
      },
    })
    console.log(`Created listing`)
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
