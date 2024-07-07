import Image from 'next/image'
import React from 'react'
import ValuesCards from './ValuesCards'

const Values = () => {
  return (
    <div className='w-full flex flex-col gap-24 justify-center items-center py-0 pb-40 px-20 font-semibold leading-[30px]'>
        <div className='w-full flex flex-col gap-2'>
            <p className='uppercase text-[12px]'>Our values</p>
            <h4 className='text-6xl leading-[80px]'>Our Main Values at AIforAll</h4>
            <p className='text-2xl'>AIforAll is creating platform for assisted learning, interactive assisted automated education provided by an Artificial Intelligence(AI)Tutors</p>
        </div>
        <div className='w-full flex flex-col gap-11'>
            <div className='w-full flex gap-11'>
                <ValuesCards 
                img = "/assets/like-shapes.png"
                imgWidth={72}
                imgHeight={72}
                headingClass="value-h"
                heading = "Empowering  Powers"
                desc = "This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&rdquo; and &ldquo;building critical thinking skills&rdquo; can be used to elaborate."
                width = "w-[495px]"
                alt = "star"
                glowClass = "glow absolute p-72 rotate-[-57deg] right-0 -bottom-72 bg-[#FFDE59] opacity-40 z-20"
                textClass='text-[18px] leading-[30px] w-[355px]'
                />
                <ValuesCards 
                img = "/assets/magic-star.png"
                imgWidth={72}
                imgHeight={72}
                headingClass="value-h"
                heading = "Accessible Education"
                desc = "This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&rdquo; and &ldquo;building critical thinking skills&rdquo; can be used to elaborate."
                width = "w-[745px]"
                alt = "star"
                glowClass = "glow absolute p-72 rotate-[-57deg] -right-52 -top-64 opacity-40 bg-[#FFDE59] z-20"
                textClass='text-[18px] leading-[30px] w-[399px]'
                />
            </div>
            <div className='w-full grid grid-cols-3 gap-11'>
                <ValuesCards 
                img = "/assets/personalcard.png"
                imgWidth={56.64}
                imgHeight={56.64}
                headingClass="value-h2"
                heading = "Personalized Learning"
                desc = "This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&rdquo; and &ldquo;building critical thinking skills&rdquo; can be used to elaborate."
                width = ""
                alt = "star"
                glowClass = "glow absolute p-72 rotate-[-57deg] -left-52 -bottom-64 opacity-40 bg-[#FFDE59] z-20"
                textClass='text-[16px] leading-[24px] w-[311px]'
                />
                <ValuesCards 
                img = "/assets/unlimited.png"
                imgWidth={56.64}
                imgHeight={56.64}
                headingClass="value-h2"
                heading = "Data-driven Improvement"
                desc = "This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&rdquo; and &ldquo;building critical thinking skills&rdquo; can be used to elaborate."
                width = ""
                alt = "star"
                glowClass = "glow absolute p-72 rotate-[-57deg] right-0 -top-64 opacity-40 bg-[#FFDE59] z-20"
                textClass='text-[16px] leading-[24px] w-[311px]'
                />
                <ValuesCards 
                img = "/assets/medal-star.png"
                imgWidth={56.64}
                imgHeight={56.64}
                headingClass="value-h2"
                heading = "Engaging Instructions"
                desc = "This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&rdquo; and &ldquo;building critical thinking skills&rdquo; can be used to elaborate."
                width = ""
                alt = "star"
                glowClass = "glow absolute p-72 rotate-[-57deg] -right-52 -bottom-64 opacity-40 bg-[#FFDE59] z-20"
                textClass='text-[16px] leading-[24px] w-[311px]'
                />
            </div>
        </div>
    </div>
  )
}

export default Values