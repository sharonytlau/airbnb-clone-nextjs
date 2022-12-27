import { category } from '@prisma/client'

export const categories = Object.keys(category).map((title) => {
  return {
    title,
  }
})
