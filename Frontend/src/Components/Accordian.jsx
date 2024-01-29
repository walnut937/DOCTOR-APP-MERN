import { useState } from 'react'

function Accordian({ heading, isOpen, onToggle }) {
  return (
    <div className='border-[1px] p-3 rounded-md border-black'>
      <div className={`flex items-center justify-between transition-max-height duration-200 ease-out ${isOpen ? 'mb-3' : ''}`}>
        <h1 className='font-bold'>{heading}</h1>
        <button onClick={onToggle} className='px-3 py-2 rounded-md border-[1px] border-black'>
          <i className={`${isOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`}></i>
        </button>
      </div>
      <div className={`content ${isOpen ? '' : 'hidden'} transition-all duration-200`}>
        <p className='text-sm'>One Medical was founded on a better model of care one designed around patient&apos;s needs that provide a higher level of quality and services affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.</p>
      </div>
    </div>
  );
}

export default Accordian