import { createContext } from 'react'

const defaultContext: {
  isLargeScreen: boolean
} = {
  isLargeScreen: true,
}
const MediaContext = createContext(defaultContext)

export default MediaContext
