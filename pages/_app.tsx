import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FooterContext from 'context/FooterContext'
import TheFooter from 'components/TheFooter'
import { SlideIn } from 'components/SlideIn'
import { useState } from 'react'
import { useMediaQuery } from 'hooks/useMediaQuery'
import MediaContext from 'context/MediaContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showFooter, setShowFooter] = useState(true)
  const isLargeScreen = useMediaQuery('(min-width: 950px)')

  return (
    <>
      <MediaContext.Provider value={{ isLargeScreen }}>
        <FooterContext.Provider value={{ setShowFooter }}>
          <Component {...pageProps} />
          <SlideIn show={showFooter} styles={{ enter: { bottom: '0' } }}>
            <TheFooter />
          </SlideIn>
        </FooterContext.Provider>
      </MediaContext.Provider>
    </>
  )
}
