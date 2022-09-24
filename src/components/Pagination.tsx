import React from 'react'

import ArrowLeftIcon from '@/assets/icon-arrow-left.svg'
import ArrowRightIcon from '../assets/icon-arrow-right.svg'

function Pagination({
  onBackwardButtonClick,
  onForwardButtonClick,
}: {
  onBackwardButtonClick: () => void
  onForwardButtonClick: () => void
}) {
  return (
    <div className="flex h-[6.4rem] w-[14.4rem] gap-[1.6rem]">
      <button
        className="btn flex h-[6.4rem] w-[6.4rem] cursor-pointer items-center justify-center rounded-full border-none bg-deepBlack hover:border-none hover:bg-purple"
        onClick={onBackwardButtonClick}
      >
        <ArrowLeftIcon />
      </button>
      <button
        className="btn flex h-[6.4rem]  w-[6.4rem] cursor-pointer items-center justify-center rounded-full border-none bg-deepBlack hover:border-none hover:bg-purple"
        onClick={onForwardButtonClick}
      >
        <ArrowRightIcon />
      </button>
    </div>
  )
}

export default Pagination
