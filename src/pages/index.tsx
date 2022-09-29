import type { NextPage } from 'next'
import Head from 'next/head'

import { Carousel, Navbar, GridGallery } from '@/containers'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Single Page Design Portfolio</title>
        <meta name="description" content="single page design portfolio" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="h-full w-full bg-shallowWhite">
        <Navbar />
        <div className="mt-[7rem] w-full text-center">
          <h1 className="mb-[2.3rem] text-deepBlack">
            Design solutions made easy
          </h1>
          <p className="mx-auto w-[70rem]">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>
        <GridGallery />
        <Carousel />
      </div>
    </div>
  )
}

export default Home
