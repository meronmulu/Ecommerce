import React from 'react'
import img from '../../asset/hero/girl.jpeg';
import img1 from '../../asset/products/girl1.jpeg';
import img2 from '../../asset/products/girl2.jpeg';
import img3 from '../../asset/products/girl3.jpeg';

import { FaStar } from "react-icons/fa";

function Products() {

    const ProductsData = [
         {
            id: 1,
            img: img,
            title: "Women Ethinic",
            rating: 5.0,
            color: "white",
            aosDelay: "0",
         },
         {
            id: 2,
            img: img1,
            title: "Women Western",
            rating: 4.5,
            color: "red",
            aosDelay: "200",
         },
         {
            id: 3,
            img: img2,
            title: "Googgles",
            rating: 4.7,
            color: "brown",
            aosDelay: "400",
         },
         {
            id: 4,
            img: img3,
            title: "Printed T-shirt",
            rating: 4.4,
            color: "yellow",
            aosDelay: "600",
         },
         {
            id: 5,
            img: img2,
            title: "Fashion T-Shirt",
            rating: 4.5,
            color: "pink",
            aosDelay: "800",
         }
    ]
  return (
    <>
       <div className='mt-14 mb-12' >
          <div className='container'>
            {/* Header scection */}
            <div className='text-center mb-10 max-w-[600px]  mx-auto' data-aos="fade-up">
                <p className='text-sm text-primary '>Top Selling Products for you</p>
                 <h1 className='text-3xl font-bold'>Products</h1>
                 <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas saepe aperiam corporis sint nostrum,</p>
            </div>
            {/* body section */}

            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center '>
                    {/* card section */}
                       {
                        ProductsData.map((data)=>(
                          <div key={data.id} className='space-y-3' data-aos="zoom-in">
                             <img src={data.img} alt=""  
                                   className='h-[220px] w-[150px] object-cover rounded-md'
                             />
                             <div>
                                <h3 className='font-semibold'>
                                    {data.title}
                                </h3>
                                <p className='text-sm text-gray-600'>
                                    {data.color}
                                </p>
                                <div className='flex items-center gap-1'>
                                  <FaStar className='text-yellow-400'/>
                                    <span>
                                        {data.rating}
                                    </span>
                                </div>
                             </div>
                          </div>
                        ))
                       }    
                </div>
                {/* veiw rating */}
                <div className='flex justify-center'>
                  <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                     View All Button
                  </button>
                </div>
            </div>
          </div>
       </div> 
    </>
  )
}

export default Products