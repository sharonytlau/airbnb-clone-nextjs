import { CategoryEnum, Prisma } from '@prisma/client'

export const categories: Prisma.CategoryCreateInput[] = Object.keys(
  CategoryEnum
).map((title) => {
  return {
    title: title as CategoryEnum,
  }
})
