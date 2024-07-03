/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import React from 'react'

type ListProps = {
    num: string,
    title: string,
    img: string,
    desc: string
    border?: string
}

const OnboardingList = ({img, num, title, desc, border} : ListProps) => {
  return (
    <div className={`grid grid-cols-8 justify-center items-center gap-24 ${border} border-[#CDCDCD]/50`}>
        <h1 className='col-span-1 text-[64px] font-light'>{num}</h1>
        <h2 className='col-span-3 text-[44px] font-semibold '>{title}</h2>
        <Image src={img} height={176} width={104} alt='' className='col-span-1 scale-150'/>
        <p className='w-full col-span-3 text-sm leading-6 font-semibold '>{desc}</p>
    </div>
  )
}

export default OnboardingList