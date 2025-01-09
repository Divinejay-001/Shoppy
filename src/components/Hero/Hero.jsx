import React from 'react'
import image1 from '../../assets/hero/women.png'
import image2 from '../../assets/hero/shopping.png'
import image3 from '../../assets/hero/sale.png'
import image4 from '../../assets/hero/Premium.png'
import Slider from 'react-slick'
import { motion } from 'framer-motion'


export const FadeUp = (delay)=> {
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay: delay
            },
        },
    };
    
    };
const ImageList = [
    {
        id: 1,
        image: image1,
        title: 'Discover the beauty of women',
        description: 'Celebrate the elegance and grace of women with our exclusive clothing collection designed to empower and inspire.'
    },
    {
        id: 2,
        image: image2,
        title: '30% off on all products sale',
        description: 'Don’t miss out on our incredible store-wide sale! Enjoy 30% off and refresh your wardrobe with style and savings.'
    },
    {
        id: 3,
        image: image3,
        title: '70% off on all male products sale',
        description: 'Upgrade your style for less! Enjoy an unbelievable 70% discount on our entire range of men’s products.'
    },
    {
        id: 4,
        image: image4,
        title: '70% off on all female products sale',
        description: 'Upgrade your style for less! Enjoy an unbelievable 70% discount on our entire range of women’s products.'
    },
];

const Hero = ({ handleOrderPopup}) => {
    var  settings = {
        dots:false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        cssEase: 'ease-in-out',
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus:true
    }
  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pat  */}
        <div className='h-[700px] w-[700px] bg-primary/40
       absolute -top-1/2 right-0  rounded-3xl rotate-45 
       -z-9'>
           
        </div>
        {/* Hero section  */}
        <div className='container pb-8 sm:pb-0 '>
            <Slider {...settings}>
                {
                    ImageList.map((data)=>(
<div>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
{/* text content  */}
<div className='flex flex-col justify-center gap-4
pt-12 sm:pt-0  text-center sm:text-left
order-2 sm:order-1 relative z-10'>
    <h1
     data-aos='zoom-out'
     data-aos-duration='500'
        data-aos-once='true'
    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
        {data.title}    </h1>
    <p
    data-aos='fade-up'
    data-aos-duration='500'
    data-aos-delay='100'
    className='text-sm'>{data.description}</p>
     <motion.div
     variants={FadeUp(0.5)}
     initial='hidden'
     whileInView='visible'
     viewport={{ once: true }}
      
     >
        <button onClick={handleOrderPopup}
        className='bg-gradient-to-r from-primary
        to-secondary duration-200 hover:scale-105
        text-white py-2 px-4 rounded-full 
        '>Order Now </button>
     </motion.div>
</div>
{/* img content  */}
<div className='order-1 sm:order-2 relative z-10'>
    <div 
     data-aos='zoom-in'
     data-aos-once='true'>
       
        <img src={data.image} alt="" className='w-[300px]
        h-[300px] sm:h-[450px] sm:w-[450px] lg:scale-120 sm:scale-125
        object-contain mx-auto' />
    </div>
</div>
    </div>
</div>
                    ))
                }

            </Slider>

        </div>
    </div>
  )
}

export default Hero