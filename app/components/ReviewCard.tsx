import Image from 'next/image'
import React from 'react'

type CardProps = {
    image: string,
    name: string,
    desc: string
}

const ReviewCard = ({image, name, desc} : CardProps) => {
  return (
            <div className='review-content flex  min-w-[350px] min-h-[94px] p-[0.6px]'>
              <div className='min-w-full min-h-full flex justify-center items-center bg-[#3B3B3B] rounded-[44px] py-2 overflow-hidden'>
                <Image
                  src={image}
                  width={400} height={0} alt='review'
                  className='pl-16 scale-125'
                />
                <div className='relative flex flex-col gap-8 h-full text-[16px] -left-24 leading-6 justify-center items-center font-normal'>
                  <div className='w-[300px] flex gap-0 justify-start'>
                  <Image src="/assets/quote-up.png" width={38.4} height={38.4} alt='quote' className='relative -top-3 w-[38.4px] h-[38.4px]'/>
                    <span className='w-[210px] h-[191px]'>This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&ldquo; and &ldquo;building critical thinking skills&ldquo; can be used to elaborate.</span>
                  <Image src="/assets/quote-down.png" width={38.4} height={38.4} alt='quote' className='relative -bottom-[164px] right-28 w-[38.4px] h-[38.4px]'/>
                  </div>
                  <div className='flex flex-col gap-0 '>
                    <h2 className='font-bold text-lg mb-0 pb-0 leading-3'>{name}<br/>
                    <span className='font-semibold text-xs'>{desc}</span></h2>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ReviewCard