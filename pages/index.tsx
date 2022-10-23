import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Explore from './Explore'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center pb-2">
      <Explore />
    </div>
  )
}

export default Home
