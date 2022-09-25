import type { NextPage } from 'next'
import Head from 'next/head'

import { StyledButton, Pagination } from '@/components'

import { Carousel } from '@/containers'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Single Page Design Portfolio</title>
        <meta name="description" content="single page design portfolio" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="h-full w-full">
        <StyledButton text={'hello'} type="light" onClick={() => {}} />
        <Pagination
          onForwardButtonClick={() => {}}
          onBackwardButtonClick={() => {}}
        />
        <Carousel />
      </div>
    </div>
  )
}

export default Home
