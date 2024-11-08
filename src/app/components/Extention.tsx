import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

function Extention() {
  return (
    <div>
      <div className='relative bg-blue-950 text-white'>
      <div className='h-full flex flex-col gap-10 z-30 sm:px[32px] xl:[220px] px-[20px] sm:py-20 py-14'>
        <div className=' sm:flex sm:items-center'>
          <div className='sm:text-start text-center sm:justify-start sm:py-20 py-`14'>
            <h1 className='sm:text-[6vw] text-[40px] font-[700]  sm:leading-[85px] leading-tight lg:mt-4 '>
            Use as Extension
            
            </h1>
            <p className='text-[18px] font-[400] text-white lg:w-[80%] sm:mt-10 mt-6'>
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

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
              <Image src="/save.jpg" alt="girl" layout="responsive" height={200} width={670} ></Image>
            </div>
          </div>
        </div>
    </div>

</div>
    </div>
  )
}

export default Extention
