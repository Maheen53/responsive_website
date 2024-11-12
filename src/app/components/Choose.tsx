import React from 'react'
import Image from 'next/image'

function Choose() {
    return (
        <div className='sm:px-[32px] xl:[220px] px-[20px] flex flex-col gap-20 sm:mt-14'  >
            <div className='text-center'>
                <h1 className='lg:text-[72px] sm:text-[7vw] text-[7max] font-[700]'>Choose
                    <span className='relative inline-block z-20'> Your Plan</span>
                </h1>
           
            <p className="md:w-[70%] lg:text-[18px] text-[18px] sm:mt-0 mt-2 mx-auto">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
       

            <Image
  src="/price-list.png"
  alt="Price list"
  className="w-full object-cover"
  layout="responsive"
  width={1920}
  height={1080}
  priority
/>


    </div >        
    </div >
  )
}

export default Choose
