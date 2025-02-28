import React from 'react';
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/products/Product"
import AOS from 'aos'
import 'aos/dist/aos.css';
import './App.css';
import Top from './components/tops/Top';
import Banner from './components/Banner/Banner';
import Suscribe from './components/subscribe/Suscribe';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';
import Shoes from './components/shoes/Shoes';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import LandingPage from './components/pages/LandingPage';
import ProfilePage from './components/pages/ProfilePage';
import SignIn from './components/pages/Signin';
import Signup from './components/signup';
import { Toaster } from 'react-hot-toast';
import ResetPassword from './components/pages/ResetPassword';
import UserVerification from './components/pages/UserVerification';
import Register from './components/pages/Register';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import TopRated from './components/TopratedPage/TopRated';
import VerifyOtpPage from './components/pages/VerifyOtpPage';
import { AnimatePresence } from 'framer-motion';
import Transiton from './Transiton';
import MensWear from './components/Men/MensWear';
import Dash from './components/Dashboard/Dash';
import WomensPage from './components/pages/WomensPage';
import { ProductsPage } from './components/Dashboard/Compdash/productPage/ProductsPage';
import PrivateRoutes from './components/PrivateRoutes';
function App() {
// const [orderPopup, setOrderPopup]=React.useState(false);

// const handleOrderPopup = ()=>{
//   setOrderPopup(!orderPopup);
// }
  React.useEffect(()=>{
    AOS.init({ 
      duration: 500,
      offset:100,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
},[]);

const location = useLocation()
  return (
    <div className='bg-white select-none dark:bg-gray-950 dark:text-white
    duration-200'>
      <Toaster/>
      <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route  index element={<LandingPage/>} />
      <Route path='/signin' element={<SignIn />} />
      {/* <Route path='/signup' element={<Signup />} /> */}
      <Route path='/verifyUser/:id/verify/:token' element={<UserVerification />} />
      <Route path='/register' element={<Register />} />
      <Route path='/topRated' element={<TopRated />} />
      <Route path='/mensWear' element={<MensWear/>} />
      <Route path='/womensWear' element={<WomensPage/>} />
      <Route path='/forgotPass' element={<ForgotPasswordPage />} />
      <Route path='/verifyOtp' element={<VerifyOtpPage />} />
      <Route path='/reset' element={<ResetPassword />} />


{/* Private  */}
<Route path='' element={<PrivateRoutes/>}>
<Route path='/home' element={<Homepage />} />
<Route path='/adminDash' element={<Dash/>} >
        <Route path='/adminDash/' element={<ProductsPage/>} />
      </Route>
      <Route path='/profile' element={<ProfilePage />} />
</Route>

      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
