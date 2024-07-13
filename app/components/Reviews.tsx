import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import ReviewCard from './ReviewCard'
import ReviewArrow from './ReviewArrow'

const Reviews = () => {
  return (
    <div className='relative w-full flex flex-col gap-24 justify-center items-center py-0 pb-40 px-20 font-semibold leading-[30px]'>
        <div className='w-[500px] h-28 glow absolute p-56 rotate-[-57deg] -top-16 opacity-40 bg-[#FFDE59] z-0'>
        </div>
        <div className='w-full flex flex-col gap-2'>
            <p className='uppercase text-[12px]'>Our Reviews</p>
            <h4 className='text-6xl leading-[80px]'>Hear from our Clients</h4>
        </div>
        <div className='w-[90%] flex justify-between items-center gap-10'>
          <ReviewArrow src='/assets/arrow-circle-left.png' alt='arrow-left'/>

          <div className='flex w-[1200px] relative flex-nowrap overflow-x-scroll overflow-y-hidden gap-[40px] '>
            <ReviewCard name='SAVYA JILL' desc='Mom of 3' image='/assets/review1.png'/>
            <ReviewCard name='GORKA deGUPTA' desc='Phd Student' image='/assets/review2.png'/>
          </div>

          <ReviewArrow src='/assets/arrow-circle-right.png' alt='arrow-right'/>
        </div>
        <div className='flex gap-2'>
          <div className='w-7 h-7 bg-[#FFFBEA] hover:bg-[#FBCE07] rounded-full cursor-pointer transition-all duration-300'></div>
          <div className='w-7 h-7 bg-[#FFFBEA] hover:bg-[#FBCE07] rounded-full cursor-pointer transition-all duration-300'></div>
          <div className='w-7 h-7 bg-[#FFFBEA] hover:bg-[#FBCE07] rounded-full cursor-pointer transition-all duration-300'></div>
          <div className='w-7 h-7 bg-[#FFFBEA] hover:bg-[#FBCE07] rounded-full cursor-pointer transition-all duration-300'></div>
        </div>
    </div>
  )
}

export default Reviews