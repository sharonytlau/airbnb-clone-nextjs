import React from 'react'
import { SearchIcon } from 'components/icons/SearchIcon'
import { FilterIcon } from 'components/icons/FilterIcon'

type SearchBarProps = {
  handleShowDrawer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
}

function SearchBar({ handleShowDrawer }: SearchBarProps) {
  return (
    <div
      className="flex items-center justify-between gap-3 h-14 pl-5 pr-3 shadow-md rounded-full text-zinc-900 border-[0.5px] border-zinc-200"
      onClick={handleShowDrawer}
    >
      <div className="flex gap-4 items-center tracking-tight">
        <SearchIcon className="text-lg text-zinc-800" />
        <div>
          <p className="font-medium text-sm">{'Where to?'}</p>
          <p className="text-xs text-zinc-400">
            {'Anywhere · Any Week · Add guests'}
          </p>
        </div>
      </div>
      <div className="w-9 h-9 border border-solid border-zinc-200 rounded-full flex items-center justify-center">
        <FilterIcon className="text-lg" />
      </div>
    </div>
  )
}

export default SearchBar
