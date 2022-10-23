import React from 'react'
import { SearchIcon } from 'components/icons/SearchIcon'
import { FilterIcon } from 'components/icons/FilterIcon'

function SearchBar() {
  return (
    <div className="flex items-center justify-between gap-3 py-2 pl-5 pr-3 shadow-[0_2px_15px] shadow-gray-200 rounded-full mx-6  text-gray-900">
      <div className="flex gap-4 items-center tracking-tight">
        <SearchIcon className="text-lg text-gray-800" />
        <div>
          <p className="font-medium text-sm">"Where to?"</p>
          <p className="text-xs text-gray-600">
            Anywhere · Any Week · Add guests
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
