import { useState, useEffect } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    console.log('media effect run *****')

    const media = window.matchMedia(query)

    console.log({ matches, media })

    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      console.log('resize *****')
      setMatches(media.matches)
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}
