import React from 'react'
import img1 from '../../asset/testimg.jpeg'
function Testimonials({hanleOrder}) {

    const TestimonialData=[
        {
            id:1,
            name: "Victor",
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas saepe aperiam corporis sint nostrum",
            img:  img1,
        },
        {
            id:2,
            name: "Satya Nadella",
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas saepe aperiam corporis sint nostrum",
            img:  img1,
        }, 
         {
            id:3,
            name: "viral kohli",
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas saepe aperiam corporis sint nostrum",
            img:  img1,
        },
        {
            id:3,
            name: "viral kohli",
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas saepe aperiam corporis sint nostrum",
            img:  img1,
        },
    ]
    
  return (
    <>
       <div className='py-10 mb-10'>
        <div className='container'>
              {/* Header scection */}
              <div className='text-center mb-10 max-w-[600px]  mx-auto' data-aos="fade-up">
                <p className='text-sm text-primary '>
                    What our customers are saying
                    </p>
                 <h1 className='text-3xl font-bold'>
                    Testimonials
                 </h1>
                 <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas saepe aperiam corporis sint nostrum,</p>
            </div>

            {/* testimonial card */}
            <div data-aos="zoom=in" className='grid sm:grid-cols-2 md:grid-cols-4' >
               {/* <Slider {...settings}>  */}
                { TestimonialData.map((data)=>(
                    <div className='my-6'>
                       <div key={data.id}
                            className='sm:flex sm:flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  dark:bg-gray-800 bg-primary/10 relative'>
                        <div className='mb-4'>
                            <img src={data.img} alt=""  className='rounded-full w-20 h-20 '/>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                          <div className='space-y-3'>
                            <p className='text-xs text-gray-500'>{data.text}</p>
                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                          </div>
                        </div>
                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'> 
                            "
                        </p>
                    </div>  
                    </div>
                   ))}
                {/* </Slider> */}
               
            </div>
        </div>
       </div>
    </>
  )
}

export default Testimonials