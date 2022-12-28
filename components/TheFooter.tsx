import React, { useState } from 'react'
import { ExploreIcon } from 'components/icons/ExploreIcon'
import { HeartIcon } from 'components/icons/HeartIcon'
import { MapIcon } from 'components/icons/MapIcon'
import { MoreIcon } from 'components/icons/MoreIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

const bottomIcons = [
  {
    icon: <ExploreIcon />,
    text: 'Explore',
    path: '/',
  },
  {
    icon: <HeartIcon />,
    text: 'Wishlists',
    path: '/wishlists',
  },
  {
    icon: <MapIcon />,
    text: 'Trips',
    path: '/trips',
  },
  {
    icon: <MoreIcon />,
    text: 'More',
    path: '/more',
  },
]

function TheFooter() {
  const router = useRouter()
  console.log('route in footer', router)

  const pathName = router.pathname

  const getIconStyle = (path: string) => {
    const active = 'fill-prime-50 text-prime-600'
    const inactive = 'fill-white text-gray-400'
    return pathName === path ? active : inactive
  }

  const getIconTextStyle = (path: string) => {
    const active = 'text-prime-800 font-medium'
    const inactive = 'text-gray-500'

    return pathName === path ? active : inactive
  }

  return (
    <div className="bg-white flex items-center justify-around w-full py-2">
      {bottomIcons.map(({ text, icon, path }) => {
        return (
          <button key={text}>
            <Link href={path} className="flex flex-col items-center gap-1">
              <div className={`text-2xl ${getIconStyle(path)}`}>{icon}</div>
              <div className={`text-xxs ${getIconTextStyle(path)}`}>{text}</div>
            </Link>
          </button>
        )
      })}
    </div>
  )
}

export default TheFooter
