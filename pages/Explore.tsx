import React, { useState } from 'react'
import SearchBar from 'components/SearchBar'
import CategoryFilters from 'components/CategoryFilters'
import ListingCards from 'components/ListingCards'
import TheFooter from 'components/TheFooter'
import SearchDrawer from 'components/SearchDrawer'

const fakeCategories = [
  {
    image: '/mountains.png',
    title: 'Mountains',
  },
  {
    image: '/landmarks.png',
    title: 'Landmarks',
  },
  {
    image: '/theaters.png',
    title: 'Theaters',
  },
  {
    image: '/camps.png',
    title: 'Camps',
  },
  {
    image: '/tropical.png',
    title: 'Tropical',
  },
  {
    image: '/amusements.png',
    title: 'Amusements',
  },
  {
    image: '/meadows.png',
    title: 'Meadows',
  },
  {
    image: '/deserts.png',
    title: 'Deserts',
  },
  {
    image: '/shopping.png',
    title: 'Shopping',
  },
  {
    image: '/windmills.png',
    title: 'Windmills',
  },
  {
    image: '/museums.png',
    title: 'Museums',
  },
  {
    image: '/sailing.png',
    title: 'Sailing',
  },
  {
    image: '/arctic.png',
    title: 'Arctic',
  },
  {
    image: '/../public/golfing.png',
    title: 'Golfing',
  },
]

const fakeListingCards = [
  {
    image: 'https://source.unsplash.com/IWfe63thJxk',
    title: 'New England',
    price: 80,
    rating: 4.99,
    distance: 200,
  },
  {
    image: 'https://source.unsplash.com/IWfe63thJxk',
    title: 'Bedfordshire',
    price: 100,
    rating: 4.8,
    distance: 270,
  },
  {
    image: 'https://source.unsplash.com/IWfe63thJxk',
    title: 'Buckinghamshire',
    price: 70,
    rating: 4.85,
    distance: 180,
  },
]

function Explore() {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div className="h-full w-full flex flex-col justify-between gap-4 pt-4">
      {/* Search Bar */}
      <SearchBar handleShowDrawer={() => setShowDrawer(true)} />
      {/* Filters */}
      <CategoryFilters categories={fakeCategories} />
      {/* Listings */}
      <ListingCards data={fakeListingCards} />
      {/* Footer */}
      <TheFooter />
      <SearchDrawer
        showDrawer={showDrawer}
        handleHideDrawer={() => setShowDrawer(false)}
      />
    </div>
  )
}

export default Explore
