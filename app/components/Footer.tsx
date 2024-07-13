import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-col gap-20 w-full bg-[#3B3B3B] text-[#ffffff] font-normal text-base leading-6'>
        <div className='flex justify-center gap-32 pt-16 px-10'>
            <div className='flex flex-col gap-5'>
                <h2 className='font-extrabold text-5xl'>AiforAll</h2>
                <div className='w-full flex justify-between gap-5'>
                    <FaXTwitter className='cursor-pointer'/>
                    <FaInstagram className='cursor-pointer'/>
                    <FaYoutube className='cursor-pointer'/>
                    <FaLinkedin className='cursor-pointer'/>
                </div>
            </div>
            <ul className='flex flex-col gap-8'>
                <li className='hover:text-[#FBCE07] transition-all duration-300 cursor-pointer'>Home</li>
                <li className='hover:text-[#FBCE07] transition-all duration-300 cursor-pointer'>About</li>
                <li className='hover:text-[#FBCE07] transition-all duration-300 cursor-pointer'>Career</li>
                <li className='hover:text-[#FBCE07] transition-all duration-300 cursor-pointer'>Contact</li>
            </ul>
            <ul className='flex flex-col gap-8'>
                <li className='hover:text-[#FBCE07] transition-all duration-300 cursor-pointer'>Help</li>
                <li className='hover:text-[#FBCE07] transition-all duration-300 cursor-pointer'>Privacy Policy</li>
                <li className='hover:text-[#FBCE07] transition-all duration-300 cursor-pointer'>Terms and Conditions</li>
            </ul>
            <div className='flex flex-col gap-5'>
                <div>
                    <h1 className='font-semibold text-[28px] leading-[36px]'>Subscribe to AIforAll newsletter</h1>
                    <p>This value emphasizes how the AI tutors help students become self-directed </p>
                </div>
                <div className='flex gap-2'>
                    <input type="text" placeholder='Email' className='outline-none bg-[#888888] border-none px-5 py-4 rounded-full placeholder:text-white w-[318px]'/>
                    <button className='signup w-[138px] rounded-full px-2 py-2 text-black'>Submit</button>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col py-6  bg-[#FFDE59] text-[#3B3B3B] justify-center items-center'>
            <p className=''>All rights Reserved Copyrights</p>
            <p className='text-xs mt-4'>❤️ Figma Design by <span className='font-semibold underline'><Link href="https://x.com/ux_geek_">Samsudeen Afolabi</Link></span></p>
        </div>
    </div>
  )
}

export default Footer