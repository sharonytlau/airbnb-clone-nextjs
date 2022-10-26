import React, { useState } from 'react'
import Image from 'next/image'

type Category = {
  image: string
  title: string
}

type CategoriesProps = {
  categories: Category[]
}

function CategoryFilters({ categories }: CategoriesProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].title)

  const isActive = (title: string) => {
    return title === activeCategory
  }

  const getCategoryStyle = (title: string) => {
    const active = 'border-b-2 border-gray-900'
    const inactive = ''

    return isActive(title) ? active : inactive
  }

  const getIconStyle = (title: string) => {
    const active = 'opacity-90'
    const inactive = 'opacity-60'

    return isActive(title) ? active : inactive
  }

  const getTitleStyle = (title: string) => {
    const active = 'text-gray-900'
    const inactive = 'text-gray-500'

    return isActive(title) ? active : inactive
  }

  const handleClick = (title: string) => {
    setActiveCategory(title)
  }

  return (
    <div className="flex gap-7 w-full overflow-x-auto scrollbar-hide px-7 shadow-[0_3px_3px] shadow-gray-100">
      {categories.map((el) => {
        return (
          <div
            className={`pb-3 flex flex-col items-center gap-2 ${getCategoryStyle(
              el.title
            )}`}
            onClick={() => handleClick(el.title)}
          >
            <div
              className={`w-[22px] h-[22px] relative ${getIconStyle(el.title)}`}
            >
              <Image src={el.image} width="100%" height="100%" />
            </div>
            <div
              className={`font-medium text-xs tracking-tight ${getTitleStyle(
                el.title
              )}`}
            >
              {el.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryFilters
