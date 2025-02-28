import { LogOut } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";
// import Logo from '../../assets/logo.png';

const ProfilePage = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* <div className='flex space-x-1 items-center relative text-3xl left-6 top-3'>
                  <img className="w-8 h-8 object-cover rounded-full" src={Logo} alt="Logo" />
               <h1 className=' text-white font-semibold'>Shophere</h1>
             </div> */}
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
          src="https://i.pinimg.com/736x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg"
          alt="Profile"
        />
        <h2 className="text-xl font-semibold mt-4">John Doe</h2>
        <p className="text-gray-600">Web Developer</p>
        <p className="mt-2 text-gray-500">
          Passionate about building modern and responsive web applications.
        </p>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            
            className="py-3 px-2 rounded-md bg-blue-700 whitespace-nowrap text-white hover:text-blue-200 transition"
          >
            <Link to='/home'> Proceed</Link> 
          </button>
          <button
            onClick={signoutUser}
            className="text-blue-500 flex whitespace-nowrap border-2 border-blue-700 rounded-md p-2 hover:text-blue-700 transition"
          >
            <span><LogOut/></span>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
