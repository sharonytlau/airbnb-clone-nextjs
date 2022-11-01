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
    <>
      {data.map((el) => {
        const { image, title, price, rating, distance } = el
        return (
          <div className="space-y-3" key={title}>
            <div className="w-full h-[300px] relative rounded-3xl overflow-hidden">
              <Image
                src={`${image}/w=800`}
                layout="fill"
                objectFit="cover"
                alt={title}
              />
            </div>
            <div className="flex justify-between text-[15px]">
              <div>
                <p className="font-medium"> {title} </p>
                <p className="text-zinc-450"> {`${distance} miles away`} </p>
                <p className="text-zinc-450"> {'Oct 22 - 25'} </p>
                <p className="mt-1.5">
                  <span className="font-semibold">{`$${price}`}</span>
                  <span> night </span>
                </p>
              </div>
              <div> {`★ ${rating}`} </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ListingCards
