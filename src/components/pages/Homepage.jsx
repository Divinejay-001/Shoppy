import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero/Hero'
import Product from '../products/Product'
import Top from '../tops/Top'
import Suscribe from '../subscribe/Suscribe'
import Shoes from '../shoes/Shoes'
import Testimonial from '../testimonial/Testimonial'
import Footer from '../footer/Footer'
import Banner from '../Banner/Banner'
import Popup from '../popup/Popup'
import Transiton from '../../Transiton'

const Homepage = () => {
  const [orderPopup, setOrderPopup]=React.useState(false);

  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup);
  }
  return (
    <div>
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Product/>
        <Top handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <Suscribe/>
        <Shoes handleOrderPopup={handleOrderPopup}/>
        <Testimonial/>
        <Footer/>
        <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default Transiton(Homepage) 