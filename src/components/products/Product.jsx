import React from 'react'
import img1 from '../../assets/women/women.png'
import img2 from '../../assets/women/women2.jpg'
import img3 from '../../assets/women/women3.jpg'
import img4 from '../../assets/women/women4.jpg'
import img5 from '../../assets/women/women5.jpeg'
import img6 from '../../assets/women/women6.jpeg'
import img7 from '../../assets/women/women7.jpeg'
import img8 from '../../assets/women/women8.jpeg'
import { FaStar } from 'react-icons/fa6'
const ProductsData =[
    {
id:1,
img:img5,
title:"Women Ethnic",
rating:5,
color:'white',
aosDelay:"0"
},
    {
id:2,
img:img7,
title:"Women western",
rating:4.5,
color: 'red',
aosDelay:"200"
},
    {
id:3,
img:img3,
title:"Googles",
rating:5,
color:'brown',
aosDelay:"400"
},
    {
id:4,
img:img8,
title:"Printed T-Shirt",
rating:4.4,
color:"Yellow",
aosDelay:"600"
},
    {
id:5,
img:img6,
title:"Fashin T-Shirt",
rating:4.5,
color:'Pink',
aosDelay:"800"
},
]
const Product = () => {
  return (
    <div className='   sm:mt-0 lg:pt-7 sm:mb-0 duration-200  lg:h-[500px] '>
        <div className='container mb-0 pb-10 '>
            {/* Header sec  */}
<div className='text-center mb-10 max-w-[600px] mx-auto'>
    <p data-aos='fadeup' className='text-sm text-primary '>Top Selling Products for you </p>
    <h1 data-aos='fadeup' className='text-3xl font-bold'>Products</h1>
    <p data-aos='fadeup' className='text-xs text-gray-400'>
    Explore our top-selling products, carefully curated to meet your needs and exceed expectations. 
    From innovative designs to exceptional quality, these items are favorites among our customers. 
    Find the perfect product to enhance your lifestyle and enjoy unbeatable value.
</p>

</div>
            {/* Body section  */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3
               md:grid-cols-4 lg:grid-cols-5 place-items-center
               gap-5 '>
        {/* card sec  */}
       { ProductsData.map((data)=>(
        <div
        data-aos='fade-up'
        data-aos-delay={data.aosDelay}
        key={data.id}
        className='space-y-3 '>
<img src={data.img} alt="" className='h-[220px] w-[150px]
object-cover rounded-md hover:scale-105 duration-500 transition-all'/>
<div>
    <h3 className='font-semibold'>{data.title}</h3>
    <p className='text-sm text-gray-600'>{data.color}</p>
    <div className='flex items-center gap-1'>
        <FaStar className='text-yellow-400' />
        <span>{data.rating}</span>
    </div>
</div>
        </div>
        ))
    }
                </div>
                {/* view btn  */}
                <div className='flex justify-center'>
                 <button className='text-center mt-10
                 cursor-pointer bg-primary text-white
                 py-1 px-5 rounded-md'>
                    View All 
                    </button>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product