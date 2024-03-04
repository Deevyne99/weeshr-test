// import React from 'react'
import rocket from '../assets/rocket.png'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className='mx-4 md:mx-12 lg:mx-24 xl:mx-32 my-8'>
      <div className='justify-center flex flex-col items-center'>
        <div className='flex gap-4 p-2  border rounded-[8px]'>
          <div className='h-[300px] w-[50%] bg-[#EF5623] p-4'>
            <img className='mt-20' src={rocket} alt='' />
            <div className='text-4xl text-white'>
              <h1 className='font-sfPro font-bold mt-8'>
                Optimizing CSS for faster page loads
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[50%]'>
            <div className='flex flex-col gap-4 relative'>
              <div className='flex items-center gap-4'>
                <h3 className='text-[#4B4B4B] font-sfPro'>Front-end</h3>
                <div className='h-1 w-1 rounded-[50%] bg-[#000]'></div>
                <p className='text-[#6E6E6E] text-[14px]'>1 Hour Ago</p>
              </div>
              <h1 className='text-[#2C2C2C] font-sfPro font-bold'>
                Optimizing CSS for faster page loads
              </h1>
              <p className='font-sfPro text-[#6E6E6E] leading-[21px] text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita atque dolorum inventore ex eveniet suscipit aperiam
                perferendis, placeat quia pariatur praesentium facilis
                cupiditate repudiandae quam itaque rerum eligendi porro alias!
              </p>
              <p className='mt-8 font-sfPro text-[#6E6E6E] leading-[21px] text-[15px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                delectus maxime provident ipsam adipisci, quisquam sint. Qui
                amet non eaque.
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
        </div>
      </div>
    </section>
  )
}

export default Hero
