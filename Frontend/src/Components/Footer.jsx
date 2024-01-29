// import React from 'react'
import logo from '../assets/images/Logo.svg'
import FooterComponents from './FooterComponents'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='section py-16'>
        <div className='flex flex-col md:flex-row gap-10'>
            {/* icons & socials */}
            <div>
                <img className='w-36 mb-3' src={logo} alt="logo" />
                <p className='mb-3 text-sm'>Copyright &copy; 2024 developed by MedicarePlus+ by all rights reserved</p>
                <div className='flex items-center gap-2'>
                <FooterComponents logo={<i className={`fa-brands fa-youtube`}></i>} />
                <FooterComponents logo={<i className={`fa-brands fa-x-twitter`}></i>} />
                <FooterComponents logo={<i className={`fa-brands fa-instagram`}></i>} />
                <FooterComponents logo={<i className={`fa-brands fa-linkedin`}></i>} />
                </div>
            </div>

            {/* links */}
            <div className='flex flex-col items-start gap-4'>
                <h1 className='text-2xl font-bold'>Quick Links</h1>
                <ul className='flex flex-col gap-2'>
                    <li className='text-gray-400'><Link to='/'>Home</Link></li>
                    <li className='text-gray-400'><Link to='/'>About Us</Link></li>
                    <li className='text-gray-400'><Link to='/'>Services</Link></li>
                    <li className='text-gray-400'><Link to='/'>Blog</Link></li>
                </ul>
            </div>

            {/* I want to */}
            <div className='flex flex-col items-start gap-4'>
                <h1 className='text-2xl font-bold'>I want to:</h1>
                <ul className='flex flex-col gap-2'>
                    <li className='text-gray-400'><Link to='/'>Find a Doctor</Link></li>
                    <li className='text-gray-400'><Link to='/'>Request an appointment</Link></li>
                    <li className='text-gray-400'><Link to='/'>Find a Location</Link></li>
                    <li className='text-gray-400'><Link to='/'>Get an Opinion</Link></li>
                </ul>
            </div>

            {/* support */}
            <div className='flex flex-col items-start gap-4'>
                <h1 className='text-2xl font-bold'>Support</h1>
                <ul className='flex flex-col gap-2'>
                    <li className='text-gray-400'><Link to='/'>Donate</Link></li>
                    <li className='text-gray-400'><Link to='/'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer