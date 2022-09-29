import Image from 'next/image'

import { StyledButton } from '@/components'

function Navbar() {
  return (
    <div className="mx-auto flex w-[110rem] items-center justify-between py-[.5rem]">
      <div className="w-[6.4rem]">
        <Image
          src="/logo.svg"
          alt="logo"
          layout="responsive"
          width={50}
          height={50}
        />
      </div>
      <StyledButton type="dark" text="Free Consultation" onClick={() => {}} />
    </div>
  )
}

export default Navbar
