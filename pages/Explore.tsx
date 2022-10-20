import React from 'react'
import SearchBar from 'components/SearchBar'
import CategoryFilters from 'components/CategoryFilters'

const fakeCategories = [
  {
    image: '/../public/mountains.png',
    title: 'Mountains',
  },
  {
    image: '/../public/landmarks.png',
    title: 'Landmarks',
  },
  {
    image: '/../public/theaters.png',
    title: 'Theaters',
  },
  {
    image: '/../public/camps.png',
    title: 'Camps',
  },
  {
    image: '/../public/tropical.png',
    title: 'Tropical',
  },
  {
    image: '/../public/amusements.png',
    title: 'Amusements',
  },
  {
    image: '/../public/meadows.png',
    title: 'Meadows',
  },
  {
    image: '/../public/deserts.png',
    title: 'Deserts',
  },
  {
    image: '/../public/shopping.png',
    title: 'Shopping',
  },
  {
    image: '/../public/windmills.png',
    title: 'Windmills',
  },
  {
    image: '/../public/museums.png',
    title: 'Museums',
  },
  {
    image: '/../public/sailing.png',
    title: 'Sailing',
  },
  {
    image: '/../public/arctic.png',
    title: 'Arctic',
  },
  {
    image: '/../public/golfing.png',
    title: 'Golfing',
  },
]

function Explore() {
  return (
    <div className="h-full w-full flex flex-col justify-between pt-3">
      {/* Search Bar */}
      <SearchBar />
      {/* Filters */}
      <CategoryFilters categories={fakeCategories} />
      {/* B&B Cards */}
      <div>B&B Cards</div>
      {/* Footer */}
      <div>Footer</div>
    </div>
  )
}

export default Explore
