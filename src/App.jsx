import { useEffect, useState } from 'react';
import './App.css';
import Hero from './markup/components/Hero';
import Navbar from './markup/components/Navbar';
import Products from './markup/components/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './markup/components/TopProducts';
import Banner from './markup/components/Banner';
import Subscribe from './markup/components/Subscribe';
import Testimonials from './markup/components/Testimonials';
import Footer from './markup/components/Footer';
import Popup from './markup/components/Popup';


function App() {
  
  const[orderPopup,setOrderPopUp]=useState(false);
   
   const handleOrder = ()=>{
     setOrderPopUp(!orderPopup);
   }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrder={handleOrder} />
      <Hero  handleOrder={handleOrder}/>
      <Products />
      <TopProducts  handleOrder={handleOrder}/>
      <Banner/>
      <Subscribe/>
      <Products />
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopUp={setOrderPopUp}/>
    </div>
      
    </>
  );
}

export default App;