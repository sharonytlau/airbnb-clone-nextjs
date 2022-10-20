import React from 'react'
import { SearchIcon } from 'components/icons/SearchIcon'
import { FilterIcon } from 'components/icons/FilterIcon'

function SearchBar() {
  return (
    <div className="flex items-center gap-3 rounded-full p-3 shadow-[0_2px_15px] shadow-gray-200 ">
      <SearchIcon className="text-xl" />
      <div className="text-sm ">
        <p className="font-medium">"Where to?"</p>
        <p>Anywhere · Any Week · Add guests </p>
      </div>
      <div className="w-8 h-8 border-solid border-2 border-gray-200 rounded-full flex items-center justify-center">
        <FilterIcon className="text-lg" />
      </div>
    </div>
  )
}

export default SearchBar
