import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from '../../context/AppContext';
import Logo from '../../assets/logo.png'; // Ensure Logo component is properly imported
// import InputBox from "../components/InputBox";
import { FaEnvelope } from "react-icons/fa";
import Button from '../btn/Button';
import toast from "react-hot-toast";


const ForgotPasswordPage = () => {
    const {setUserInfo, userInfo} = useContext(AppContext);  
    const [email, setEmail] = useState(''); 
    const [isLoading, setIsloading] = useState(false);
    const navigate = useNavigate();  

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email     

    const [validationErrors, setValidationErrors] = useState({        
        email:""             
    })   

    const handleChange = (e) => {        
        const { value } = e.target;
        setEmail(value.trim());
    }

    const validateForm = () => {
        const validationErrors = {};
        
        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            validationErrors.email = 'Email is invalid';
        } 
    
        setValidationErrors(validationErrors);
    
        // If there are any validation errors, return false
        return Object.keys(validationErrors).length === 0;
    }
    

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    // Check if the form is valid
    const isValidForm = validateForm();

    // If the form is not valid, stop form submission
    if (!isValidForm) {
        setIsloading(false); 
        return;
    }

    try {
        // Submit the form data
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/generateOTP`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email}),
        });
        
        const result = await res.json(); 
        console.log(result)
        const { success, message } = result
        if(success == false){
            toast.error(message)
        }else{
            toast.success(message);            
            setTimeout(() => {
                // Pass the masked email to the next page
                navigate('/verifyOtp', { state: { email } }); 
                setEmail('');              
            }, 3000)            
        }
        console.log('result >>', result);
    } catch (err) {
        console.log('backend error >>', err);
        // toast.error(err?.data?.message)
    } finally {
        setIsloading(false);
    }
}

  return (
    <>
    {
        userInfo ? (
            <Navigate to={'/'}/>
        ) : (            
            <section className="grid place-items-center bg-grey min-h-screen"> 
               <div className='flex space-x-1 items-center absolute  text-3xl left-6 top-3'>
                                                 <img className="w-8 h-8 object-cover rounded-full" src={Logo} alt="Logo" />
                                              <Link to='/' className=' text-white font-semibold'>Shophere</Link>
                                            </div>
                <div className="h-auto bg-white w-auto relative overflow-hidden p-[1rem]  md:p-[3rem] rounded-[20px] shadow-lg">
                    <form className="w-full" >
                        <h1 className="text-4xl text-primary font-extrabold capitalize text-center  mb-12">
                            Forgot Password
                        </h1>
                        <p className="mb-5 text-primary">You will receive an OTP to reset your Password</p>
                        <input                
                            name="email"
                            type='email'
                            placeholder="Email"
                            onChange={handleChange}
                            icon={<FaEnvelope />}
                            value={email}
                            errorMessage={validationErrors.email}
                            className='w-full px-4 py-2 text-black text-md border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent'

                        />   
                         <Button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            text={isLoading ? 'Sending...' : 'Send OTP'}
                            styles="mt-4 bg-primary hover:bg-green-700 hover:text-white transition duration-500 text-black md:w-full xl:w-full"
                        />
                    </form>
                </div>
            </section>        
        )
    }
</> 
  )
}

export default ForgotPasswordPage