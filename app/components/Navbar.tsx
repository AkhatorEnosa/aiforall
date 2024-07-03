import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center text-sm gap-8 bg-white/10 backdrop-blur-sm py-2 px-32 z-50">
        <div className='flex gap-8'>
            <Link href="">Home</Link>
            <Link href="">Student</Link>
            <Link href="">Teacher</Link>
        </div>
        <div  className='left-0 flex justify-center items-between absolute w-full'>
            <Image src="/assets/logo.png" width={56} height={56} alt='logo'/>
        </div>
        <div className='flex gap-5'>
            <div className='flex justify-center items-center gap-2 rounded-full border border-[#FBCE07] px-2 py-2'>
                <Image 
                    src="/assets/search.png"
                    width={24}
                    height={24}
                    alt=''
                    />
                <input type="" placeholder='Search Jobs' className='outline-none bg-transparent border-none placeholder:text-white w-28'/>
            </div>
            <div className='flex gap-2 '>
                <button className='w-[97px] rounded-full border border-[#FBCE07] px-2 py-2 text-white'>Login</button>
                <button className='signup w-[97px] rounded-full px-2 py-2 text-black'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar


