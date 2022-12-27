import { PrismaClient, Category, category } from '@prisma/client'
import { ListingType } from 'lib/prisma'
import React, { useContext, useEffect, useRef, useState } from 'react'
import SearchBar from 'components/SearchBar'
import CategoryFilters from 'components/CategoryFilters'
import ListingCards from 'components/ListingCards'
import TheFooter from 'components/TheFooter'
import SearchDrawer from 'components/SearchDrawer'
import { ScrollableVertical } from 'components/ScrollableVertical'
import { SlideIn } from 'components/SlideIn'
import Router, { useRouter } from 'next/router'
import FooterContext from 'context/state'

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

const Home = ({
  listings,
  categories,
}: {
  listings: ListingType[]
  categories: Category[]
  showFooter: boolean
}) => {
  const { setShowFooter } = useContext(FooterContext)
  const router = useRouter()
  const { query } = router
  const activeCategory = query.category || categories[0].title
  console.log('1111')

  const [showDrawer, setShowDrawer] = useState(false)

  // const [activeCategory, setActiveCategory] = useState(categories[0].title)

  function setActiveCategory(category: category) {
    router.push(`/?category=${category}`, undefined, { shallow: true })
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
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
          <CategoryFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            data={categories}
          />
        </div>
        {/* Listings */}
        <ScrollableVertical
          style="text-gray-900 p-6 md:p-10 xl:px-20"
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
          <ListingCards data={listings} activeCategory={activeCategory} />
        </ScrollableVertical>

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
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const prisma = new PrismaClient()

  const listings = await prisma.listing.findMany({
    include: {
      listingImages: true,
      categories: true,
    },
  })

  const categories = await prisma.category.findMany()

  return {
    props: {
      listings: JSON.parse(JSON.stringify(listings)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  }
}
