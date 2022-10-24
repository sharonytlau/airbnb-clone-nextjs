export function getEnumKeys<T extends Object>(e: T) {
  const keys = Object.keys(e).filter((value) => isNaN(Number(value)) !== false)
  // Array<keyof typeof e>
  return keys as Array<keyof T>
}
