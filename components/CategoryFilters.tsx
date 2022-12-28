import React, { useState } from 'react'
import Image from 'next/image'
import { Category } from '@prisma/client'
import CategorySlider from 'components/ImageSlider'

function CategoryFilters({
  activeCategory,
  setActiveCategory,
  data,
}: {
  activeCategory: any
  setActiveCategory: any
  data: Category[]
}) {
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

  return (
    <CategorySlider
      data={data.map(({ title }) => {
        return {
          id: title,
          path: `/${title.toLowerCase()}.png`,
        }
      })}
    />
    // {/* <div className="flex gap-7 w-full overflow-x-auto scrollbar-hide px-7 shadow-[0_3px_3px] shadow-gray-100"> */}
    // {data.map(({ title }) => {
    //   return (
    //     <div
    //       className={`pb-3 flex flex-col items-center gap-2 ${getCategoryStyle(
    //         title
    //       )}`}
    //       onClick={() => {
    //         setActiveCategory(title)
    //       }}
    //       key={title}
    //     >
    //       <div
    //         className={`w-[22px] h-[22px] relative ${getIconStyle(title)}`}
    //       >
    //         <Image src={`/${title.toLowerCase()}.png`} alt={title} fill />
    //       </div>
    //       <div
    //         className={`font-medium text-xs tracking-tight ${getTitleStyle(
    //           title
    //         )}`}
    //       >
    //         {title}
    //       </div>
    //     </div>
    //   )
    // })}
    // {/* </div> */}
    // {/* </Slider> */}
  )
}

export default CategoryFilters
