import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   height:'100%',
   width:'100%',
}
const Suscribe = () => {
  return (
    <div data-aos="zoom-in"
    className='mb-0 pb-10 bg-gray-100
      text-white
    'style={BannerImg}>
        <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='
            text-2xl !text-center sm-text-left sm:text-4xl
            font-semibold'>Get Notified About New Products</h1>
            <input data-aos='fade-up' type="email" placeholder='Enter Your Email'
            className='w-full p-3 text-black' />
        </div>
        </div>
        </div>
  )
}

export default Suscribe