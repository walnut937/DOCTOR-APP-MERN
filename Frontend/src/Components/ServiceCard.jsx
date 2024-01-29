/* eslint-disable react/prop-types */
// import React from 'react'


import { Link } from 'react-router-dom'

function ServiceCard({ img, heading, link }) {
  return (
    <div className="flex flex-col items-center gap-4">
        <img src={img} alt="" />
        <h1 className='text-2xl font-bold'>{heading}</h1>
        <h1 className='mb-5'>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</h1>
        <Link to={link} className='px-3 py-2 border-2 border-black rounded-full'>
        <i className="fa-solid fa-arrow-right"></i>
        </Link>
    </div>
  )
}

export default ServiceCard