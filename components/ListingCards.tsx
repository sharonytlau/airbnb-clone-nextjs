import React from 'react'
import Image from 'next/image'

type ListingCard = {
  image: string
  title: string
  price: number
  rating: number
  distance: number
}

type ListingCardsProps = {
  data: ListingCard[]
}

function ListingCards({ data }: ListingCardsProps) {
  return (
    <div className="flex-1 overflow-y-auto px-7 space-y-8 text-gray-900">
      {data.map((el) => {
        const { image, title, price, rating, distance } = el
        return (
          <div className="space-y-3">
            <div className="w-full h-[300px] relative rounded-3xl overflow-hidden">
              <Image src={`${image}/w=800`} layout="fill" objectFit="cover" />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-medium"> {title} </p>
                <p className="text-sm"> {`${distance} miles away`} </p>
                <p className="text-sm"> {'Oct 22 - 25'} </p>
                <p className="mt-2 text-sm">
                  <span className="font-bold">{`$${price}`}</span>
                  <span> night </span>
                </p>
              </div>
              <div className="font-bold"> {`★ ${rating}`} </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListingCards
