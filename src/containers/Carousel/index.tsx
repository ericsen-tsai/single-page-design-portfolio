import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import Slide1 from '@/assets/image-slide-1.jpg'
import Slide2 from '@/assets/image-slide-2.jpg'
import Slide3 from '@/assets/image-slide-3.jpg'
import Slide4 from '@/assets/image-slide-4.jpg'
import Slide5 from '@/assets/image-slide-5.jpg'

import ArrowLeftIcon from '@/assets/icon-arrow-left.svg'
import ArrowRightIcon from '@/assets/icon-arrow-right.svg'

import styles from './Carousel.module.scss'

const imageSRCs = [Slide1, Slide2, Slide3, Slide4, Slide5]

const createCarouselItemImage = (index: React.Key) => (
  <div className="h-[100%] w-[95%] overflow-hidden rounded-[1rem]" key={index}>
    <Image
      src={`/image-slide-${Number(index)}.jpg`}
      alt={`slide${index}`}
      layout="responsive"
      width={600}
      height={338}
    />
  </div>
)

function Carousel() {
  return (
    <div className="relative h-[65rem] w-full">
      <ReactCarousel
        className={styles.customCarouselRoot}
        showIndicators={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={40}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button
            onClick={clickHandler}
            disabled={!hasPrev}
            className="btn absolute top-[calc(100%+5.6rem)] right-[55%] z-10 flex h-[6.4rem] w-[6.4rem] cursor-pointer items-center justify-center rounded-full border-none bg-deepBlack hover:border-none hover:bg-purple"
          >
            <ArrowLeftIcon />
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <button
            onClick={clickHandler}
            disabled={!hasNext}
            className="btn absolute top-[calc(100%+5.6rem)] left-[55%] flex h-[6.4rem] w-[6.4rem] cursor-pointer items-center justify-center rounded-full border-none bg-deepBlack hover:border-none hover:bg-purple"
          >
            <ArrowRightIcon />
          </button>
        )}
      >
        {[1, 2, 3, 4, 5].map(createCarouselItemImage)}
      </ReactCarousel>
    </div>
    // <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>
  )
}

export default Carousel
