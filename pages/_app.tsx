import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FooterContext from 'context/FooterContext'
import TheFooter from 'components/TheFooter'
import { SlideIn } from 'components/SlideIn'
import { useState } from 'react'
import { useWindowWidth } from 'hooks/useWindowWidth'
import WindowWidthContext from 'context/WindowWidthContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showFooter, setShowFooter] = useState(false)
  const windowWidth = useWindowWidth()

  return (
    <>
      <WindowWidthContext.Provider value={windowWidth}>
        <FooterContext.Provider value={{ setShowFooter }}>
          <Component {...pageProps} />
          <SlideIn show={showFooter} styles={{ enter: { bottom: '0' } }}>
            <TheFooter />
          </SlideIn>
        </FooterContext.Provider>
      </WindowWidthContext.Provider>
    </>
  )
}
