import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FooterContext from 'context/state'
import TheFooter from 'components/TheFooter'
import { SlideIn } from 'components/SlideIn'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showFooter, setShowFooter] = useState(true)

  return (
    <>
      <FooterContext.Provider value={{ setShowFooter }}>
        <Component {...pageProps} />
        <SlideIn show={showFooter} styles={{ enter: { bottom: '0' } }}>
          <TheFooter />
        </SlideIn>
      </FooterContext.Provider>
    </>
  )
}
