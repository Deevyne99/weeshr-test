import { Outlet } from 'react-router-dom'
import dribble from '../assets/dribbble.png'
import figma from '../assets/figma.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
// import React from 'react'

const Navbar = () => {
  return (
    <div className='py-6 '>
      <nav className='flex justify-between mx-4 md:mx-12 lg:mx-24 xl:mx-32 '>
        <div>
          <h1>logo</h1>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='' src={twitter} alt='' />
          <img src={dribble} alt='' />
          <img src={figma} alt='' />
          <img src={github} alt='' />
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
