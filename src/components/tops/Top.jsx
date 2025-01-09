import React from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '../Hero/Hero'
import img1 from '../../assets/shirt/shirt.png'
import img2 from '../../assets/shirt/shirt2.png'
import img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: 'Casual Wear',
        description: 'Perfect for everyday comfort, this casual wear combines relaxed style with functionality, making it ideal for both lounging and informal outings.',
    },
    {
        id: 2,
        img: img2,
        title: 'Printed Shirt',
        description: 'This printed shirt features eye-catching patterns and vibrant colors, adding a touch of personality and flair to your wardrobe.',
    },
    {
        id: 3,
        img: img3,
        title: 'Leisure Shirt',
        description: 'Designed for ease and versatility, the leisure shirt is your go-to for a laid-back yet polished look, perfect for weekend getaways or casual dinners.',
    },
];

const Top = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container pt-16   '>
{/* header sec  */}
<div 
className='text-left mb-24  '>
<motion.p
variants={FadeUp(0.5)}
initial='hidden'
whileInView='visible'
className='text-sm text-primary'>
    Top Rated Products For You
</motion.p>
<motion.h1
variants={FadeUp(0.7)}
initial='hidden'
whileInView='visible'
className='text-3xl font-bold'>
 Best   Products
</motion.h1>
<motion.p
variants={FadeUp(0.9)}
initial='hidden'
whileInView='visible'
className='text-sm text-gray-400'>
    Discover our top-rated products, thoughtfully designed to offer the perfect blend of style, comfort, and functionality, making them ideal for every occasion.
    </motion.p>
</div>
{/* Body sec  */}
<div className='grid grid-cols-1 sm:grid-cols-2 
md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
    {
        ProductsData.map((data)=>(
            <div
            data-aos='zoom-in'
            className='rounded-2xl bg-white 
            dark:bg-gray-800 hover:bg-black/70 
            dark:hover:bg-primary hover:text-white
            relative shadow-2xl duration-300 group max-w-[300px] '> 
                {/* img sec  */}
<div className='
h-[100px]' >
   <img src={data.img} alt=""
   className='max-w-[140px] block mx-auto
    transform -translate-y-20 group-hover:scale-105 duration-300 
    drop-shadow-md' />
</div>   
{/* details sec  */}
<div className='p-4 text-center'>
{/* star rated  */}
        <div className='w-full flex items-center justify-center gap-1'>
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
        </div>
        <h1 className='text-xl font-bold'>
           {data.title} 
        </h1>
        <p className='text-gray-500 group-hover:text-white
        duration-300 text-sm line-clamp-2'>
            {data.description}
        </p>
        <button 
        className='bg-primary hover:scale-105 duration-300
        text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' 
      onClick={handleOrderPopup}  >
            Order Now
        </button>
</div>
            </div>
        ))
    }
</div>
        </div>
    </div>
  )
}

export default Top