import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id: 1,
        name: "Sebastian",
        text: "This service exceeded my expectations! The attention to detail and customer support were phenomenal. Highly recommend!",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Mandy Rose",
        text: "I am absolutely thrilled with my experience. The team was professional, efficient, and went above and beyond. Thank you!",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Christian",
        text: "Fantastic quality and exceptional service! I've already recommended it to my friends and family.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Lily",
        text: "A seamless experience from start to finish. The results were exactly what I was looking for. Can't wait to use their services again!",
        img: "https://picsum.photos/104/104",
    },
];

const Testimonial = () => {
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
    <div className='py-14 mb-0  '>
        <div className='container'>
 {/* header sec  */}
 <div className='text-center mt-8 max-w-[600px] lg:h-[200px] mx-auto'>
    <p data-aos='fadeup' className='text-sm text-primary '>What Our Customers Say </p>
    <h1 data-aos='fadeup' className='text-3xl font-bold'>Testimonials</h1>
    <p data-aos='fadeup' className='text-xs text-gray-600 '>
    Hear directly from our satisfied customers about their experiences with our service. 
    From exceptional quality to unparalleled support, these stories showcase our commitment 
    to excellence and the trust we've earned over time. Discover why our customers keep coming 
    back and recommend us to oters.
</p>

</div>

{/* Testimonial card  */}
<div 
data-aos='zoom-in'>
<Slider {...settings}>
    {
     TestimonialData.map((data)=>(
      <div className='my-6'>
        <div
        key={data.id} className='flex flex-col gap-4 shadow-xl
      py-8 px-6 mx-4 rounded-xl dark:bg-gray-800
      bg-primary/10 relative '>
<div className='mb-4'>
<img src={data.img} alt="" className='rounded-full
w-20 h-20'/>
</div>
<div className='flex flex-col items-center gap-4'>
    <div className='space-y-3 '>
         <p className='text-xs text-gray-500
    '>{data.text}</p>
    <h1 className='text-xl font-bold text-black/80
    dark:text-light'>{data.name}</h1>
    </div>
   
</div>
<p className='text-black/30 text-9xl font-serif
absolute top-0 right-0'>,,</p>
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

export default Testimonial