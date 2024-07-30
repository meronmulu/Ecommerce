import React from 'react'
import {FaInstagram,FaLinkedin,FaLocationArrow,FaMobileAlt, FaFacebook } from "react-icons/fa"
import Banner from '../../asset/Footer Background.jpeg'
import img from '../../asset/logo.png'

function Footer() {
 
    const BannerImg={
        backgroundImage: `url(${Banner})`,
        backgroundPosition:"bottom",
        backGroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"50%",
        width:"100%"
    }

    const FooterLink=[
    {
       title: 'Home',
       link: "/#"
    },
    {
        title: 'About',
        link: "/#about"
     },
    {
        title: 'Contact',
        link: "/#contact"
     },
     {
        title: 'Blog',
        link: "/#blog"
     },

]
  return (
    <>
       <div style={BannerImg}  
         className='text-white justify-center'
       >
        <div className='container'>
            <div data-aos='zoom-in' className='grid sm:grid-cols-4  gap-4 py-8 pt-5'>
                {/* company details */}
                <div className=' px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-ju mb-3 flex items-center gap-3'>
                        <img src={img} alt=""  className='max-w-[50px]'/>
                        Shopsy   
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium veritatis enim rem temporibus commodi deserunt accusantium repudiandae officia dolorum quod, voluptatum voluptatibus voluptatem earum exercitationem, dolorem libero placeat esse.</p>
                </div>
                {/* footer link */}
              <div className='grid grid-cols-2 sm:grid-cols-3  mb-pl-0'>
                   <div>
                     <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 '>
                        Important Link
                     </h1>
                     <ul className='flex flex-col gap-3 '>
                      {FooterLink.map((link) => (
                         <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                           <span>{link.title}</span>
                         </li> 
                      ))} 
                     </ul>
                   </div>
                </div>
                 {/*  link */}
                <div className='grid grid-cols-2 sm:grid-cols-3  mb-pl-0'>
                   <div>
                     <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 '>
                         Link
                     </h1>
                     <ul className='flex flex-col gap-3 '>
                      {FooterLink.map((link) => (
                         <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                           <span>{link.title}</span>
                         </li> 
                      ))} 
                     </ul>
                   </div>
                </div>

                {/* social link */}
               <div>
                  <div className="flex gap-3">
                  <a href="#">
                    <FaInstagram className='text-3xl'/>
                  </a>
                  <a href="#">
                    <FaFacebook className='text-3xl'/>
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-3xl'/>
                  </a>
              </div>
               <div>
                  <div className='flex items-center gap-3'>
                      <FaLocationArrow/>
                      <p>Noide, Uttar Pradesh</p>
                  </div>
                  <div className='flex items-center gap-3 mt-3'>
                       <FaMobileAlt/>
                       <p>+91123456789</p>
                  </div>
                </div>
                </div>
              
            </div> 
        </div>
       </div>
    </>
  )
}

export default Footer