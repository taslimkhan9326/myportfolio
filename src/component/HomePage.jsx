import React from 'react';
import { FaGithub, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <>
     <div className="container mx-auto">
       <div className="max-w-[700px] ml-36 mt-20">
       <div>
        <img src="/images/banner.webp" alt="" className="rounded-[16px]" />
       </div>
       <div>
        <p className="text-xl leading-6 text-white mt-7">Hi, I'm <span className="text-sky-500 after:bg-sky-500">Taslim Khan</span></p>
        <h1 className="text-white font-bold text-[46px] leading-[52px] mt-5 mb-6">I make <span className='text-green-600'>Front-End</span> products that people <span className='text-pink-400'>love.</span></h1>
        <p className='text-slate-400 text-[20px]'>Developer, 2x acquired Founder, Indie Hacker, OSS Contributor, Guitarist and Student. I play read, write and travel for fun.</p>
       </div>
       <ul className='flex items-center mt-[72px] space-x-10'>
        <li className='text-[30px]'>
        <FaGithub className='text-gray-400 cursor-pointer hover:scale-125 duration-300' />
        </li>
        <li className='text-[30px]'>
        <FaTwitter className='text-gray-400 cursor-pointer hover:scale-125 duration-300' />
        </li>
        <li className='text-[30px]'>
        <FiLinkedin className='text-gray-400 cursor-pointer hover:scale-125 duration-300' />
        </li>
        <li className='text-[30px]'>
        <FaDiscord className='text-gray-400 cursor-pointer hover:scale-125 duration-300' />
        </li>
        <li className='text-[30px]'>
        <IoMailOpenOutline className='text-gray-400 cursor-pointer hover:scale-125 duration-300' />
        </li>
       </ul>
       <p className='text-[19px] text-slate-300 mt-7 mb-5'>I also create content to inspire and help others get started with coding, and share my experiences as a developer and entrepreneur. With more than 20,000 followers on instagram, I have a small but growing community of developers. Check it out here - <span className='cursor-pointer flex items-center text-blue-600 mt-[-28px] ml-[56px]'><FaInstagram className='text-blue-600 mr-1' /> dhravya.dev</span></p>
       </div>
     </div>
    </>
  )
}

export default HomePage
