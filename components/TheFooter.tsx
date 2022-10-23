import React, { useState } from 'react'
import { ExploreIcon } from 'components/icons/ExploreIcon'
import { HeartIcon } from 'components/icons/HeartIcon'
import { MapIcon } from 'components/icons/MapIcon'
import { MoreIcon } from 'components/icons/MoreIcon'

const bottomIcons = [
  {
    icon: <ExploreIcon />,
    text: 'Explore',
    to: '',
  },
  {
    icon: <HeartIcon />,
    text: 'Wishlists',
    to: '',
  },
  {
    icon: <MapIcon />,
    text: 'Trips',
    to: '',
  },
  {
    icon: <MoreIcon />,
    text: 'More',
    to: '',
  },
]

function TheFooter() {
  const [selectedIcon, setSelectedIcon] = useState(bottomIcons[0].text)

  const getIconStyle = (iconText: string) => {
    const selected = 'fill-amber-200 text-gray-900'
    const notSelected = 'fill-white text-gray-400'

    return selectedIcon === iconText ? selected : notSelected
  }

  const getIconTextStyle = (iconText: string) => {
    const selected = 'text-gray-900 font-medium'
    const notSelected = 'text-gray-500'

    return selectedIcon === iconText ? selected : notSelected
  }

  const handleClick = (iconText: string) => {
    setSelectedIcon(iconText)
  }

  return (
    <div className="flex items-center justify-around w-full">
      {bottomIcons.map((el) => {
        return (
          <div
            className="flex flex-col items-center gap-1"
            onClick={() => handleClick(el.text)}
          >
            <div className={`text-xl ${getIconStyle(el.text)}`}>{el.icon}</div>
            <div className={`text-xxs ${getIconTextStyle(el.text)}`}>
              {el.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TheFooter
