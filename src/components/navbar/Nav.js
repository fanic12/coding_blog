import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../../assets/menu1.svg'

const Navbar = ({ openNav }) => {
  return (
    <div className='navbar'>
      <div>
        <img
          src={MenuIcon}
          onMouseMove={openNav}
          className='CursorPointer'
          alt={MenuIcon}
        />
        <Link className='title' to='/'>
          {' '}
          Fanic12 Coding Blog
          <div className='bg'></div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
