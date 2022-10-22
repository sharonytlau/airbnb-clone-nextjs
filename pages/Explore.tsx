import React from 'react'
import SearchBar from 'components/SearchBar'
import CategoryFilters from 'components/CategoryFilters'
import ListingCards from 'components/ListingCards'
import TheFooter from 'components/TheFooter'

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
  return (
    <div className="h-full w-full flex flex-col justify-between gap-4 pt-3">
      {/* Search Bar */}
      <SearchBar />
      {/* Filters */}
      <CategoryFilters categories={fakeCategories} />
      {/* Listings */}
      <ListingCards data={fakeListingCards} />
      {/* Footer */}
      <TheFooter />
    </div>
  )
}

export default Explore
