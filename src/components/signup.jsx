import React, { useState, useContext} from 'react'
import Input from './input/Input'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Button from './btn/Button'
import { FaGoogle } from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
import GoogleOauth from '../Google/GoogleOauth'
// import { AppContext } from '../context/AppContext'

const Signup = () => {
  const {setUserInfo, userInfo} = useContext(AppContext)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender:'',
  })
  const [errors, setErrors]=useState({});
  const [loading, setLoading]=useState(false);

  const handleInputChange=(field, value)=>{
    setFormData((prev)=>({...prev, [field]: value}))
    setErrors((prev)=>({...prev, [field]: ''}));
  }


  const  validate=()=>{
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.username.trim()) errors.username = 'Username is required';
    if (!emailRegex.test(formData.email)) errors.email = 'Invalid email address';
    if (!formData.gender) errors.gender = 'Please select your gender';
    if (!formData.phone_number.trim()) errors.phone_number = 'Phone number is required';
    if (formData.password.length < 8);
    errors.password = 'Password must be at least 8 characters long';
    if (formData.password !== formData.confirmPassword);
    errors.confirmPassword = 'Passwords do not match';

    console.log(errors);
    return errors;
  }
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
      const response = await fetch('http://localhost:3050/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          gender: formData.gender,
          // phone_number: formData.phone_number,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      alert('Signup successful!');
      setFormData({
        username: '',
        email: '',
        gender: '',
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
    <div className='  min-h-screen py-32'>
      <div className='container mx-auto'>
      <div className='absolute top-9 left-9'>
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
  <h2 className='text-sm relative top-4 left-4'>Fill Your Details</h2>
</div>
<div>
  <form         onSubmit={handleSubmit}
 className='pl-5'>
  <div className="flex flex-col gap-2 mt-6">
  {errors.general && (
          <p className="text-red-600 text-center">{errors.general}</p>
        )}
          <div className="flex flex-col lg:flex-row gap-3 items-center w-full pb-2 md:pb-3 text-black">           
          <input  type="text" 
            value={formData.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          name="" placeholder='Enter Username' className='shadow-xl p-4 lg:py-1 py-1 lg:p-12 text-left rounded-md' id="" />
          <input 
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          type="email" name="" placeholder='Email' className='shadow-xl p-4 lg:py-1 lg:p-12 py-1  rounded-md' id="" />
          </div>
          {errors.username && (
            <p className="text-red-600 text-sm">{errors.username}</p>
          )}
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
          <div className="flex flex-col lg:flex-row gap-2 items-center w-full  text-black  ">
            <input 
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            type="password" name="" placeholder='Password' id="" className='shadow-xl p-4 lg:py-1 py-1 lg:p-12 text-black   rounded-md' />
            <input 
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            type="password" name="" placeholder='Confirm Password' id="" className='shadow-xl p-4 lg:py-1 py-1 lg:p-12 text-black  rounded-md' />
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
          )}
        <div class="flex flex-col gap-2  text-black">
  <label for="gender" class="block text-sm font-medium relative left-3 md:left-0 text-gray-500 dark:text-gray-200  ">Gender</label>
  <div class="relative text-black text-left flex">
    <div className='flex gap-2 lg:8 flex-col lg:flex-row '>
      <select
      value={formData.gender}
      onChange={(e) => handleInputChange('gender', e.target.value)}
      id="gender" name="gender" className='shadow-xl p-4 lg:py-1 py-1 lg:p-12 text-black   rounded-md'>
        <option value="" disabled selected className='text-black '>Select your gender</option>
        <option value="male" className='text-black'>Male</option>
        <option value="female" className='text-black pb-8'>Female</option>
      
      </select>
      <div class="">
        <input type="text" placeholder='Location' className='shadow-xl p-4 lg:py-1 py-1 lg:p-16 text-black   rounded-md'/>
      </div>
    </div>
    {errors.gender && (
            <p className="text-red-600 text-sm">{errors.gender}</p>
          )}
  </div>
  <div className='flex'>
   
  </div>
  <div className='pt text-white  grid gap-3 justify-center items-center'>
  {/* <div className=''>
    <FaGoogle className=' flex justify-center text-center items-center  relative left-0 md:right-4 lg:left-12
    -bottom-8 z-30'/>
      <Button  styles="w-[100%] - border-2 relative left-0 md:left-3
      hover:scale-105 duration-300 transition-all
        group-hover:bg-tertiary/60 	
      border-red-50
        group-hover:text-white px-2 py-2 rounded-md shadow-xl "
      text='Sign Up with Google'/>
  </div> */}
  <GoogleOauth/>
    <Button
  text={loading ? 'Signing Up...' : 'Register'}
  styles="w-[100%] md:w-full relative left-0 lg:left-3
    hover:scale-105 duration-300 transition-all
     bg-primary group-hover:bg-tertiary/60
      group-hover:text-white px-2 py-2 rounded-md "
      disabled={loading}
  />
      {/* <button  type='submit' className='w-[80%] md:w-full relative left-0 lg:left-36 
    hover:scale-105 duration-300 transition-all
     bg-primary group-hover:bg-tertiary/60
      group-hover:text-white px-2 py-2 rounded-md '>
      Register</button> */}
       <div className='flex text-gray-700 dark:text-white justify-center text-center items-center'>
        <p className='pt-4 relative lg:left-3   text-sm '>Already have an account?  <Link to='/signin' className='text-secondary hover:text-red-800 '>Sign In</Link></p>
      </div>
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