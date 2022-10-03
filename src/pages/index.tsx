import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Carousel, Navbar, GridGallery } from '@/containers'
import { StyledButton } from '@/components'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Single Page Design Portfolio</title>
        <meta name="description" content="single page design portfolio" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="w-full bg-shallowWhite">
        <Navbar />
        <div className="mt-[7rem] mb-[5rem] w-[90vw] min-w-[80rem] text-center">
          <h1 className="mb-[2.3rem] text-deepBlack">
            Design solutions made easy
          </h1>
          <p className="mx-auto w-[70rem] text-deepBlack">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>
        <GridGallery />
        <div className="flex mx-auto mt-[5rem] w-[90vw] min-w-[80rem] items-center justify-between">
          <div className="w-[30vw] basis-[45%]">
            <Image
              src="/image-amy.webp"
              alt="amy"
              layout="responsive"
              width="100%"
              height="100%"
            />
          </div>

          <div className="flex basis-[45%] flex-col gap-[2.5rem]">
            <h3 className="text-deepBlack">
              I’m Amy, and I’d love to work on your next project
            </h3>
            <p className="text-deepBlack">
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </p>
            <StyledButton
              text="Free Consultation"
              type="light"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex mb-[5rem] mt-[10rem]">
          <h3 className="mx-auto inline-block text-deepBlack">My Work</h3>
        </div>
        <Carousel />
        <div className="card mx-auto mt-[-10rem] mb-[20rem] h-[40rem] w-[90rem] bg-deepBlack shadow-xl">
          <div className="flex card-body flex-row">
            <div className="flex h-[100%] w-[50%] flex-col justify-center gap-[5rem] p-[5rem]">
              <h3 className="inline-block text-shallowWhite">
                Book a call with me
              </h3>
              <p className="text-shallowWhite">
                I&apos;d love to have a chat to see how I can help you. The best
                first step is for us to discuss your project during a free
                consultation. Then we can move forward from there.
              </p>
            </div>

            <div className="grid w-[50%] place-items-center">
              <StyledButton
                text="Free Consultation"
                type="light"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
