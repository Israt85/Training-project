import React from 'react';
import banner from '../assets/bannertrai.jpeg'

const Banner = () => {
    return (
      <div
      className="hero -mt-32 w-full h-[400px] md:h-[500px] lg:h-[720px] my-10 lg:max-w-7xl"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
  
  <div className=" lg:my-96 text-white">
    <div className="lg:w-[1050px] lg:h-[471px] mx-auto p-4 text-left">
      <div className='border-l-4 px-4 mt-16 lg:-mt-52 border-white'>
      <h1 className="lg:mb-5 lg:text-5xl font-teko tracking-wider font-light">W e l c o m e  T o</h1>
      <p className="lg:mb-5 font-teko tracking-wider font-bold lg:text-7xl">
      Andrews Personal Training
      </p>
      </div>
      <p className='text-xs lg:text-3xl lg:w-[800px] lg:h-[96px] font-extralight tracking-wider' style={{ wordSpacing: '0.25rem' }}>At Andrews Personal Training, we are dedicated to helping you achieve your fitness goals through tailored personal training sessions that fit your lifestyle. Our expert trainers are here to guide and motivate you every step of the way.
      </p>
      <button className="btn border lg:mt-24 my-4 text-white rounded-full btn-outline border-slate-600">Schedule Your Free Session Today<svg className='w-10 h-6' viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="42" rx="21" fill="#D0FD3E"/>
<path d="M30.8375 19.5391C31.5641 19.9844 31.5641 21.0391 30.8375 21.4844L22.5875 26.3594C21.8375 26.8047 20.9 26.2656 20.9 25.375V15.625C20.9 14.6641 21.9078 14.2656 22.5875 14.6641L30.8375 19.5391Z" fill="black"/>
</svg>   </button>
     

    </div>
  </div>
</div>
    );
};

export default Banner;