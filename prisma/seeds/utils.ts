import { faker } from '@faker-js/faker'
import { add } from 'date-fns'

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
