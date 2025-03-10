import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'
import { FaCaretDown } from 'react-icons/fa'
import { IoMdApps, IoMdClose,  } from "react-icons/io";
import { list } from 'postcss'
import { Link } from 'react-router-dom'
import Responsivemenu from './responsive/Responsivemenu'
import { HiOutlineMenuAlt3} from 'react-icons/hi'
import { LogOut } from 'lucide-react'
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";

const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/#services',
    },
    {
        id: 3,
        name: 'Kids Wear',
        link: '/#',
    },
    {
        id: 4,
        name: 'Mens Wear',
        link: '/#',
    },
    {
        id: 5,
        name: 'Electronics',
        link: '/#',
    },
];

const DropdownLinks =[
    {
        id: '1',
        name: 'Trending Products',
        link: '/#',
    },
    {
        id:'2',
        
        name: 'Best Selling',
        link: '/#',
    },
    {
        id: '3',
        name: 'Top Rated',
        link: '/#',
    },
    ]
const Navbar = ({handleOrderPopup}) => {
    const [open, setOpen]= useState(false);
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const signoutUser = async () => {
      setLoading(true);
      try {
          const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signout`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            //   credentials: 'include'
          })
  
          const { message:statusMessage } = await res.json();        
          console.log({statusMessage});
          toast.success(statusMessage);
          setLoading(false);
          dispatch(logout());    
          navigate('/signin');   
      } catch (error) {
          setLoading(false);
      }
  }
  return (
    <div className='shadow-md  bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40'>
        {/* upper Navbar */}
        <div className=' bg-gradient-to-r bg-primary/40 dark:from-tertiary/60 to-tertiary/50 dark:to-gray-900 py-2'>
    <div className='container flex justify-between
    items-center '>
        <div className='relative right-2'>
        <Link to="/home" className='font-bold
        text-2xl sm:text-3xl flex gap-1'>
            <img src={Logo} alt="" className='w-7 h-7 sm:w-10 sm:h-8
            ' />
            Shophere
        </Link>
        </div> 
        {/* search bar  */}
        <div className='flex justify-between items-center
        md:gap-4 gap-2 '>
            <div className='relative group hidden md:block'>
            <input 
            type="text" 
            placeholder='search
            ' className='w-[200px]
            sm:w-[200px] 
            group-hover:w-[300px] transition-all
            duration-300 rounded-full
            border border-gray-300 px-2 py-1 
            focus:outline-none focus:border-1 
            focus:border-primary dark:border-gray-500
            dark:bg-gray-800' />
            <IoMdSearch
            className='text-gray-500 
            group-hover:text-primary absolute
            top-1/2 -translate-y-1/2 right-3'/>
        </div>
    {/* Order button  */}
    <button
    onClick={() => handleOrderPopup() }
    className='bg-gradient-to-r from-primary
    to-tertiary transition-all duration-200
    text-white py-1 px-2 sm:px-4 rounded-full flex items-center
    gap-3 group'>
        <span
        className='sm:group-hover:block hidden transition-all duration-200'>
            Order
            </span>
<FaCartShopping
className='text-xl text-white drop-shadow-sm
cursor-pointer' />
    </button>
    {/* Darkmode switch  */}
    <div>
        <DarkMode/>
    </div>
    <button
  onClick={signoutUser}
  className="hidden md:flex justify-center  bg-gradient-to-r from-primary
    to-tertiary transition-none duration-200 text-white py-1 px-2 sm:px-3
    rounded-md items-center gap-2 group "
>
  <LogOut className='text-xl text-white drop-shadow-sm
cursor-pointer' />
  <span
    className="max-w-0 group-hover:max-w-[80px] overflow-hidden whitespace-nowrap transition-all duration-200"
  >
    Log Out
  </span>
</button>


    {/* Mobile Menu */}
    <div className=' md:hidden cursor-pointer ' onClick={()=>setOpen(!open)}> 
    {open ? (
            <IoMdClose className="text-3xl dark:text-white text-primary" /> // Render close icon if open
          ) : (
            <HiOutlineMenuAlt3 className="text-3xl dark:text-white text-secondary" /> // Render app icon if closed
          )}
          <Responsivemenu open={open}/>
    </div>
  
    </div>
    
</div>
        </div>
        
        {/* lower Navbar */}
        <div data-aos='zoom-in' className='flex justify-center'>
           <ul className='md:flex hidden items-center
           gap-4'>
           <Link to='/' className='inline-block px-4 
                        hover:text-primary duration-200'>Home</Link>
           <Link to='/topRated' className='inline-block px-4 
                        hover:text-primary duration-200'>Top Rated</Link>
           <Link to='/mensWear' className='inline-block px-4 
                        hover:text-primary duration-200'>Mens Wear</Link>
           <Link to='/register' className='inline-block px-4 
                        hover:text-primary duration-200'>Register</Link>
           <Link to='/signin' className='inline-block px-4 
                        hover:text-primary duration-200'>Sign In</Link>
                {/* simple dropdown and links  */}
                <li className='group relative cursor-pointer
                '> 
                   <a href="
                   #" className='flex items-center  gap-[2px] py-2 
                       '>Trending Products
                       <span>
            <FaCaretDown
className=' transition-all  group-hover:rotate-180 duration-200
            '/>
  
                       </span>
                       </a>
                    <div className='absolute z-[9999]
                    hidden group-hover:block w-[200px] lg:w-[200px] sm:w-[150px]
              sm:mr-auto   rounded-md bg-white/70 p-2 text-black shadow-md dark:bg-white/45'>
                       <ul>
                       { DropdownLinks.map((data)=>(
                        <li>
                            <a href={data.link} className='inline-block
                            w-full rounded-md p-2 hover:bg-primary/30 dark:hover:bg-primary'>
                                {data.name}
                            </a>
                        </li>
                       ))
}
                        </ul> 
                        </div>    
                </li>
            </ul> 
        </div>
        {/* {
                Menu.map((data)=>(
                    <li >
                        <Link to={data.id}
                        className='inline-block px-4 
                        hover:text-primary duration-200'
                    >{data.name}</Link>
                                      
                    </li>
                ))} */}
    </div>
  )
}

export default Navbar