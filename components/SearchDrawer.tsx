import React from 'react'
import { WorldMap } from 'components/maps/WorldMap'
import { EuropeMap } from 'components/maps/EuropeMap'
import { SouthAmericaMap } from 'components/maps/SouthAmericaMap'
import { SearchIcon } from './icons/SearchIcon'
import { SearchFineIcon } from './icons/SearchFineIcon'
import { CancelIcon } from './icons/CancelIcon'

const fakeAreas = [
  {
    image: <WorldMap />,
    title: "I'm flexible",
  },
  {
    image: <EuropeMap />,
    title: 'Europe',
  },
  {
    image: <SouthAmericaMap />,
    title: 'South America',
  },
]
type SearchDrawerProps = {
  showDrawer: Boolean
  handleHideDrawer: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function SearchDrawer({ showDrawer, handleHideDrawer }: SearchDrawerProps) {
  const getDrawerStyle = (showDrawer: Boolean) => {
    const show = 'opacity-100'
    const hide = 'opacity-50 translate-y-full'
    return showDrawer ? show : hide
  }

  return (
    <div
      className={`fixed left-0 top-0 px-3 flex flex-col gap-3 bg-zinc-100 w-screen h-screen z-50 text-sm font-medium text-gray-900 transition-all duration-500 ease-out ${getDrawerStyle(
        showDrawer
      )}`}
    >
      {/* tabs */}
      <div className="relative flex justify-center gap-4 text-base pt-5 pb-2">
        <div className="absolute left-3 flex items-center p-1 bg-white border border-gray-400 rounded-full">
          <CancelIcon />
        </div>
        <div className="border-b-2 border-current"> Stays </div>
        <div> Experiences </div>
      </div>
      {/* card: Where */}
      <div className="flex flex-col gap-4 bg-white rounded-3xl p-5 shadow-[0_5px_15px] shadow-zinc-350">
        <h2 className="text-lg"> Where to? </h2>
        <div className="flex items-center gap-2 py-3 text-zinc-500 border rounded-xl p-4">
          <div className="text-zinc-900 text-md stroke-1 stroke-current">
            <SearchFineIcon />
          </div>
          <span>Search destinations</span>
        </div>
        {/* area cards */}
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {fakeAreas.map((el) => {
            return (
              <div className="flex flex-col gap-2">
                {el.image}
                <div> {el.title}</div>
              </div>
            )
          })}
        </div>
      </div>
      {/* card: When */}
      <div className="flex justify-between bg-white p-4 rounded-2xl shadow-[0_2px_6px] shadow-zinc-200">
        <h2 className="text-zinc-600"> When </h2>
        <span> Add dates </span>
      </div>
      {/* card: Who */}
      <div className="flex justify-between bg-white p-4 rounded-2xl shadow-[0_2px_6px] shadow-zinc-200">
        <h2 className="text-zinc-600"> Who </h2>
        <span> Add guests </span>
      </div>
      {/* footer */}
      <div className="flex justify-between p-3 mt-auto bg-zinc-75 text-base">
        <button>
          <span className="underline">Clear all</span>
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg"
          onClick={handleHideDrawer}
        >
          <div className="text-lg">
            <SearchFineIcon />
          </div>
          <span>Search</span>
        </button>
      </div>
    </div>
  )
}

export default SearchDrawer
