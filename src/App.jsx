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
function App() {
const [orderPopup, setOrderPopup]=React.useState(false);

const handleOrderPopup = ()=>{
  setOrderPopup(!orderPopup);
}
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
      <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero handleOrderPopup={handleOrderPopup}/>
     <Product/>
     <Top handleOrderPopup={handleOrderPopup}/>
     <Banner/>
     <Suscribe/>
     <Product/>
     <Testimonial/>
     <Footer/>
     <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App
