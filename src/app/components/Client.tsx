import React from 'react'
import Image from 'next/image'

function Choose() {
    return (
        <div className='sm:px-[32px] xl:[220px] px-[20px] flex flex-col gap-20 sm:mt-14'  >
            <div className='text-center'>
                <h1 className='lg:text-[72px] sm:text-[7vw] text-[7max] font-[700]'>What Our
                    <span className='relative inline-block z-20'> Client Says</span>
                </h1>
           
       

            <Image
                        src="/Content.png"
                        alt="Price list"
                        className="w-full object-cover"
                        layout="responsive" 
                        width={1920} 
                        height={1080} 
                        priority 
 >
    </Image>


    </div >        
    </div >
  )
}

export default Choose
