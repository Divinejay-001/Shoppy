import React from 'react'
import BannerImg from "../../assets/women/women2.jpg" 
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center
    py-12 sm:py-0 '>
        <div className='container '>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center   '>
    {/* image sec  */}
    <div data-aos='zoom-in'>
        <img src='https://i.pinimg.com/736x/aa/37/92/aa37923178b5684b161c34b19c0e7314.jpg' alt=""
        className='max-w-[400px] h-[400px] w-full
        mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0.1)]
        object-cover lg:object-fill' />
    </div>
    {/* text details sec  */}
    <div className='flex flex-col justify-center  
    gap-6 sm:pt-0'>
      <h1 data-aos='fade-up' className='text-3xl sm:text-4xl dark:text-gray-400
    font-bold  '>Winter Sale Upto 50% off</h1>
   <p data-aos='fade-up' className='text-sm text-gray-300 tracking-wide leading-5'>
  Don’t miss out on the season’s biggest savings! Explore our exclusive Winter Sale and enjoy up to 50% off on a wide range of products. Whether you’re upgrading your wardrobe, refreshing your home, or finding the perfect gift, there’s something for everyone. Shop now and make this winter unforgettable!
</p>

    <div className='flex flex-col gap-4 dark:text-gray-300'>
      <div data-aos='fade-up' className='flex items-center gap-4 '> 
        <GrSecure className='text-4xl h-12 w-12 *:shadow-sm
        p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
        <p>Quality Products</p>
      </div>
      <div data-aos='fade-up' className='flex items-center
      gap-4'>
        <IoFastFood className='text-4xl h-12 w-12 shadow-sm
        p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
        <p>Fast Delivery</p>
      </div>
      <div data-aos='fade-up' className='flex items-center
      gap-4'>
        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm
        p-4 rounded-full bg-green-100 dark:bg-green-400'/>
        <p>Easy Payment Method</p>
      </div>
      <div data-aos='fade-up' className='flex items-center
      gap-4'>
        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm
        p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
        <p>Get Offers</p>
      </div>
    </div>
    </div>
</div>
        </div>
    </div>
  )
}

export default Banner