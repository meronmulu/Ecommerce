import React, { useState, useEffect } from 'react';
import img1 from '../../asset/hero/girl.jpeg';
import img2 from '../../asset/hero/GIRLandBOY.jpeg';
import img3 from '../../asset/hero/bigSale.jpeg';

function Hero({handleOrder}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = [
    { id: 1, img: img2, title: "Upto 50% off on all Men's Wear", description: 'Lorem ipsum...' },
    { id: 2, img: img1, title: "30% off on all Women's Wear", description: 'Lorem ipsum...' },
    { id: 3, img: img3, title: '70% off all Products Sales', description: 'Lorem ipsum...' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    // return () => clearInterval(interval);
  }, [imageList.length]);
  

    
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
       {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div className="flex flex-col justify-center gap-4 pt-12 pt-sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2">
           {/* text content section */}
            <div className="flex flex-col justify-center gap-4 text-center sm:text-left">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
               className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                {imageList[currentIndex].title}
                </h1>
              <p 
               data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="100"
               className="text-sm">
                {imageList[currentIndex].description}
              </p>
              <div  
                 data-aos="fade-up"
                 data-aos-duration="500"
                 data-aos-delay="100">
                <button onClick={()=>handleOrder()}
                 className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center justify-center gap-3 group">
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="sm:order-2">
              <div className="relative z-10"   
                     data-aos="zoom-in">
                <img
                  src={imageList[currentIndex].img}
                  alt=""
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] lg:scale sm:scale-125 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      

  );
}

export default Hero;
