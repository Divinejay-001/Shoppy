import React from 'react'
import img1 from '../../assets/shoes/shoe1.jpeg'
import img2 from '../../assets/shoes/shoe2.jpeg'
import img3 from '../../assets/shoes/shoe3.jpeg'
import img4 from '../../assets/shoes/shoe4.jpeg'
import img5 from '../../assets/shoes/shoe5.jpeg'
import img6 from '../../assets/shoes/shoe6.jpeg'
import img7 from '../../assets/shoes/shoe7.jpeg'
import img8 from '../../assets/shoes/shoe8.jpeg'
import img9 from '../../assets/shoes/shoe9.jpeg'
import img10 from '../../assets/shoes/shoe10.jpeg'
import img11 from '../../assets/shoes/shoe11.jpeg'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'


const ProductsData =[
    {
id:1,
img:img1,
rating:5,
text:'Shoe',
aosDelay:"0"
},
    {
id:2,
img:img2,
rating:4.5,
text:'Shoe',
aosDelay:"200"
},
    {
id:3,
img:img3,
rating:5,
text:'Shoe',
aosDelay:"400"
},
    {
id:4,
img:img4,
rating:4.4,
text:'Shoe',
aosDelay:"600"
},
    {
id:5,
img:img5,
rating:4.5,
text:'Shoe',
aosDelay:"800"
},
    {
id:6,
img:img6,
rating:4.5,
text:'Shoe',
aosDelay:"800"
},
    {
id:7,
img:img7,
text:'Shoe',
rating:4.5,
aosDelay:"800"
},
    {
id:8,
img:img8,
text:'Shoe',
rating:4.5,
aosDelay:"800"
},
    {
id:9,
img:img9,
text:'Shoe',
rating:4.5,
aosDelay:"800"
},
    {
id:10,
img:img10,
text:'Shoe',
rating:4.5,
aosDelay:"800"
},
    {
id:11,
img:img11,
text:'Shoe',
rating:4.5,
aosDelay:"800"
},
]
const Shoes = ({handleOrderPopup}) => {
    var  settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        cssEase: 'ease-in-out',
        autoplaySpeed: 2000,
        pauseOnHover:true,
        cssEase: 'linear',
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide:2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ]
    }

  return (
    <div className='   sm:mt-0 lg:pt-7 sm:mb-0 duration-200  lg:h-[500px] '>
    <div className='container mb-0 md:pb-20 '>
        {/* Header sec  */}
<div className='text-center mb-10 max-w-[600px] mx-auto grid gap-2'>
<p data-aos='fadeup' className='text-sm text-primary '>Top Selling Products for you </p>
<h1 data-aos='fadeup' className='text-3xl font-bold'>Foot Wears</h1>
<p data-aos='fadeup' className='text-xs text-gray-500 dark:text-gray-200'>
Discover the perfect pair of shoes that blend style, comfort, 
and durability. Whether you're looking for casual sneakers,
 professional dress shoes, or high-performance athletic footwear, 
 our collection has something for everyone. Crafted with premium 
 materials and innovative designs, these shoes provide the support
  you need for every step of your journey.
  From sleek designs that elevate your wardrobe to versatile options that suit any occasion, our shoes are built to keep up with your lifestyle. 
  Find your ideal fit and experience the difference in every stride!
</p>

</div>
<div  
 >
<Slider {...settings}>
    {
     ProductsData.map((data)=>(
      <div className='my-6  group' data-aos='zoom-in'>
        <div
        key={data.id} className='flex flex-col  shadow-xl
      py-8 px-6 mx-4 rounded-xl  dark:bg-gray-800
      bg-primary/15 relative   dark:hover:bg-tertiary/50 hover:bg-tertiary/40'>
<div className='mb-0 pb-10 '>
<img src={data.img} alt="" className='w-72 h-52 rounded-md pb-9
 object-cover '/>
</div>
<div className='flex flex-col items-center gap-2'>
    <div className='space-y-1 '>
         <h1 className=' text-gray-600 dark:text-gray-200
   group-hover:text-white '>{data.text}</h1>
    <div className='flex justify-center items-center'>
        <FaStar className='text-yellow-400' />
        <h1 className='text-xl font-bold text-black/80 group-hover:text-white  dark:text-white
        dark:text-light'>{data.rating}</h1>
       
    </div>
 
    </div>
    <button onClick={handleOrderPopup}
        className='bg-gradient-to-r  group-hover:bg-black  from-primary
        to-secondary duration-200  hover:scale-105
        text-white py-2 px-4 rounded-full group-hover:white
        '>Order Now </button>
</div>

        </div>
        </div>
     ))  
    }
</Slider>
</div>

</div>
</div> 
 )
}

export default Shoes