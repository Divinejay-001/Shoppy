import React from 'react'
import Input from './input/Input'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Signup = () => {
  return (
    <div className='  min-h-screen py-40'>
      <div className='container mx-auto'>
      <div className='absolute top-9 left-4'>
             <Link to='/' className='font-bold text-black dark:text-white
             text-2xl sm:text-3xl flex gap-2'>
                 <img src={Logo} alt="" className='w-10
                 ' />
                 Shophere
             </Link>
             </div> 
<div className='grid grid-cols1 justify-center items-center
overflow-hidden'>
  
<div className='' >
<h1 className='font-bold text-4xl text-center '>Welcome</h1>
</div>
<div>
  <h2 className='text-sm relative top-4'>Fill Your Details</h2>
</div>
<div>
  <form  className='pl-5'>
  <div className="flex flex-col gap-2 mt-6">
          <div className="flex flex-col lg:flex-row gap-3 items-center w-full pb-4 text-black  ">
         
             
          <input type="text" name="" placeholder='Enter Username' className='shadow-xl py-1 p-12 text-left rounded-md' id="" />
          <input type="email" name="" placeholder='Email' className='shadow-xl py-1 p-12 rounded-md' id="" />
          </div>
          <input type="password" name="" placeholder='Password' id="" className='shadow-xl text-black mb-2 py-1 px-1 rounded-md' />
          <input type="password" name="" placeholder='Confirm Password' id="" className='shadow-xl text-black py-1 px-1 rounded-md' />
          <div class="w-64 relative">
  <label for="gender" class="block text-sm font-medium text-gray-200 mb-1 ">Gender</label>
  <div class="relative text-black text-left">
    <select id="gender" name="gender" class="block  w-[280px] lg:w-[570px] py-1  rounded-md  border-gray-300 shadow-xl focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm appearance-none pr-10">
      <option value="" disabled selected className='text-black '>Select your gender</option>
      <option value="male" className='text-black'>Male</option>
      <option value="female" className='text-black pb-8'>Female</option>
     
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      {/* <!-- Dropdown arrow --> */}
      <svg class="h-6 w-6 absolute left-3 lg:left-64 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
  <div className='pt-9  group flex justify-center items-center'>
      <button type='submit' className='w-full relative left-2 lg:left-36 
    hover:scale-105 duration-300 transition-all
     bg-primary group-hover:bg-tertiary/60
      group-hover:text-white px-2 py-2 rounded-md '>
      Register</button>
      
      </div>
      <div className='flex justify-center text-center items-center'>
        <p className='pt-4 relative lg:left-32   text-sm '>Already have an account?  <Link to='/signin' className='text-blue-900 hover:text-red-800 '>Sign In</Link></p>
      </div>

</div>


          </div>
  </form>
</div>
</div>
      </div>
    </div>
  )
}

export default Signup