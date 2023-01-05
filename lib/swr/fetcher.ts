import { Fetcher } from 'swr'

const fetcher: Fetcher = async function (...args: Parameters<typeof fetch>) {
  console.log('args are', args)

  const res = await fetch(...args)
  return res.json()
}

export default fetcher
