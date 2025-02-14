import React from 'react';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import GoogleOauth from '../../Google/GoogleOauth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import toast from 'react-hot-toast';
import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import SignUpbtn from '../btn/SignUpbtn';
import Transiton from '../../Transiton';

function Register() {
  const {setUserInfo, userInfo} = useContext(AppContext); 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    // gender: '',
    // phone_number: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // Clear error for that field
  };
  

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.username.trim()) errors.username = 'Username is required';
    if (!emailRegex.test(formData.email)) errors.email = 'Invalid email address';
    // if (!formData.gender) errors.gender = 'Please select your gender';
    // if (!formData.phone_number.trim()) errors.phone_number = 'Phone number is required';
    if (formData.password.length < 8)
      errors.password = 'Password must be at least 8 characters long';
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = 'Passwords do not match';
  
    console.log(errors); // Log errors to debug
    return errors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    // Set only if there are errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return;
    }
    

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          // gender: formData.gender,
          // phone_number: formData.phone_number,
          password: formData.password,
        }),
      });

      const data = await response.json()
      console.log('data', data);

      if(!data.success){        
        toast.error(data.message);
        throw new Error(data.message || 'Something went wrong');
      } 
      
      toast.success(data?.message);
      setUserInfo({name: 'Moses', age: 40})
      setFormData({
        username: '',
        email: '',
        // gender: '',
        // phone_number: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='bg-gray-100 text-black min-h-screen flex'>
      <div className='hidden sm:block relative w-1/2'>
        <div className='absolute top-8 left-8 z-10'>
        <Link to='/' className='font-bold cursor-not-allowed text-white text-3xl flex gap-2 items-center'>
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

        <div data-aos='zoom-in' className='max-w-md w-full mx-auto space-y-3'>
          <div className='flex items-center gap-3 mb-8'>
            <Lock className='text-black text-3xl'/>
            <h1 className='text-black font-bold text-2xl md:text-3xl'>
              Create your account
            </h1>
          </div>

          <form  
                    onSubmit={handleSubmit}
                    autoComplete="new" 
          className='space-y-6'>
            <p className='text-lg text-gray-600'>
              Join Shophere today! Please fill in your details.
            </p>
            {errors.general && (
            <p className="text-red-600 text-center">{errors.general}</p>
          )}
            <div className='space-y-4'>
              <input 
                type="text" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Username'
                value={formData.username} 
                onChange={(e) => handleInputChange('username', e.target.value)}
              />
               {errors.username && (
                  <p className="text-red-600 text-sm">{errors.username}</p>
                )}
              <input 
                type="email" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Email Address' 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              <input 
             
                type="password" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Password'
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)} 
              />
                {errors.password && (
                  <p className="text-red-600 text-sm">{errors.password}</p>
                )}
              <input 
                type="password" 
                className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent' 
                placeholder='Confirm Password' 
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              />
               {errors.confirmPassword && (
                  <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
                )}
            </div>
          

            <SignUpbtn
                text={loading ? 'Signing Up...' : 'Get Started'}
                disabled={loading}
                />

            {/* <button 
            disabled={loading}
            
              type='submit' 
              className='w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2'
            >
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5" />
            </button> */}
            
          </form>
          <div className='mx-auto md:p-auto lg:pl-12'>
                <GoogleOauth bgColors=''/>
            </div>

            <p className='text-center text-gray-600'>
              Already have an account? 
      <Link to='/signin' className='text-blue-900 hover:text-blue-700 ml-1 font-medium'>
                Sign In
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Transiton(Register);