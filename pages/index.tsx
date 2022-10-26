import type { NextPage } from 'next'
import Explore from './Explore'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Explore />
    </div>
  )
}

export default Home
