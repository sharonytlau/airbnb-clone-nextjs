import {
  PrismaClient,
  Listing,
  ListingImage,
  Category,
  ListingAmenity,
  ListingHomeDetail,
  FakeUser,
  ListingReview,
  UserWishList,
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

export type ReviewType = Omit<ListingReview, 'createdAt'> & {
  reviewer: FakeUser
  createdAt: string
}

export type ListingType = Listing & {
  amenities: ListingAmenity[]
  images: ListingImage[]
  categories: Category[]
  homeDetails: ListingHomeDetail[]
  host: FakeUser
  reviews: ReviewType[]
  rating: number | null
}

export type WishlistType = UserWishList & {
  listing: ListingType[]
}
