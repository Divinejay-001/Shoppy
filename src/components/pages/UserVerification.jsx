// import React from 'react';
// import { Mail, Lock, ArrowRight, Shield } from 'lucide-react';
// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Loader from '../Loader';
// import toast from 'react-hot-toast';
// import { AppContext } from '../../context/AppContext';
// import Button from '../btn/Button';

// function UserVerification() {
//   const [isLoading, setIsLoading] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const { token, id }= useParams();
//     const navigate = useNavigate();
//     const [userId, setUserId] = useState('');
//     const [status, setStatus] = useState(false);
//     const { setUserInfo, setIsVerified, isVerified } = useContext(AppContext);
   

//     const resendVerificationEmail = async() => {
//         try {
//             setIsLoading(true);
//             const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/resendVerificationMail/${id}`, {
//                 method: 'GET',
//                 headers: { 'Content-Type': 'application/json' }
//             })

//             const { message:statusMessage, userId, success} = await res.json();

//             if(success == false){
//                 setStatus(false); 
//                 toast.error(statusMessage);                   
//             }else{
//                 setUserId(userId);                    
//                 setStatus(true);
//                 toast.success(statusMessage);
//             }
//             setIsLoading(false);
//             setStatus(status);
//             setLoading(false);
//         } catch (error) {
//             setLoading(false);
//         }
//     }

//     const verifyUser = async () => {
//         try {
//             const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/${id}/verify/${token}`, {
//                 method: 'GET',
//                 headers: { 'Content-Type': 'application/json' }
//             })

//             const { message:statusMessage, userId, success, user} = await res.json();

//             if(success == false){
//                 setStatus(false);
//                 toast.error(statusMessage);                                      
//             }else{
//                 setUserId(userId);                    
//                 setStatus(true);
//                 toast.success(statusMessage);
//                 setIsVerified(true);
//                 setUserInfo(user);                    
//             }
//             // setMessage(statusMessage);
//             setStatus(status)
//             setLoading(false);
//         } catch (error) {
//             setLoading(false);
//         }
//     }
//     useEffect(() => { 
//         if (!isVerified) {
//             verifyUser();
//         }
//     }, [])

//     useEffect(() => {
//         if(isVerified) {
//             setLoading(false);
//         }
//     }, [isVerified])
    
//   return (
//     <div className="grid place-items-center h-screen container bg-tertiary/30 px-4">
//       <img src="" alt=""  />
//     {
//         loading ? (
//             <Loader/>
//         ) : (
//             isVerified == true ? (
//                 <div className="text-center  flex flex-col gap-3 items-center">
//                     <h1 className="font-gelasio text-5xl">Your Account is successfully verified</h1>
//                     <Button
//                         text={'Update your Profile'}
//                         styles="bg-primary hover:bg-orange-700 transition duration-500 text-white"
//                         disabled={false}
//                         onClick={() => navigate(`/profile`)}
//                     />
//                 </div>
//             ) : (
//                 <div className="text-center flex flex-col gap-3 items-center">
//                     <h1 className={`font-gelasio text-5xl`}>Your account is not verified</h1>
//                     <Button
//                         text={isLoading ? 'Sending...' : 'Resend Verification Email'}
//                         styles="bg-primary hover:bg-orange-700 transition duration-500 text-white"
//                         disabled={isLoading}
//                         onClick={resendVerificationEmail}
//                     />                        
//             </div>
//             )
            
//         )
//     }        
// </div>
//   );
// }

// export default UserVerification;