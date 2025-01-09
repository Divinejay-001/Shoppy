import React from 'react'
import footerLogo from '../../assets/logo.png';
import Banner from '../../assets/website/footer-pattern.jpg'
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
   height:'100%',
   width:'100%',
}

const FooterLinks=[
    {
        title: 'Home',
        link: '/#'
         },
    {
        title: 'About',
        link: '/#about'
         },
    {
        title: 'Contact',
        link: '/#contact'
         },
    {
        title: 'Blog',
        link: '/#blog'
         },
]
const Footer = () => {
  return (
    <div style={BannerImg}
     className='text-white mb-0'>
        <div className='container'>
            <div 
            data-aos='zoom-in'
            className='grid md:grid-cols-3 pb-44 pt-5'>
                {/* Company details  */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3
                    flex items-center gap-3 '>
                        <img src={footerLogo} alt="" 
                        className='max-w-[50px]'/>
Shoppy
                    </h1>
                    <p>Thank you for shopping with us! At [Your Store Name], we're committed to providing you with top-quality products and an exceptional shopping experience. </p>
                          </div>
                {/* Footer Links  */}
                <div className=' grid grid-cols-1 
                sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div >
<div className='py-8 px-4'>
    <h1 className='sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3
                    '>Important Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((link) => 
                                <li className='cursor-pointer
                                hover:text-primary hover:translate-x-1 duration-300
                                text-gray-200' key={link.title}>
                                 <span>{link.title}</span> 
                                </li>
                            )
                        }
                    </ul>
</div>
                    </div>
                    <div>
<div className='py-8 px-4'>
    <h1 className='sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3
                    '>Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((link) => 
                                <li className='cursor-pointer
                                hover:text-primary hover:translate-x-1 duration-300
                                text-gray-200' key={link.title}>
                                 <span>{link.title}</span> 
                                </li>
                            )
                        }
                    </ul>
</div>
                    </div>
                    {/* social links  */}
        <div>
            <div className="flex items-center gap-3 mt-6">
                <a href="#">
                   <FaInstagram className='text-3xl hover:scale-125 duration-300 hover:bg-[#EAC06C] hover:rounded-full hover:p-2'/> 
                </a>
                <a href="#">
                   <FaFacebook className='text-3xl hover:scale-125 duration-300 hover:bg-[#EAC06C] hover:rounded-full hover:p-2'/> 
                </a>
                <a href="#">
                   <FaLinkedin className='text-3xl hover:scale-125 duration-300 hover:bg-[#EAC06C] hover:rounded-full hover:p-2'/> 
                </a>

            </div>
            <div className='mt-6'>
<div className='flex items-center gap-3'>
<FaLocationArrow/>
<p>Uyo, AkwaIbom state Nigeria</p>
</div>
<div className='flex items-center gap-3'>
<FaMobileAlt/>
<p>+234 9127064183</p>
</div>
            </div>
           
        </div>
        <div             className='grid text-left  sm:text-center mt-8 border-t-2 pt-6'>
        
            <p >Built By Divinegift Johnson </p>
            <p className='text-white  '>&copy; 2024. All rights reserved. || My Coding Journey</p>
        </div>
    </div>
 
            </div>
            
       
            
        </div>
        
        
    </div>
    
  )
}

export default Footer