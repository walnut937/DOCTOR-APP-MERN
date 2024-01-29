// import React from 'react'
import { useState } from 'react'
import logo from '../assets/images/Logo.svg'
import NavItems from './NavItems'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [open, setOpen] = useState(false)
    function handleNavChange(){
        setOpen(!open)
    }
  return (
    <nav className='p-3 bg-inherit backdrop-filter sticky backdrop-blur-md top-0 z-50'>
        <div className='md:w-[1100px] mx-auto flex items-center justify-between'>
            <NavLink to='/'><img className='md:w-40 w-32' src={logo} alt="" /></NavLink>

            {/* small screen */}
            <ul className={`md:hidden flex absolute z-50 gap-5 w-[200px] flex-col rounded-b-lg p-3 text-white transition-all duration-500 h-[250px] ${open ? 'bg-blue-600 -top-0' : 'bg-blue-600 -top-[500px]'}`}>
                <NavItems name="Home" link="/"  />
                <NavItems name="Services" link="/service"/>
                <NavItems name="Find a Doctor" link="/doctor"  />
                <NavItems name="Contact" link="/contact"  />
                <NavLink to='/login'><button className='bg-white text-blue-600 px-3 py-2 font-bold rounded-2xl'>Login</button></NavLink>
            </ul>

            {/* big screen */}
            <ul className={`md:flex md:flex-row hidden items-center gap-5`}>
                <NavItems name="Home" link="/" />
                <NavItems name="Services" link="/service" />
                <NavItems name="Find a Doctor" link="/findDoc" />
                <NavItems name="Contact" link="/contact" />
            </ul>

            <NavLink to='/login'><button className='bg-blue-600 hidden md:block px-4 py-2 text-white rounded-2xl'>Login</button></NavLink>
            <button onClick={handleNavChange} className='md:hidden'>
            <i className="fa-solid fa-bars text-2xl"></i>
            </button>       
        </div>
    </nav>
  )
}

export default Navbar