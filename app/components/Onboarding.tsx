import Image from 'next/image'
import React from 'react'
import OnboardingList from './OnboardingList'

const Onboarding = () => {
  return (
    <div className='w-full flex flex-col gap-12 justify-center items-center py-0 pb-40 px-20 font-semibold leading-[30px]'>
        <div className='w-full flex flex-col gap-2'>
            <p className='uppercase text-[12px]'>Onboarding</p>
            <div className='flex justify-between items-center'>
                <h4 className='text-4xl font-extralight leading-[80px]'>How do you get started?</h4>
                <div className='contact-button flex justify-center items-center rounded-full gap-2 border border-[#FBCE07] pl-6 px-2 py-2 text-white text-lg cursor-pointer'>Teacher <button className='rounded-full p-[10px] px-5 font-normal bg-[#FBCE07] text-[#212121] cursor-pointer'>Student</button></div>
            </div>
        </div>
        <div className='w-full flex flex-col gap-6'>
            <OnboardingList img="/assets/onboard1.png" num='01' title='Sign Up' desc="AIforAll is creating platform for assisted learning, interactive assisted automated education provided by an Artificial Intelligence(AI)Tutors" border='border-b'/>
            <OnboardingList img="/assets/onboard2.png" num='02' title='Create your profile' desc="AIforAll is creating platform for assisted learning, interactive assisted automated education provided by an Artificial Intelligence(AI)Tutors" border='border-b'/>
            <OnboardingList img="/assets/onboard3.png" num='03' title='Explore and Use' desc="AIforAll is creating platform for assisted learning, interactive assisted automated education provided by an Artificial Intelligence(AI)Tutors"/>
        </div>
    </div>
  )
}

export default Onboarding