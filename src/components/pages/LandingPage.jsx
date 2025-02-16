import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { ArrowRight } from 'lucide-react'
import Transition from '../../Transiton'
const LandingPage = () => {
  return (
    <div className='overflow-hidden '>
        <div className="min-h-screen  bg-gray-50">
        
      {/* Hero Section */}
      <div className="relative">
      
        <div className="absolute inset-0 bg-black/50" />
        <div 
          className="h-[730px] sm:h-[600px] md:h-[1000px] lg:h-[700px] bg-cover bg-center dark:shadow-2xl"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        >
          <div className='flex space-x-1 items-center relative text-3xl left-6 top-3'>
            <img className="w-8 h-8 object-cover rounded-full" src={Logo} alt="Logo" />
         <h1 className=' text-white font-semibold'>Shophere</h1>
       </div>
          <div className="container mx-auto pb-16  px-4 h-full flex items-center relative">
            <div className="max-w-xl text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Elevate Your Style with Shophere Collection</h1>
<p className="text-xl mb-6 text-white">
  Explore our exclusive selection of premium fashion pieces, thoughtfully curated to redefine elegance and sophistication.  
</p>
<div className='flex flex-col sm:flex-row gap-2'>
  <button className="bg-white  text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
    <Link className='flex items-center justify-center ' to="/register">Explore Your Style
    </Link>
  </button>
  <button className="bg-white  text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
    <Link className='flex items-center justify-center ' to="/home">Continue For Free
    </Link>
  </button>
</div>

            </div>
          </div>
        </div>
      </div>

    

      
    
    </div> 
    </div>

  )
}

export default  Transition(LandingPage);