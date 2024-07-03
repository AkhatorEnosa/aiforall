import Image from 'next/image'
import React from 'react'

const Volunteers = () => {
  return (
    <div className='w-full flex flex-col gap-24 justify-center items-center py-0 pb-40 px-20 font-semibold leading-[30px]'>
        <div className='w-full flex flex-col gap-2'>
            <p className='uppercase text-[12px]'>Our volunteers</p>
            <h4 className='text-6xl leading-[80px]'>Meet our amazing volunteers.</h4>
            <p className='text-2xl'>AIforAll is creating platform for assisted learning, interactive assisted automated education provided by an Artificial Intelligence(AI)Tutors</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-28 leading-6'>
                <div className='flex flex-col gap-8'>
                    <p className='text-base'>Learn from industry-leading experts and get hands-on experience with the latest generative AI tools and techniques in an hour or less.<br/>Explore prompt engineering, AI agents, retrieval augmented generation, and more.rom industry-leading experts and get hands-on experience with the latest generative AI tools and techniques in an hour or less.<br/>Explore prompt engineering, AI agents, retrieval augmented generation, and more.</p>

                    <p>From industry-leading experts and get hands-on experience with the latest generative AI tools and techniques in an hour or less.<br/>Explore prompt engineering, AI agents, retrieval augmented generation, and more.</p>

                    <button className='signup w-[97px] rounded-full px-2 py-2 font-normal'>Join Us</button>
                    <div className='absolute p-52 -left-10 rotate-[-57deg] bg-[#FFDE59] blur-3xl opacity-10'></div>
                </div>
                <div className="relative flex w-fit h-fit">
                    <Image src="/assets/goal5.png" width={563} height={378} alt='people' className='z-30'/>
                    <div className='absolute p-52 rotate-[-57deg] -right-5 -top-52 bg-[#FFDE59] blur-3xl opacity-10'></div>
                </div>
        </div>
    </div>
  )
}

export default Volunteers