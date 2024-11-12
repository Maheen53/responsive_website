import React from 'react'
import Image from 'next/image'

function Sponser() {
  return (
    <div className='flex flex-col sm:gap-28 gap-12 sm:px-[32px] xl:px-[220px] px-[20px] mb-11'>
      <div className='flex justify-center relative'>
        <h1 className='text-[10vw] sm:text-[50px] lg:text-[60px] font-bold sm:leading-[64px] z-10'>
          Our <span className="relative inline-block z-10">sponsors</span>
        </h1>
      </div>

      <div className="flex sm:flex-row items-center sm:gap-0 gap-[18vw] flex-col sm:justify-between">
        <div className="sm:w-[5vmax] w-[14vw] h-[54px] flex items-center justify-center">
          <Image src="/Group.png" alt="apple" width={100} height={100} className="object-contain" />
        </div>
        <div className="sm:w-[19vmax] w-[44vw] h-10 flex items-center justify-center">
          <Image src="/microsoft 1.png" alt="microsoft" width={500} height={100} className="object-contain" />
        </div>
        <div className="sm:w-[19vmax] w-[44vw] h-10 flex items-center justify-center">
          <Image src="/Slack.png" alt="slack" width={500} height={100} className="object-contain" />
        </div>
        <div className="sm:w-[19vmax] w-[60vw] h-10 flex items-center justify-center">
          <Image src="/Google.png" alt="google" width={500} height={100} className="object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Sponser
