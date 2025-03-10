import React from 'react'
import { useContext, useState, useEffect } from 'react'
import SigninImg from '../../assets/signin.jpeg'
import Logo from '../../assets/logo.png'
import { FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import Button from '../btn/Button';
import Transiton from '../../Transiton';
import GoogleOauth from '../../Google/GoogleOauth';
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../../store/slices/authSlice';


const SignIn = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  console.log("SinInPage userInfo:", userInfo); // ✅ Should match AppContext state

  useEffect(() => {
    if(!!userInfo) {
      navigate('/profile');
    }
  }, [])

  const [formData, setFormData] = useState({    
    email: '',    
    password: '',    
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
  
    if (!formData.email.trim()) errors.email = 'email is required';
    if (!formData.password.trim()) errors.password = 'Password is required';
    if (!emailRegex.test(formData.email)) errors.email = 'Invalid email address';  
  
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
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({          
          email: formData.email,          
          password: formData.password
        }),
      });

      const data = await response.json()
      console.log('data', data);

      if(!data.success){        
        toast.error(data.message);
        throw new Error(data.message || 'Something went wrong');
      } 
      
      toast.success(data?.message);
      dispatch(setCredentials(data?.user));

      setFormData({        
        email: '',
        password: ''        
      });
      navigate('/profile');
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div  className='bg-gray-100  mx-auto  w-full h-screen text-black flex items-start'>
       <div className=' relative   w-10 sm:w-1/2 h-full flex flex-col  '>
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
      <div className='flex  items-center gap-3    sm:pb-0  pt-16 sm:pt-0  lg:pt-1 '>
        <div className=' flex justify-center items-center text-center mx-auto'>
          <h1 className='text-black font-bold
          text-xl sm:pb-0 pb-6  sm:0 sm:text-3xl'>Sign in to Shophere</h1>
        </div>
      </div>
<div className='w-full flex flex-col gap-8 sm:gap-4'>
    <p className='text-lg mb- 
    space-x-2'>Welcome Back! Please fill in your details.</p>
    <form className='grid gap-2 md:gap-4'
     onSubmit={handleSubmit}>
      <input required type="text" className='w-full px-4 py-4 sm:py-2  text-md border rounded-md shadow-xl
      focus:outline-none focus:border-black' placeholder='Username' />
      <input required type="email" 
      value={formData.email} 
      onChange={(e)=> handleInputChange('email', e.target.value)} 
      className='w-full px-4 py-4 sm:py-2 text-md border rounded-md shadow-lg
      focus:outline-none focus:border-black' placeholder='Email Address' />
       {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
      <input 
    value={formData.password} 
    onChange={(e)=> handleInputChange('password', e.target.value)}
    required type="password" 
    className='w-full px-4 py-4 sm:py-2 text-md border rounded-md shadow-lg
      focus:outline-none focus:border-black' placeholder='Password' />
 {/* <input type="date" placeholder='Date of Birth'  className='w-full px-4 py-4 sm:py-2 text-md border rounded-md shadow-lg focus:outline-none focus:border-black'  name="" id="" /> */}

 <Button
     disabled={loading}
      text={loading ? 'Signing in...' : 'Sign In'}/>
    </form>
    <div className='pt-1 grid gap-2'>
     
     
        
<div className='relative bottom-7 sm:bottom-0 '><GoogleOauth/></div>
     </div>
      <div className='flex flex-col gap- items-center relative bottom-12 sm:bottom-0'>
          <Link to='/forgotPass' className='text-blue-900 hover:text-red-800 text-center '>Forgot Password?</Link>
           
            <p className='pt- text-center  text-sm  pl-7'>Don't have an account?  <Link to='/register' className= 'text-sm text-blue-900 hover:text-red-800 '>SignUp</Link></p>
      </div>
</div>

      </div>
    </div>
  )
}

export default Transiton(SignIn)