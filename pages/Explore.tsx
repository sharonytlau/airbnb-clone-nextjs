import React from 'react'
import { SearchIcon } from 'components/icons/SearchIcon'

function Explore() {
  return (
    <div>
      {/* Search Bar */}
      <div className="flex">
        Search Bar
        <SearchIcon />
        <input type="text" placeholder="Where to?" />
      </div>
      {/* Filters */}
      <div>Filters</div>
      {/* B&B Cards */}
      <div>B&B Cards</div>
      {/* Footer */}
      <div>Footer</div>
    </div>
  )
}

export default Explore
