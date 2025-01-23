import React from 'react'
import SigninImg from '../assets/signin.jpeg';
import Logo from '../assets/logo.png'
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div className='bg-gray-100 w-full h-screen text-black flex items-start'>
       <div className=' relative w-10 sm:w-1/2 h-full flex flex-col  '>
       <div className='absolute sm:right-10 right-0 container flex justify-between
         items-center  '>
             <div className=''>
             <Link to='/' className='font-bold text-white dark:text-black
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
      <div className='sm:w-[1/2]  pr-12 sm:pr-0 mx-auto   sm:m-0 lg:m-14 flex flex-col  sm:p-10 '>
      <div className='flex  items-center gap-3   pb- sm:pb-0  pt-40  lg:pt-14 '>
        <FaLock className='text-black font-bold text-2xl relative bottom-5 lg:bottom-8  sm:text-3xl'/>
        <h1 className='text-black font-bold 
        text-2xl pb-12 lg:pb-16 sm:0 sm:text-3xl'>Sign in to Shophere</h1>
      </div>
<div className='w-full flex flex-col gap-8 sm:gap-4'>
    <p className='text-lg mb-2 
    space-x-2'>Welcome Back! Please fill in your details.</p>
    <div className='grid gap-4'>
      <input type="text" className='w-full px-4 py-4 sm:py-2  text-md border rounded-md shadow-xl
      focus:outline-none focus:border-black' placeholder='Username' />
      <input type="email" className='w-full px-4 py-4 sm:py-2 text-md border rounded-md shadow-lg
      focus:outline-none focus:border-black' placeholder='Email Address' />

    </div>
    <div className='pt-3 group'>
      <button type='submit' className='w-full
    hover:scale-105 duration-300 transition-all
     bg-primary group-hover:bg-tertiary/60
      group-hover:text-white px-2 py-2 rounded-md '>
      Sign In</button></div>
    <p className='pt-0   text-sm sm:pl-10 pl-7'>Don't have an account?  <Link to='/signup' className='text-blue-900 hover:text-red-800 '>Sign Up</Link></p>
</div>

      </div>
    </div>
  )
}

export default SignIn