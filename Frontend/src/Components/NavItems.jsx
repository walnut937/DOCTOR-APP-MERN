/* eslint-disable react/prop-types */
// import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItems({name, link}) {
  return (  
    <div>
        <NavLink to={link}>{name}</NavLink>
    </div>
  )
}

export default NavItems