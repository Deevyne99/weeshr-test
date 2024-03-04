// import React from 'react'
import colors from '../assets/colors.png'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Card = () => {
  return (
    <div className='flex-col p-2 max-w-[350px] border rounded-[8px] hover:scale-105 cursor-pointer'>
      <div className='flex justify-center items-center'>
        <img src={colors} alt='' />
      </div>
      <div className='flex items-center gap-2 mt-2'>
        <h3 className='text-[#4B4B4B] font-sfPro'>Front-end</h3>
        <div className='h-1 w-1 rounded-[50%] bg-[#000]'></div>
        <p className='text-[#6E6E6E] text-[14px]'>1 month Ago</p>
      </div>
      <div>
        <h1 className='text-[#2C2C2C] font-sfPro font-bold'>Css Grid</h1>
        <p className='font-sfPro text-[#6E6E6E] leading-[21px] text-[15px]'>
          The CSS Grid Layout Module offers a grid-based layout system, with
          rows and columns, making it easier to design web pages without having
          to use floats and positioning.
        </p>
        <div className='flex justify-between items-center'>
          <p className='mt-4 font-sfPro text-[#6E6E6E] capitalize text-[14px]'>
            3 min Read
          </p>
          <button className='capitalize text-[#1473E6] flex items-center gap-2 font-sfPro font-bold'>
            Read more <HiArrowNarrowRight className='font-bold text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
