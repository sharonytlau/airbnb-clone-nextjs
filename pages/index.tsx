import { Category, CategoryEnum } from '@prisma/client'
import prisma from 'lib/prisma/prisma'
import { ListingType } from 'lib/prisma/prisma'
import React, { useCallback, useContext, useState, useEffect } from 'react'
import SearchBar from 'components/SearchBar'
import CategorySlider from 'components/CategorySlider'
import ListingCards from 'components/ListingCards'
import TheFooter from 'components/TheFooter'
import SearchDrawer from 'components/SearchDrawer'
import { ScrollableVertical } from 'components/ScrollableVertical'
import { SlideIn } from 'components/SlideIn'
import Router, { useRouter } from 'next/router'
import FooterContext from 'context/FooterContext'
import { useListings } from 'lib/swr/useListings'
import SkeletonElement from 'components/SkeletonElement'
import ListingGrid from 'components/ListingGrid'
import ListingSkeleton from 'components/ListingSkeleton'

const Home = ({
  categories,
}: {
  categories: Category[]
  showFooter: boolean
}) => {
  const { listings, isLoading, isError } = useListings()
  const { setShowFooter } = useContext(FooterContext)
  const router = useRouter()
  const activeCategory =
    (router.query.category as string) || categories[0].title

  const [showDrawer, setShowDrawer] = useState(false)

  function setActiveCategory(category: CategoryEnum) {
    router.push(`/?category=${category}`, undefined, { shallow: true })
  }

  const resetFooter = useCallback(() => {
    setShowFooter(true)
  }, [setShowFooter])

  useEffect(() => {
    return () => {
      setShowFooter(false)
    }
  }, [setShowFooter])

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
        {/* Categories */}
        <div className="pt-4 md:px-10 xl:px-20">
          <CategorySlider
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
          // remount component on category change
          key={activeCategory}
        >
          <ListingGrid>
            {isLoading &&
              Array(30)
                .fill(1)
                .map((el, i) => <ListingSkeleton key={i} />)}
            {!isLoading && listings && (
              <ListingCards data={listings} activeCategory={activeCategory} />
            )}
          </ListingGrid>
        </ScrollableVertical>
      </div>
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
        className="z-50"
      >
        <SearchDrawer handleHideDrawer={() => setShowDrawer(false)} />
      </SlideIn>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const categories = await prisma.category.findMany()

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  }
}
