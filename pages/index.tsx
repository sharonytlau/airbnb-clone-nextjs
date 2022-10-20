import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Explore from './Explore'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
     <Explore/>
    </div>
  )
}

export default Home
