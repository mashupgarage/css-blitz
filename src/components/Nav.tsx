import React from 'react'
import logo from '../images/mg-logo.svg'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav className='p-8 absolute'>
      <Link to='/'>
        <img src={logo} className='w-16 hover:animate-spin'/>
      </Link>
    </nav>
  )
}

export default Nav
