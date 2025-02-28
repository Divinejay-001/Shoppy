import { useContext, useRef, useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext"; 
import Logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import Button from '../btn/Button';

const VerifyOTPPage = () => {
    const {setUserInfo, userInfo} = useContext(AppContext); 
    const navigate = useNavigate(); 
    const location = useLocation();
    const { email } = location.state || {}; // Safely access maskedEmail
    // const email = 'abaz@gmail.com'; // Safely access maskedEmail
    let otpLength = 4;
    const [OTP, setOTP] = useState(new Array(otpLength).fill(''));
    const inputRefs = useRef([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [resendingOTP, setResendingOTP] = useState(false);

    function hideEmail(email) {
        // Split the email into username and domain
        const [username, domain] = email.split('@');
    
        // Ensure the username length is at least 2 characters
        if (username.length < 2) {
            return email; // Return the original email if the username is too short
        }
    
        // Get the first and last characters of the username
        const firstChar = username.charAt(0);
        const lastChar = username.charAt(username.length - 1);
    
        // Replace characters between the first and last characters with asterisks
        const maskedUsername = firstChar + '*'.repeat(username.length - 2) + lastChar;
    
        // Combine the masked username and domain
        const maskedEmail = maskedUsername + '@' + domain;
        return maskedEmail;
    }
    
    const maskedEmail = hideEmail(email);

    console.log({maskedEmail})
    
    const handleChange = (e, index) => {
        const { value } = e.target;
    
        if (isNaN(Number(value))) {
            return;
        }
    
        const newOtp = [...OTP];
        newOtp[index] = value.substring(value.length - 1);
        setOTP(newOtp);
    
        // Move focus to the next field
        if (value && index < otpLength - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    
        // Enable the button when all fields are filled
        const isComplete = newOtp.every((digit) => digit.length > 0);
        // setIsDisabled(!isComplete);
    };
    
    
    const handleKeyDown = (e, index) => {
        const { key } = e;
        if (key === 'Backspace' && !OTP[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus(); // Null check before accessing focus method
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index]?.setSelectionRange(1, 1); // Null check before accessing setSelectionRange

        // more validation
        if (index && !OTP[index - 1]) {
            inputRefs.current[OTP.indexOf("")]?.focus(); // Null check before accessing focus method
        } 
    }

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0]?.focus(); // Null check before accessing focus method
        }
    }, [])

    

    useEffect(() => {
        // Reset isDisabled state whenever OTP length changes
        setIsDisabled(OTP.join('').length !== otpLength);
    }, [OTP, otpLength]);

    const verifyOTP = async(e) => {
        if(e) e.preventDefault();
        setIsLoading(true);

        try {
            // Submit the form data
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/verifyOTP`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, OTP:OTP.join("") }),
            });
            
            const result = await res.json(); 
            const { success, message } = result
            if(success == false){
                toast.error(message)
            }else{
                toast.success(message);               
                setTimeout(() => {
                    navigate('/reset');                    
                }, 3000)            
            }
            // console.log('result >>', result);
        } catch (err) {
            console.log("Error verifying OTP:", err);
            // toast.error(err?.data?.message)
        } finally {
            setIsDisabled(true);
        }
    }

    const sendOTP = async () => {
        setResendingOTP(true)
        try {
            // Submit the form data
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/generateOTP`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email}),
            });
            
            const result = await res.json(); 
            const { success, message } = result
            if(success == false){
                toast.error(message);
                setResendingOTP(false);
            }else{
                toast.success(message); 
                setResendingOTP(false);                         
            }
            console.log('result >>', result);
        } catch (err) {
            console.log('backend error >>', err);
            setResendingOTP(false);
            // toast.error(err?.data?.message)
        } 
    }
  return (
    <>
    {
        userInfo ? (
            <Navigate to={'/'}/>
        ) : (            
            <section className="grid place-items-center overflow-hidden bg-gray-950 min-h-screen"> 
                    <div className='flex space-x-1 items-center absolute  text-3xl left-6 top-3'>
                          <img className="w-8 h-8 object-cover rounded-full" src={Logo} alt="Logo" />
                       <h1 className=' text-white font-semibold'>Shophere</h1>
                     </div>     
                <div className="h-auto bg-white w-72 sm:w-auto mx-auto top-10 relative overflow-hidden p-2  md:p-[3rem] rounded-[20px] shadow-lg">
                    <form onSubmit={verifyOTP}>
                    <h1 className="text-4xl  text-primary font-extrabold text-center">OTP verification</h1>
                    <p className="text-black">code has been sent to {maskedEmail}</p>
                    <div className=" my-[30px] mx-0 flex space-x-2 items-center justify-center">
                        {
                            OTP.map((value, index) => (
                                <input key={index}
                                    ref={(input) => inputRefs.current[index] = input}
                                    type="text"
                                    className="w-16 h-16 text-4xl text-center border text-primary border-black rounded-lg focus:border-[2px] focus:outline-red"
                                    onChange={(e) => handleChange(e, index)}
                                    value={value}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onClick={() => handleClick(index)}
                                />
                            ))
                        }
                    </div>    
                    <Button                        
                        disabled={isDisabled}
                        text={!isLoading ? 'Verify' : 'Verifying...'}
                        styles="mt-4 bg-primary hover:bg-green-700 hover:text-white transition duration-500 text-black md:w-full xl:w-full"
                    />                
                    
                </form>
                <p className="mt-4 text-black">
                    Didn't get the OTP,
                    <button 
                        onClick={sendOTP}
                        disabled={resendingOTP}
                        className={`hover:underline text-[#ff9d00]  ml-3 ${resendingOTP ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >   
                        Resend
                    </button>
                </p>
                </div>
            </section>        
        )
    }
</> 
  )
}

export default VerifyOTPPage