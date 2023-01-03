import { faker } from '@faker-js/faker'
import { CategoryEnum, ListingHomeDetail, Prisma } from '@prisma/client'
import { add } from 'date-fns'

export function getRandomHost(rand: number) {
  const gender = rand >= 0.5 ? 'female' : 'male'
  const randAvatarIndex = getRandomInt(1, 3)

  return {
    hostName: faker.name.firstName(gender),
    hostAvatar: `${gender}-${randAvatarIndex}`,
  }
}

export function getRandomListingName(categories: CategoryEnum[]) {
  if (categories.includes('Beaches')) {
    return 'Charming beachfront place - perfect for a romantic getaway'
  }

  if (categories.includes('Tropical')) {
    return 'Tropical paradise - pool, palm trees, and ocean views'
  }

  if (categories.includes('Apartments')) {
    return 'Stylish apartment with all the comforts of home'
  }
  if (categories.includes('Desert')) {
    return 'Stylish desert retreat with stunning views'
  }
  if (categories.includes('Windmills')) {
    return 'Unique windmill home with breathtaking views'
  }

  if (categories.includes('Cabins')) {
    return 'Unique cabin with all the amenities'
  }

  if (categories.includes('Coasts')) {
    return 'Charming place with ocean views'
  }
  if (categories.includes('Wooden')) {
    return 'Cozy wooden place villa with all the amenities'
  }
  if (categories.includes('Play')) {
    return 'Chic place - excitement at your fingertips'
  }
  if (categories.includes('Downtown')) {
    return 'Charming downtown home - walk to all the best shops and restaurants'
  }
  if (categories.includes('Mountains')) {
    return 'Majestic mountain retreat with panoramic views'
  }
  if (categories.includes('Landmarks')) {
    return 'Stylish place steps from the top attractions'
  }
  if (categories.includes('Camping')) {
    return 'Camping in the great outdoors'
  }
  if (categories.includes('Minimal')) {
    return 'Minimalist villa with all the amenities'
  }
  if (categories.includes('Yacht')) {
    return 'Private yacht with all the amenities'
  }
  if (categories.includes('Islands')) {
    return 'Cozy place on the islands'
  }
  if (categories.includes('Skiing')) {
    return 'Ski-in/ski-out - hit the slopes right from your doorstep'
  }
  if (categories.includes('Farms')) {
    return 'Quaint country farmhouse - peace and quiet in nature'
  }
  if (categories.includes('Forests')) {
    return 'Cozy place in the woods'
  }
  if (categories.includes('Lakes')) {
    return 'Lakeside place - fishing, boating, and bonfires'
  }
  if (categories.includes('Golfing')) {
    return 'Charming place steps from the green'
  }

  if (categories.includes('Containers')) {
    return 'Tiny place - a unique travel experience'
  }
  if (categories.includes('Countryside')) {
    return 'Cozy countryside retreat with sweeping views'
  }
  if (categories.includes('Sailing')) {
    return 'Private sailboat with modern comforts'
  }
  if (categories.includes('Arctic')) {
    return 'Charming place with panoramic views of the aurora borealis'
  }
  if (categories.includes('Rainforests')) {
    return 'Cozy house in the rainforest canopy'
  }
  if (categories.includes('Vineyards')) {
    return 'Luxurious place on a vineyard with wine tastings available'
  }
  if (categories.includes('Luxe')) {
    return 'Luxurious retreat with hot tub and pool'
  }
  if (categories.includes('Lighthouses')) {
    return 'Cozy place with breathtaking views'
  }

  return 'Amazing place - perfect for relaxation"'
}

export function getRandomPlaceType() {
  const placeTypes = ['Entire place']
  return getRandomItem(placeTypes)
}

export function getRandomItem(arr: any[]) {
  return arr[getRandomInt(0, arr.length - 1)]
}

export function getRandomPeriod() {
  const now = Date.now()
  const start = faker.date.between(
    now,
    add(now, {
      days: 180,
    })
  )
  const end = faker.date.between(
    start,
    add(start, {
      days: 15,
    })
  )

  return [start, end]
}

// inclusive
function getRandomInt(min: number, max: number) {
  const range = max - min + 1
  return Math.floor(Math.random() * range) + min
}

export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function decimalAdjust(value: number, exp: number = 0) {
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN
  } else if (exp === 0) {
    return Math.floor(value)
  }
  const [magnitude, exponent = 0] = value.toString().split('e')
  const adjustedValue = Math.floor(
    parseFloat(`${magnitude}e${(exponent as number) - exp}`)
  )
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split('e')
  return Number(`${newMagnitude}e${+newExponent + exp}`)
}

export function getRandomHome() {
  const bedroomNum = getRandomInt(1, 8)
  const bedNum = Math.round(getRandomNumber(bedroomNum, bedroomNum * 1.5))
  const guestNum = Math.round(getRandomNumber(bedNum, bedNum * 2))
  const bathNum = Math.round(getRandomNumber(bedroomNum * 0.6, bedroomNum))

  const homeDetails: Omit<Prisma.ListingHomeDetailCreateInput, 'listing'>[] = [
    { type: 'guest', quantity: guestNum },
    { type: 'bedroom', quantity: bedroomNum },
    { type: 'bed', quantity: bedNum },
    { type: 'bathroom', quantity: bathNum },
  ]

  return homeDetails
}
