import Image from 'next/image'
import React from 'react'
import { PEOPLE_URL } from '../constants'

const Hero = () => {
  return (
    <div className='w-full flex flex-col gap-8 justify-center items-center px-64 pt-20 text-center'>
        <div className='w-96 h-96 p-12 bg-[#FFDE59] z-0 absolute top-5 blur-3xl opacity-15'>
        </div>
        <div className='flex gap-4 bg-white/10 backdrop-blur-sm pr-4 rounded-full justify-center items-center'><span className='flex gap-1 bg-[#FBCE07] px-2 py-2 rounded-full z-50'>New <Image src="/assets/star.png" width={7.78} height={7.78} alt='star'/></span>Use AI Assistant for better learning</div>
        <h2 className='w-[674px] text-center leading-[50px] text-[44px] font-bold z-50'>AI for All : Digital AI Teaching Assistant for <span>teachers</span></h2>
        <p className='text-[20px] px-5 z-50'>Learn from industry-leading experts and get hands-on experience with the latest<br/> generative AI tools and techniques in an hour or less.<br/> Explore prompt engineering, AI agents, retrieval augmented generation, and more.</p>
        <div className='flex gap-3'>
            <button className='contact-button w-[133px] rounded-full border border-[#FBCE07] px-2 py-2 text-white'>Contact us</button>
            <button className='demo-button w-[203px] flex justify-center items-center rounded-full px-2 py-2 text-black'>Request a Demo <Image src="/assets/play.png" width={24} height={24} alt='play'/></button>
        </div>
        <div className='flex gap-3 justify-center items-center'>
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map(url => (
              <Image 
                className="inline-block border border-[#818181] h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={36}
                height={36}
              />
            ))}
          </span>

            <div className='flex flex-col text-left'>
                <h1 className='text-[22px] font-medium leading-[25.78px]'>Over 1 Million</h1>
                <p className='text-sm'>The stats are the opinion of millions of satisfied Users</p>
            </div>
        </div>
        <div className='w-full -mt-28'>
            <Image src="/assets/doll.png" width={631.35} height={420.9} alt='hero-doll'/>
        </div>
    </div>
  )
}

export default Hero