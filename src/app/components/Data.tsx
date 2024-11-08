import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

function Data() {
  return (
    <div className='relative bg-white'>
      <div className='h-full flex flex-col gap-10 z-30 sm:px[32px] xl:[220px] px-[20px] sm:py-20 py-14'>
        <div className=' sm:flex sm:items-center'>
          <div className='sm:text-start text-center sm:justify-start sm:py-20 py-`14'>
            <h1 className='sm:text-[6vw] text-[40px] font-[700]  sm:leading-[85px] leading-tight lg:mt-4 '>
            100% your data
            
            </h1>
            <p className='text-[18px] font-[400] text-[#212529] lg:w-[80%] sm:mt-10 mt-6'>
            The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
            </p>
            <div className='flex sm:justify-start justify-center'>
              <button className='flex items-start sm:mt-12 mt-16 gap-2 bg-[#4f9cf9] text-[16px] text-white px-7 py-[14px] rounded-md'>
                Get Started
                <span className='font-[100] text-[12px]'>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>


          <div className='flex-1 flex justify-center sm:justify-end sm:mt-0 mt-11 sm:flex-1'>
            <div className='lg:w-[46vmax] sm:w-[42vmin] w-[80vw] overflow-hidden'>
              <Image src="/Element.png" alt="girl" layout="responsive" height={200} width={670} ></Image>
            </div>
          </div>
        </div>
        </div>
        </div>

  )
}

export default Data
