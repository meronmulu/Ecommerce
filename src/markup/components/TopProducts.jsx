import React from 'react'
import img1 from '../../asset/topProduct/shirt1.jpeg'
import img2 from '../../asset/topProduct/shirt2.jpeg'
import img3 from '../../asset/topProduct/shirt3.jpeg'
import { FaStar } from "react-icons/fa";

function TopProducts({handleOrder}) {
  const ProductsData = [
    {
      id: 1,
      img: img1,
      title: "Casual Wear",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 2,
      img: img2,
      title: "Printed shirt",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 3,
      img: img3,
      title: "Women Shirt",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  return (
    <>
      <div>
        <div className='container'>
          {/* header section */}
          <div className='text-left mb-30'>
            <p data-aos="fade-up" className='text-sm text-primary '>
              Top Rated Products for you
            </p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>
              Products
            </h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum repudiandae atque unde praesentium vel fuga velit? Totam molestias pariatur consequuntur,
            </p>
          </div>
          {/* body section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center sm:mt-10'>
            {ProductsData.map((product) => (
              <div
                  key={product.id}
                   data-aos="zoom-in"
                  className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mt-20'>
                <img
                  className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                  src={product.img}
                  alt=""
                />
                {/* detail section */}
                <div className='p-4 text-center'>
                  {/* star rating */}
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                  </div>
                  <h1 className='text-xl font-bold'>
                    {product.title}
                  </h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                    {product.description}
                  </p>
                  <button onClick={()=>handleOrder()}
                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center mx-auto gap-3 group">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TopProducts