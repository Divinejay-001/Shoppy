import React from 'react';
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/products/Product"
import AOS from 'aos'
import 'aos/dist/aos.css';
import Top from './components/tops/Top';
import Banner from './components/Banner/Banner';
import Suscribe from './components/subscribe/Suscribe';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';
import Shoes from './components/shoes/Shoes';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import SignIn from './components/pages/Signin';
import Signup from './components/signup';
import { Toaster } from 'react-hot-toast';
import ResetPassword from './components/pages/ResetPassword';
import UserVerification from './components/pages/UserVerification';
import Register from './components/pages/Register';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import TopRated from './components/TopratedPage/TopRated';
import VerifyOtpPage from './components/pages/VerifyOtpPage';
function App() {
// const [orderPopup, setOrderPopup]=React.useState(false);

// const handleOrderPopup = ()=>{
//   setOrderPopup(!orderPopup);
// }
  React.useEffect(()=>{
    AOS.init({ 
      duration: 800,
      offset:100,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
},[]);
  return (
    <div className='bg-white select-none dark:bg-gray-950 dark:text-white
    duration-200'>
      <Toaster/>
      {/* <Navbar handleOrderPopup={handleOrderPopup}/> */}
     {/* <Hero handleOrderPopup={handleOrderPopup}/> */}
     {/* <Product/> */}
     {/* <Top handleOrderPopup={handleOrderPopup}/> */}
     {/* <Banner/> */}
     {/* <Suscribe/> */}
     {/* <Product/> */}
     {/* <Shoes handleOrderPopup={handleOrderPopup}/> */}
     {/* <Testimonial/> */}
     {/* <Footer/> */}
     {/* <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup}/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/signin' element={<SignIn />} />
      {/* <Route path='/signup' element={<Signup />} /> */}
      <Route path='/reset' element={<ResetPassword />} />
      <Route path='/verifyUser' element={<UserVerification />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgotPass' element={<ForgotPasswordPage />} />
      <Route path='/topRated' element={<TopRated />} />
      <Route path='/verifyOtp' element={<VerifyOtpPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
