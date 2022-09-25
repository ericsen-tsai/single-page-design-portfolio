import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import Slide1 from '@/assets/image-slide-1.jpg'
import Slide2 from '@/assets/image-slide-2.jpg'
import Slide3 from '@/assets/image-slide-3.jpg'
import Slide4 from '@/assets/image-slide-4.jpg'
import Slide5 from '@/assets/image-slide-5.jpg'

const togglesGroupId = 'Toggles'
const valuesGroupId = 'Values'
const mainGroupId = 'Main'

const imageSRCs = [Slide1, Slide2, Slide3, Slide4, Slide5]

const createCarouselItemImage = (index: React.Key) => (
  <div className="w-full" key={index}>
    <Image
      src={imageSRCs[Number(index) - 1]}
      alt={`slide${index}`}
      layout="responsive"
    />
  </div>
)

function Carousel() {
  return (
    <div className="relative">
      <ReactCarousel
        // {...getConfigurableProps()}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        swipeable={true}
        renderThumbs={() =>
          imageSRCs.map((img, idx) => (
            <div key={idx} className="w-full">
              <Image src={img} layout="responsive" alt="logo"></Image>
            </div>
          ))
        }
      >
        {[1, 2, 3, 4, 5].map(createCarouselItemImage)}
      </ReactCarousel>
    </div>
    // <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>
  )
}

export default Carousel
