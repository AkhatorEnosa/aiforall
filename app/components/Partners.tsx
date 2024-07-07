import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='w-full flex flex-col gap-24 justify-center items-center py-0 pb-40 px-20 font-semibold leading-[30px]'>
        <div className='w-full flex flex-col gap-2'>
            <p className='uppercase text-[12px]'>Our partners</p>
            <h4 className='text-6xl leading-[80px]'>..theyve worked with Us</h4>
        </div>
        <div className='flex flex-col gap-8 w-full justify-center items-center'>
            <div className='flex gap-[18px]'>
                <Image src="/assets/partner1.png" width={178} height={40} alt='partner1'/>
                <Image src="/assets/partner2.png" width={178} height={40} alt='partner1'/>
                <Image src="/assets/partner1.png" width={178} height={40} alt='partner1'/>
                <Image src="/assets/partner2.png" width={178} height={40} alt='partner1'/>
                <Image src="/assets/partner1.png" width={178} height={40} alt='partner1'/>
            </div>

            <div className='flex gap-[18px]'>
                <Image src="/assets/partner1.png" width={178} height={40} alt='partner1'/>
                <Image src="/assets/partner2.png" width={178} height={40} alt='partner1'/>
                <Image src="/assets/partner1.png" width={178} height={40} alt='partner1'/>
                <Image src="/assets/partner2.png" width={178} height={40} alt='partner1'/>
            </div>
        </div>
    </div>
  )
}

export default Partners