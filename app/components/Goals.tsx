import Image from 'next/image'
import React from 'react'

const Goals = () => {
  return (
    <div className='w-full flex flex-col gap-24 justify-center items-center py-48 px-20 font-semibold leading-[30px]'>
        <div className='w-full flex flex-col gap-2'>
            <p className='uppercase text-[12px]'>Our goals</p>
            <h4 className='text-6xl leading-[80px]'>We‘re creating platform for assisted learning</h4>
            <p className='text-2xl'>AIforAll is creating platform for assisted learning, interactive assisted automated education provided by an Artificial Intelligence(AI)Tutors</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-16'>
            <div className='flex gap-8 h-full pb-10'>
                <div className='flex flex-col gap-8'>
                    <Image src="/assets/goal1.png" width={305} height={282} alt='goal1' className='w-[550px] z-30'/>
                    <Image src="/assets/goal3.png" width={305} height={282} alt='goal1' className='w-[550px] z-30'/>
                </div>
                <div className='relative flex flex-col justify-end items-end  gap-8'>
                    <div className='absolute  p-24 top-32 rotate-[-57deg] -left-10 bg-[#FFDE59] blur-3xl opacity-15'></div>
                    <Image src="/assets/goal2.png" width={305} height={282} alt='goal1' className='w-[550px] z-30'/>
                    <Image src="/assets/goal4.png" width={305} height={282} alt='goal1' className='w-[550px] z-30'/>
                </div>
            </div>
            <div className='flex flex-col gap-28 pt-20'>
                <div className='flex flex-col gap-5'>
                    <h3 className='font-bold text-2xl'>Our Mission</h3>
                    <p className='text-base'>Learn from industry-leading experts and get hands-on experience with the latest generative AI tools and techniques in an hour or less. <br/>Explore prompt engineering, AI agents, retrieval augmented generation, and more.</p>
                    <p>Goldilock make earnings and arn from industry-leading experts and get hands-on experience with the latest generative AI tools and techniques in an hour or less, explore prompt engineering, </p>
                </div>
                <div className='flex flex-col gap-8'>
                    <h4 className='uppercase text-xs'>The stats</h4>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col gap-2 mb-[78px]'>
                            <h1 className='text-7xl font-semibold'>300K</h1>
                            <p className='text-xs capitalize px-1'>active clients</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-[78px] border-l border-[#888888] pl-16'>
                            <h1 className='text-7xl font-semibold'>1.5M</h1>
                            <p className='text-xs capitalize px-1'>users</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-7xl font-semibold'>12</h1>
                            <p className='text-xs capitalize px-1'>volunteers</p>
                        </div>
                        <div className='flex flex-col gap-2 border-l border-[#888888] pl-16'>
                            <h1 className='text-7xl font-semibold'>3K+</h1>
                            <p className='text-xs capitalize px-1'>satisfied clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals