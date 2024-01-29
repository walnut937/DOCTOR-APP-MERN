import React from 'react'
import patient from '../assets/images/patient-avatar.png'
import star from '../assets/images/Star.png'

function SwiperCard() {
  return (
    <div className='p-8 rounded-md shadow-xl select-none'>
        <div className='flex items-center gap-3 mb-3'>
            <img className='rounded-full' src={patient} alt="" />
            <div className='flex flex-col'>
                <h1 className='text-xl '>dr. Philip Duo</h1>
                <div className='flex gap-[3px] items-center'>
                    <img className='w-4' src={star} alt="" />
                    <img className='w-4' src={star} alt="" />
                    <img className='w-4' src={star} alt="" />
                    <img className='w-4' src={star} alt="" />
                    <img className='w-4' src={star} alt="" />
                </div>
            </div>
        </div>
        <div>
            <p className='text-xs '>I have taken medicine services from them. They treat so well and they are providing the best medical services.</p>
        </div>
    </div>
  )
}

export default SwiperCard