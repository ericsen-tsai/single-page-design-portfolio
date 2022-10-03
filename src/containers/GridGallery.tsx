import Image from 'next/image'

import GraphicDesignIcon from '@/assets/pattern-graphic-design.svg'
import IllustrationsIcon from '@/assets/pattern-illustrations.svg'
import MotionGraphicsIcon from '@/assets/pattern-motion-graphics.svg'
import PhotographyIcon from '@/assets/pattern-photography.svg'
import UiUxIcon from '@/assets/pattern-ui-ux.svg'
import AppsIcon from '@/assets/pattern-apps.svg'

function GridGallery() {
  return (
    <div className="mx-auto grid h-[36rem] w-[90vw] min-w-[80rem] grid-cols-6 grid-rows-2 gap-[2.5rem] py-[.5rem]">
      <div className="relative col-span-2 row-span-2 rounded-[1rem] bg-purple">
        <GraphicDesignIcon className="absolute top-[2.5rem] right-[2.5rem]" />
        <p className="absolute bottom-[2rem] left-[2rem] text-4xl text-shallowWhite">
          Graphic Design
        </p>
      </div>
      <div className="relative col-span-1 row-span-1 rounded-[1rem] bg-orange">
        <UiUxIcon className="absolute top-[2.5rem] right-[2.5rem]" />
        <p className="absolute bottom-[2rem] left-[2rem] text-4xl text-shallowWhite">
          UI UX
        </p>
      </div>
      <div className="relative col-span-1 row-span-1 rounded-[1rem] bg-pink">
        <AppsIcon className="absolute top-[2.5rem] right-[2.5rem]" />
        <p className="absolute bottom-[2rem] left-[2rem] text-4xl text-shallowWhite">
          App
        </p>
      </div>
      <div className="relative col-span-2 row-span-1 rounded-[1rem] bg-greenBlue">
        <PhotographyIcon className="absolute top-[2.5rem] right-[2.5rem]" />
        <p className="absolute bottom-[2rem] left-[2rem] text-4xl text-shallowWhite">
          Photography
        </p>
      </div>
      <div className="relative col-span-2 row-span-1 rounded-[1rem] bg-redOrange">
        <IllustrationsIcon className="absolute top-[2.5rem] right-[2.5rem]" />
        <p className="absolute bottom-[2rem] left-[2rem] text-4xl text-shallowWhite">
          Illustrations
        </p>
      </div>
      <div className="relative col-span-2  row-span-1 rounded-[1rem] bg-wineRed">
        <MotionGraphicsIcon className="absolute top-[2.5rem] right-[2.5rem]" />
        <p className="absolute bottom-[2rem] left-[2rem] text-4xl text-shallowWhite">
          Motion Graphics
        </p>
      </div>
    </div>
  )
}

export default GridGallery
