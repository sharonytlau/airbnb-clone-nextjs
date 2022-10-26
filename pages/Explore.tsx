import React, { useEffect, useRef, useState } from 'react'
import SearchBar from 'components/SearchBar'
import CategoryFilters from 'components/CategoryFilters'
import ListingCards from 'components/ListingCards'
import TheFooter from 'components/TheFooter'
import SearchDrawer from 'components/SearchDrawer'
import { ScrollableVertical } from 'components/ScrollableVertical'
import { SlideIn } from 'components/SlideIn'

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
    image: 'https://source.unsplash.com/hBh9JbyeCtg',
    title: 'New England',
    price: 80,
    rating: 4.99,
    distance: 200,
  },
  {
    image: 'https://source.unsplash.com/gvephxIoMYg',
    title: 'Gianyar',
    price: 100,
    rating: 4.8,
    distance: 270,
  },
  {
    image: 'https://source.unsplash.com/nSy6EkPBwe8',
    title: 'Chiang Mai',
    price: 120,
    rating: 4.9,
    distance: 180,
  },
  {
    image: 'https://source.unsplash.com/lIvqoCl6h-A',
    title: 'Stowe',
    price: 70,
    rating: 4.85,
    distance: 60,
  },
]

function Explore() {
  const [showDrawer, setShowDrawer] = useState(false)
  const [showFooter, setShowFooter] = useState(true)

  return (
    <div className="h-full w-full flex flex-col pt-4">
      {/* Search Bar */}
      <div className="px-7">
        <SearchBar
          handleShowDrawer={() => {
            console.log('show drawer set to true')
            setShowDrawer(true)
          }}
        />
      </div>
      {/* Filters */}
      <div className="pt-4">
        <CategoryFilters categories={fakeCategories} />
      </div>
      {/* Listings */}
      <ScrollableVertical
        style="gap-10 text-gray-900 p-7"
        onScroll={{
          onScrollUp() {
            console.log('upppp')
            setShowFooter(true)
          },
          onScrollDown() {
            setShowFooter(false)
            console.log('downnnn')
          },
        }}
      >
        <ListingCards data={fakeListingCards} />
      </ScrollableVertical>
      {/* Footer */}
      <SlideIn show={showFooter} styles={{ enter: { bottom: '0' } }}>
        <TheFooter />
      </SlideIn>
      {/* {showFooter && <TheFooter />} */}

      {/* todo: refactor */}
      {/* SearchDrawer */}
      <SlideIn
        show={showDrawer}
        styles={{
          enter: {
            top: '0',
            left: '0',
            height: '100%',
          },
        }}
      >
        <SearchDrawer handleHideDrawer={() => setShowDrawer(false)} />
      </SlideIn>
    </div>
  )
}

export default Explore
