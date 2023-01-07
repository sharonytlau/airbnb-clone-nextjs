import { format } from 'date-fns'

export function getEnumKeys<T extends Object>(e: T) {
  const keys = Object.keys(e).filter((value) => isNaN(Number(value)) !== false)
  // Array<keyof typeof e>
  return keys as Array<keyof T>
}

export function splitArray<T>(arr: T[], len: number) {
  return arr.reduce((resultArr: T[][], item, index) => {
    // calculate which chunk the item belongs to
    const chunkIndex = Math.floor(index / len)

    // check if the chunck has been created
    if (!resultArr[chunkIndex]) {
      resultArr[chunkIndex] = [] // start a new chunk
    }

    // add item to the chunk
    resultArr[chunkIndex].push(item)

    return resultArr
  }, [])
}

export function compareMonth(d1: Date, d2: Date) {
  return format(d1, 'M') === format(d2, 'M')
}

export function compareDates(d1: Date, d2: Date) {
  return format(d1, 'MMddyyyy') === format(d2, 'MMddyyyy')
}

export function includesDate(dArr: Date[], d: Date) {
  return dArr.some((d2) => compareDates(d, d2))
}

export function filterDate(dArr: Date[], d: Date) {
  return dArr.filter((d2) => {
    return !compareDates(d, d2)
  })
}

export function capFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
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

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}

export function checkInRange(
  v1: number,
  v2: number,
  diviation: number
): boolean {
  return Math.abs(v1 - v2) < diviation
}
