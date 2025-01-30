import React from 'react'
import SigninImg from '../../assets/signin.jpeg'
import Logo from '../../assets/logo.png'
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div  className='bg-gray-100   w-full h-screen text-black flex items-start'>
       <div className=' relative  w-10 sm:w-1/2 h-full flex flex-col  '>
       <div className='absolute  sm:right-10 right-0 container flex justify-between
         items-center  '>
             <div className=''>
             <Link to='/' className='font-bold text-black  
             text-2xl sm:text-3xl flex gap-2'>
                 <img src={Logo} alt="" className='w-10
                 ' />
                 Shophere
             </Link>
             </div> 
             </div> 
 
    <img src={SigninImg} alt=""  className='hidden sm:block h-full w-full object-cover
'/>
      </div>
      <div data-aos='zoom-in' className='sm:w-[1/2]   pr-12 sm:pr-0 mx-auto   sm:m-0 lg:m-14 flex flex-col  sm:p-10 '>
      <div className='flex  items-center gap-3    sm:pb-0  pt-28  lg:pt-1 '>
        <FaLock className='text-black font-bold text-2xl relative bottom-5 lg:bottom-8  sm:text-3xl'/>
        <div className=''>
          <h1 className='text-black font-bold
          text-xl  pb-12 lg:pb-16 sm:0 sm:text-3xl'>Sign in to Shophere</h1>
        </div>
      </div>
<div className='w-full flex flex-col gap-8 sm:gap-4'>
    <p className='text-lg mb-2 
    space-x-2'>Welcome Back! Please fill in your details.</p>
    <div className='grid gap-4'>
      <input required type="text" className='w-full px-4 py-4 sm:py-2  text-md border rounded-md shadow-xl
      focus:outline-none focus:border-black' placeholder='Username' />
      <input required type="email" className='w-full px-4 py-4 sm:py-2 text-md border rounded-md shadow-lg
      focus:outline-none focus:border-black' placeholder='Email Address' />
      <input required type="password" className='w-full px-4 py-4 sm:py-2 text-md border rounded-md shadow-lg
      focus:outline-none focus:border-black' placeholder='Password' />

    </div>
    <div className='pt-1 group'>
      <button type='submit' className='w-full
    hover:scale-105 duration-300 transition-all
     bg-primary group-hover:bg-tertiary/60
      group-hover:text-white px-2 py-2 rounded-md '>
      Sign In</button></div>
      <div className='flex flex-col gap-2 items-center'>
          <Link to='/forgotPass' className='text-blue-900 hover:text-red-800 text-center '>Forgot Password?</Link>
           
            <p className='pt-0 text-center  text-sm  pl-7'>Don't have an account?  <Link to='/register' className='text-blue-900 hover:text-red-800 '>Sign Up</Link></p>
      </div>
</div>

      </div>
    </div>
  )
}

export default SignIn