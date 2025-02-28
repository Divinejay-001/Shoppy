import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const Responsivemenu = ({ open }) => {
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const signoutUser = async () => {
      setLoading(true);
      try {
          const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signout`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
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
    <section>
        { open &&(
        <div data-aos='fade-left' className='absolute top-20 left-0 w-full h-screen z-20'>
         <div className='text-xl  font-semibold uppercase  bg-primary/95 dark:bg-tertiary/95 text-white py-24 relative bottom-7 m-0 rounded-sm'>
              <ul className=' flex flex-col items-center gap-10'>
          <Link to='/' className='inline-block px-4
                            hover:text-white duration-200'>Home</Link>
               <Link to='/topRated' className='inline-block px-4
                            hover:text-white duration-200'>Top Rated</Link>
               <Link to='/mensWear' className='inline-block px-4
                            hover:text-white duration-200'>Men Wears</Link>
               <Link to='/womensWear' className='inline-block px-4
                            hover:text-white duration-200'>Women Wears</Link>
               <Link to='/register' className='inline-block px-4
                            hover:text-white duration-200'>Sign Up</Link>
               <Link to='/signin' className='inline-block px-4
                            hover:text-white duration-200'>Sign In</Link>    
                             <button
            onClick={signoutUser}
            className="flex   text-white  whitespace-nowrap border-2   rounded-md p-1 hover:text-blue-700 transition"
          >
            <span><LogOut/></span>
            Log out
          </button>
                                   </ul>
              </div>
        </div>
        )
}
    </section>
  )
}

export default Responsivemenu