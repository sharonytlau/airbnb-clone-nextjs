import React from 'react'
import SearchBar from 'components/SearchBar'

function Explore() {
  return (
    <div className="flex flex-col justify-between h-full pt-3">
      {/* Search Bar */}
      <SearchBar />
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
