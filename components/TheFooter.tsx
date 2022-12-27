import React, { useState } from 'react'
import { ExploreIcon } from 'components/icons/ExploreIcon'
import { HeartIcon } from 'components/icons/HeartIcon'
import { MapIcon } from 'components/icons/MapIcon'
import { MoreIcon } from 'components/icons/MoreIcon'
import Link from 'next/link'

const bottomIcons = [
  {
    icon: <ExploreIcon />,
    text: 'Explore',
    to: '/',
  },
  {
    icon: <HeartIcon />,
    text: 'Wishlists',
    to: '/wishlists',
  },
  {
    icon: <MapIcon />,
    text: 'Trips',
    to: '/trips',
  },
  {
    icon: <MoreIcon />,
    text: 'More',
    to: '/more',
  },
]

function TheFooter() {
  const [selectedIcon, setSelectedIcon] = useState(bottomIcons[0].text)

  const getIconStyle = (iconText: string) => {
    const selected = 'fill-prime-50 text-prime-600'
    const notSelected = 'fill-white text-gray-400'

    return selectedIcon === iconText ? selected : notSelected
  }

  const getIconTextStyle = (iconText: string) => {
    const selected = 'text-prime-800 font-medium'
    const notSelected = 'text-gray-500'

    return selectedIcon === iconText ? selected : notSelected
  }

  const handleClick = (iconText: string) => {
    setSelectedIcon(iconText)
  }

  return (
    <div className="bg-white flex items-center justify-around w-full py-2">
      {bottomIcons.map(({ text, icon, to }) => {
        return (
          <button onClick={() => handleClick(text)} key={text}>
            <Link href={to} className="flex flex-col items-center gap-1">
              <div className={`text-2xl ${getIconStyle(text)}`}>{icon}</div>
              <div className={`text-xxs ${getIconTextStyle(text)}`}>{text}</div>
            </Link>
          </button>
        )
      })}
    </div>
  )
}

export default TheFooter
