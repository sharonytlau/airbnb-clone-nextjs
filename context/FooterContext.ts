import { createContext } from 'react'

const defaultContext: {
  // showFooter: boolean
  setShowFooter: Function
} = {
  // showFooter: true,
  setShowFooter: () => {},
}
const FooterContext = createContext(defaultContext)

export default FooterContext
