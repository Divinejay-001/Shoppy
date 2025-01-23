import React from 'react'
import { Link } from 'react-router-dom'
const Responsivemenu = ({ open }) => {
  return (
    <section>
        { open &&(
        <div data-aos='fade-left' className='absolute top-20 left-0 w-full h-screen z-20'>
         <div className='text-xl  font-semibold uppercase  bg-primary/95 text-white py-24 relative bottom-7 m-0 rounded-sm'>
              <ul className=' flex flex-col items-center gap-10'>
          <Link to='/' className='inline-block px-4
                            hover:text-primary duration-200'>Home</Link>
               <Link to='/' className='inline-block px-4
                            hover:text-primary duration-200'>Top Rated</Link>
               <Link to='/' className='inline-block px-4
                            hover:text-primary duration-200'>Mens Wear</Link>
               <Link to='/signup' className='inline-block px-4
                            hover:text-primary duration-200'>Sign Up</Link>
               <Link to='/signin' className='inline-block px-4
                            hover:text-primary duration-200'>Sign In</Link>           </ul>
              </div>
        </div>
        )
}
    </section>
  )
}

export default Responsivemenu