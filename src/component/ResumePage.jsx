import React from 'react'

const ResumePage = () => {
  return (
    <>
     <div className="container mx-auto">
       <div className="ml-[9rem] mt-[4rem]">
       <h1 className='text-[50px] text-gray-300 font-bold'>My Resume</h1>
       <h3 className='text-[30px] text-gray-300 font-bold mt-3 mb-6'>Education</h3>
        <div className="grid grid-cols-12">
        <div className='col-span-8 flex items-start'>
          <img src="/images/smile.svg" alt="" className='w-[50px] h-[50px] mr-5' />
        <div>
        <p className='text-[17px] text-gray-500'>August 2023 · Present</p>
        <h4 className='text-[19px] text-gray-300 font-bold py-1'>BS in Computer science</h4>
        <h5 className='text-[16px] text-gray-300 font-normal'>Arizona State University</h5>
        <p className='text-[16px] text-gray-500 mt-2 max-w-[700px]'>Throughout my years at ASU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers. ASU focuses on entrepreneurship and leadership which is something that I really like. I got to be a part of Edson Entrepreneurship + Innovation fellowship, Venture devils, Grand Challenges Scholars Program and a lot of clubs.</p>
        </div>
       </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default ResumePage
