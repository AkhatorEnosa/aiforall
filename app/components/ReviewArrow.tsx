import Image from 'next/image'
import React from 'react'

type ArrowProps = {
    src: string,
    alt: string
}

const ReviewArrow = ({src, alt} : ArrowProps) => {
  return (
    <div className='slider-ctrl bg-[#212121] flex justify-center items-center w-12 h-12 rounded-full cursor-pointer hover:rotate-[360deg] transition-all duration-300'>
        <Image src={src} width={48} height={48} alt={alt}/>
    </div>
  )
}

export default ReviewArrow