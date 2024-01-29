// import React from 'react'
import { Link } from 'react-router-dom';

function MedicalServCard({ heading, bgcolor, textcolor }) {
  return (
    <div>
        <h1 className='md:text-3xl text-xl font-bold mb-5'>{heading}</h1>
        <p className='mb-5 md:text-sm text-xs'>World-class care for everyone. Our health system offer unmatched, expert health care. From the lab to the clinic.</p>
        <div className='flex items-center justify-between'>
        <Link to='/' className='px-3 py-2 border-2 border-black rounded-full'>
        <i className="fa-solid fa-arrow-right"></i>
        </Link>
        <h1 className={`px-3 py-1 rounded-md ${bgcolor} ${textcolor}`}>1</h1>
        </div>
    </div>
  )
}

export default MedicalServCard