import { useContext, useState } from 'react'
import {GoogleAuthProvider,  getAuth, signInWithPopup } from 'firebase/auth'
import {app} from '../firebase'
import { AppContext } from '../context/AppContext'
import Button from '../components/btn/Button'
import Google from '../assets/google.png'
import toast from "react-hot-toast";



const GoogleOauth = ({bgColors}) => {
        const {setUserInfo}= useContext(AppContext)
    const [isLoading, setIsloading]=useState(false)

    const handleClick = async () => { 
        console.log('running handleclick')
        try{
            setIsloading(true);
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider); 
            console.log({result});
            const res = await fetch(`http://localhost:3000/api/auth/google-auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }),
            })
            const data = await res.json();
            const { user, success, message} = data
            if(!success){
                toast.error(message);
                console.log(message)
            }else{
                toast.success(message);
                console.log(message);
                setTimeout(() => {
                    setUserInfo(user);
                }, 3000)
            }            
        }catch(err){
            console.log(`couldn't log in with google`, err);            
        }finally{
            setIsloading(false);
        }
    }
  return (
    <div className="flex justify-center w-full">
    <button 
      onClick={handleClick}
      disabled={isLoading}
      className={`${bgColors} flex items-center justify-center w-full 
        hover:scale-105 duration-300 transition-all 
        bg-transparent hover:bg-black/10 border-2 border-gray-400 
        group-hover:bg-tertiary/60 group-hover:text-white rounded-md py-3 gap-3`}
    >
      <img
        src={Google}
        className="w-5 h-auto" // Keeps image size responsive
        alt="Google Logo"
      />
      {isLoading ? 'Signing in...' : 'Continue with Google'}
    </button>
  </div>
  
  
  
  
   

    

  )
}

export default GoogleOauth