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
