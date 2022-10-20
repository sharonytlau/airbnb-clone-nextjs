import React from 'react'
import Image from 'next/image'

type Category = {
  image: string
  title: string
}

type CategoriesProps = {
  categories: Category[]
}

function CategoryFilters({ categories }: CategoriesProps) {
  return (
    <div className="flex gap-7 w-full overflow-x-auto px-5 pb-4 shadow-[0_3px_3px] shadow-gray-100">
      {categories.map((el) => {
        return (
          <div className="flex flex-col items-center gap-2">
            <div className="w-7 h-7 opacity-60 relative">
              <Image src={el.image} width="100%" height="100%" />
            </div>
            <div className="font-medium text-xs text-gray-500"> {el.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryFilters
