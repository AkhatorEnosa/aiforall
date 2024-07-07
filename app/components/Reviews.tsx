import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Reviews = () => {
  return (
    <div className='w-full flex flex-col gap-24 justify-center items-center py-0 pb-40 px-20 font-semibold leading-[30px]'>
        <div className='w-full flex flex-col gap-2'>
            <p className='uppercase text-[12px]'>Our Reviews</p>
            <h4 className='text-6xl leading-[80px]'>Hear from our Clients</h4>
        </div>
        <div className='w-full flex justify-between items-center gap-10'>
          <div className='slider-ctrl bg-[#212121] flex justify-center items-center w-12 h-12 rounded-full'>
            <Image src="/assets/arrow-circle-left.png" width={48} height={48} alt='arrow-right'/>
          </div>
          <div className='flex overflow-scroll'>
            <div className='review-content flex relative w-[600px]  h-[294px] p-[0.6px]'>
              <div className='w-full h-full flex justify-center items-center bg-[#3B3B3B] rounded-[44px] p-0 overflow-hidden'>
                <Image 
                  src="/assets/review1.png"
                  width={400} height={0} alt='review'
                  className='scale-110'
                />
                <div className='relative flex flex-col gap-8 h-full text-[16px] -left-24 leading-6 justify-center items-center font-normal'>
                  <div className='w-[300px] flex gap-0 justify-start'>
                  <Image src="/assets/quote-up.png" width={38.4} height={38.4} alt='quote' className='relative -top-3 w-[38.4px] h-[38.4px]'/>
                    <span className='w-[210px] h-[191px]'>This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&ldquo; and &ldquo;building critical thinking skills&ldquo; can be used to elaborate.</span>
                  <Image src="/assets/quote-down.png" width={38.4} height={38.4} alt='quote' className='relative -bottom-[164px] right-28 w-[38.4px] h-[38.4px]'/>
                  </div>
                  <div className='flex flex-col gap-0 '>
                    <h2 className='font-bold text-lg mb-0 pb-0 leading-3'>SAVYA JILL<br/>
                    <span className='font-semibold text-xs'>Mom of 3</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-ctrl bg-[#212121] flex justify-center items-center w-12 h-12 rounded-full'>
            <Image src="/assets/arrow-circle-right.png" width={48} height={48} alt='arrow-right'/>
          </div>
        </div>
    </div>
  )
}

export default Reviews