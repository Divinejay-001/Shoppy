import React from 'react'
import { useContext, useState } from 'react'
import { GoogleAuthProvider,  getAuth } from 'firebase/auth/web-extension'
import { signInWithPopup } from 'firebase/auth'
import { app} from '../firebase'
import { AppContext } from '../context/AppContext'
import { FaGoogle } from 'react-icons/fa'
import Button from '../components/btn/Button'
import Google from '/google.png'


const GoogleOauth = ({bgColors}) => {
    const {setUserInfo}= useContext(AppContext)
    const [isloading, setIsloading]=useState(false)

    const handleClick = async () => { 
        try{
            setIsloading(true);
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider); 
            console.log({result});
            const res = await fetch(`http://localhost:3050/api/auth/google-auth`, {
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
    <div className='text-gray-700 '>
    <Button
      onClick={handleClick}
      text={isloading ? 'Signing in...' : 'Continue with Google'}
      styles="w-[100%] border-2 border-gray-700 relative left-0 md:left-3
        hover:scale-105 duration-300 transition-all
        group-hover:bg-tertiary/60
        border-red-50
        group-hover:text-white px-6 py-2 rounded-md shadow-xl flex items-center justify-center space-x-2"
      bgColors={bgColors}
      disabled={isloading}
    >
      <img 
        src={Google} 
        className="w-5 h-5 relative z-30" 
        alt="Google Logo" 
      />
      <span>{isloading ? 'Signing in...' : 'Continue with Google'}</span>
    </Button>
  </div>
  
   

    

  )
}

export default GoogleOauth