import React from 'react';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import GoogleOauth from '../../Google/GoogleOauth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
function Register() {
  return (
    <div className='bg-gray-100 text-black min-h-screen flex'>
      <div className='hidden sm:block relative w-1/2'>
        <div className='absolute top-8 left-8 z-10'>
        <Link to='/' className='font-bold text-white text-3xl flex gap-2 items-center'>
                 <img src={Logo} alt="" className='w-10
                 ' />
                 Shophere
             </Link>
          {/* <a href="/" className='font-bold text-white text-3xl flex gap-2 items-center'>
            <User className="w-8 h-8" />
            Shophere
          </a> */}
        </div>
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Shopping"
          className='h-screen w-full object-cover'
        />
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      <div className='w-full sm:w-1/2 px-6 sm:px-12 flex flex-col justify-center'>
        <div className='sm:hidden mb-10 pt-8'>
          <a href="/" className='font-bold text-black text-2xl flex gap-2 items-center'>
            <User className="w-8 h-8" />
            Shophere
          </a>
        </div>

        <div className='max-w-md w-full mx-auto'>
          <div className='flex items-center gap-3 mb-8'>
            <Lock className='text-black text-3xl'/>
            <h1 className='text-black font-bold text-2xl md:text-3xl'>
              Create your account
            </h1>
          </div>

          <div className='space-y-6'>
            <p className='text-lg text-gray-600'>
              Join Shophere today! Please fill in your details.
            </p>
            
            <div className='space-y-4'>
              <input 
                required 
                type="text" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Username' 
              />
              <input 
                required 
                type="email" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Email Address' 
              />
              <input 
                required 
                type="password" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Password' 
              />
              <input 
                required 
                type="password" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Confirm Password' 
              />
            </div>
            <div className='mx-auto md:p-auto lg:pl-12'>
                <GoogleOauth bgColors='gray-100'/>
            </div>

            <button 
              type='submit' 
              className='w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2'
            >
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className='text-center text-gray-600'>
              Already have an account? 
              <a href="/signin" className='text-blue-900 hover:text-blue-700 ml-1 font-medium'>
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;