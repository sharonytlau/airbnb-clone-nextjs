import {
  PrismaClient,
  Listing,
  ListingImage,
  Category,
  ListingAmenity,
  ListingHomeDetail,
  User,
  ListingReview,
} from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient
  }
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient()
  }
  prisma = globalWithPrisma.prisma
}

export default prisma

export type ListingType = Listing & {
  amenities: ListingAmenity[]
  images: ListingImage[]
  categories: Category[]
  homeDetails: ListingHomeDetail[]
  host: User
  reviews: ListingReview[]
  rating: number | null
}
