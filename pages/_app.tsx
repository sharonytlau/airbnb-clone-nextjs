import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FooterContext from 'context/FooterContext'
import TheFooter from 'components/TheFooter'
import { SlideIn } from 'components/SlideIn'
import { useState } from 'react'
import { useWindowWidth } from 'hooks/useWindowWidth'
import WindowWidthContext from 'context/WindowWidthContext'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BouncingLoader from 'components/BouncingLoader'

import localFont from '@next/font/local'

const sans = localFont({
  src: [
    {
      path: '../fonts/poppins-v20-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/poppins-v20-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/poppins-v20-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showFooter, setShowFooter] = useState(true)
  const windowWidth = useWindowWidth()
  console.log('app rerender')
  const size =
    windowWidth < 550 ? 'small' : windowWidth < 750 ? 'medium' : 'large'

  const router = useRouter()

  useEffect(() => {
    if (['/more', '/wishlists', '/trips', '/'].includes(router.pathname)) {
      setShowFooter(true)
    }
  }, [router, setShowFooter])

  // app loading state
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('router is', router)

    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <main className={sans.variable}>
      <SessionProvider session={pageProps.session}>
        <WindowWidthContext.Provider value={windowWidth} key={size}>
          <FooterContext.Provider value={{ setShowFooter }}>
            <Component {...pageProps} />
            <SlideIn show={showFooter} styles={{ enter: { bottom: '0' } }}>
              <TheFooter />
            </SlideIn>
          </FooterContext.Provider>
        </WindowWidthContext.Provider>
      </SessionProvider>
      {/*  */}
      {loading && (
        <div className="fixed top-0 right-0 w-screen h-screen bg-white bg-opacity-5 z-40 flex-center  ">
          <BouncingLoader />
        </div>
      )}
    </main>
  )
}
