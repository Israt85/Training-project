import React from 'react';
import img from '../../assets/section4.jpeg'
import testimonials from '../../assets/testimonials.png'
const Section4 = () => {
    return (
        <div
        className="hero w-full h-[778px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}>
        
        <div className="flex justify-between text-white">
        <div className="w-[480px] pr-4 h-[471px] mx-auto -mt-20 ">
      <div className=''>
        <p className='my-4 text-[#D0FD3E]'>T E S T I M O N I A L S</p>
      <h1 className="mb-5 text-6xl font-teko font-bold">WHAT OUR CLIENTS
      SAY ABOUT US</h1>
      </div>
      <p className='text-lg flex gap-2 pr-4 w-[450px] h-[96px] font-extralight text-gray-300' style={{ wordSpacing: '0.25rem' }}> <img className='w-[38px] h-[20px]' src={testimonials}alt="" />
  I have never felt more confident and motivated thanks to the personalized training sessions. They truly make fitness
enjoyable and effective!

      </p>
      <div className='border-l-4 px-2 mx-10 border-gray-400'>
        <p>Anthony Richter</p>
        <p>Happy Client</p>
      </div>
    </div>
          <div className='w-[500px]'>

          </div>
        </div>
      </div>
    );
};

export default Section4;