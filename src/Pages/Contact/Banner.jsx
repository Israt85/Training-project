import React from 'react';
import banner from '../../assets/contactpage.png'
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <div
  className="hero -mt-32 w-full h-[300px] sm:h-[400px] md:h-[640px] xl:h-[720px] my-10 lg:max-w-7xl"
  style={{
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
        
        <div className=" lg:my-96 text-white">
          <div className="lg:w-[1050px] lg:h-[471px] mx-auto p-4 text-left">
            <div className=''>
           
            <p className="mb-2 mt-16 text-center font-teko tracking-wider font-bold text-4xl lg:text-7xl">
            CONTACT US
            </p>
            </div>
           <div className='w-48 mx-auto h-[10]'>
              
            <button className="btn mb-4 border text-white rounded-full btn-outline border-slate-600">
            <NavLink to='/'  className={({ isActive }) =>
          isActive
            ? 'text-[#D0FD3E] font-bold'
            : 'text-gray-100'  
        }> <li><a>Home</a></li></NavLink>
            <NavLink to='/contact'  className={({ isActive }) =>
          isActive
            ? 'text-[#D0FD3E] font-bold'
            : 'text-gray-100'  
        }> <li><a>Contact</a></li></NavLink>
              
              
                 </button>
           
           </div>
      
          </div>
        </div>
      </div>
    );
};

export default Banner;