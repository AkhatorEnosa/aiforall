import Image from 'next/image'
import React from 'react'

type ValueProps = {
    img: string,
    imgHeight: number,
    imgWidth: number,
    headingClass: string,
    heading: string,
    desc: string,
    width?: string,
    alt: string,
    glowClass: string,
    textClass: string
}

const ValuesCards = ({img, imgWidth, imgHeight, headingClass, heading, desc, width, alt, glowClass, textClass} : ValueProps) => {
  return (
    <div className={`flex flex-col ${width} gap-6 pl-5 pt-5 pb-10 border-[0.4px] border-[#F5F3F38F] rounded-[40px] backdrop-blur-3xl overflow-clip z-50`}>
        <Image src={img} width={imgWidth} height={imgHeight} alt={alt}/>
        <h2 className={headingClass}>{heading}</h2>
        <p className={textClass}>{desc}</p>
        <div className={glowClass}></div>
        {/* <p>This value emphasizes how the AI tutors help students become self-directed learners.  Phrases like &ldquo;fostering independence&rdquo; and &ldquo;building critical thinking skills&rdquo; can be used to elaborate.</p> */}
    </div>
  )
}

export default ValuesCards