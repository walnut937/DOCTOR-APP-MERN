import React from 'react'
import { Link } from 'react-router-dom'

function FooterComponents({ logo }) {
  return (
    <div className='px-3 py-2 rounded-full border-[2px] border-black w-auto'>
      <Link to='/'>
        {logo}
      </Link>
    </div>
  )
}

export default FooterComponents