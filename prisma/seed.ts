import { PrismaClient, Prisma, category } from '@prisma/client'
import { title } from 'process'
import { listing } from './seeds/listing'
import { getEnumKeys } from 'utils/utils'

const prisma = new PrismaClient()

const listings: (Omit<Prisma.ListingCreateInput, 'category'> & {
  category: category
})[] = [
  {
    title: 'New England',
    subtitle: 'New England, UK',
    period: 'Dec 20 - Mon 10',
    price: 80,
    rating: 4.99,
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/hBh9JbyeCtg' },
        { source: 'https://source.unsplash.com/gvephxIoMYg' },
      ],
    },
    category: 'Urban',
  },
  {
    title: 'Gianyar',
    subtitle: 'Gianyar, Indonesia',
    period: 'Mon 1 - Mon 10',
    price: 100,
    rating: 4.8,
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/nSy6EkPBwe8' },
        { source: 'https://source.unsplash.com/lIvqoCl6h-A' },
      ],
    },
    category: 'Tropical',
  },
]

const categoryData = Object.keys(category).map((title) => {
  return {
    title,
  }
})

async function main() {
  console.log(`Start seeding ...`)

  await prisma.category.createMany({
    data: categoryData as Prisma.CategoryCreateInput[],
  })

  console.log(`Created categories`)

  const categories = await prisma.category.findMany()

  for (const listing of listings) {
    await prisma.listing.create({
      data: {
        ...listing,
        category: {
          connect: [
            { id: categories.find((el) => el.title === listing.category)?.id },
          ],
        },
      },
    })
    console.log(`Created listings`)
  }

  console.log(`Seeding finished.`)
}

// prisma.listing.create({
//   data: {
//     title: 'New England',
//     subtitle: 'New England, UK',
//     period: 'Dec 20 - Mon 10',
//     price: 80,
//     rating: 4.99,
//     listingImages: {
//       create: [
//         { source: 'https://source.unsplash.com/hBh9JbyeCtg' },
//         { source: 'https://source.unsplash.com/gvephxIoMYg' },
//       ],
//     },
//   },
// })

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
