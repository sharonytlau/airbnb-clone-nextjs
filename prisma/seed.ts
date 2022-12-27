import { PrismaClient, Prisma } from '@prisma/client'
import format from 'date-fns/format'
import { categories } from './seeds/categories'
import { listings } from './seeds/listings'
import { decimalAdjust, getRandomNumber, getRandomPeriod } from './seeds/utils'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  await prisma.category.createMany({
    data: categories as Prisma.CategoryCreateInput[],
  })

  console.log(`Created categories`)

  const fetchedCategories = await prisma.category.findMany()

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
        startDate: format(startDate, 'yyyy-MM-dd'),
        endDate: format(endDate, 'yyyy-MM-dd'),
        price: decimalAdjust(getRandomNumber(80, 200)),
        rating: decimalAdjust(getRandomNumber(4.7, 5.0), -2),
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
