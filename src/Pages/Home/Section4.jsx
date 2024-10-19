import React from 'react';
import img from '../../assets/section4.jpeg'
import testimonials from '../../assets/testimonials.png'
const Section4 = () => {
    return (
        <div
        className="hero my-6 py-20 lg:max-w-8xl lg:h-[778px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}>
        
        <div className="flex justify-between text-white">
        <div className="w-[480px] pr-4 h-[471px] mx-auto -mt-20 ">
      <div className='px-2 '>
        <p className='my-4 text-[#D0FD3E]'>T E S T I M O N I A L S</p>
      <h1 className="mb-5 text-xl lg:text-6xl font-teko font-bold">WHAT OUR CLIENTS
      SAY ABOUT US</h1>
      </div>
      <p className='text-lg px-4 flex lg:flex-row flex-col gap-2 pr-4 w-60 h-auto lg:w-[450px] lg:h-[96px] font-extralight text-gray-300' style={{ wordSpacing: '0.25rem' }}> <img className='w-[38px] h-[20px]' src={testimonials}alt="" />
  I have never felt more confident and motivated thanks to the personalized training sessions. They truly make fitness
enjoyable and effective!

      </p>
      <div className='border-l-4 px-2 mx-10 border-gray-400'>
        <p>Anthony Richter</p>
        <p>Happy Client</p>
      </div>
      <div className='flex gap-4 my-10 mx-10 items-center'>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white"/>
<path d="M25.0865 29.504L31.9505 19.78L34.8105 21.32L29.9265 29.504L34.8105 37.688L31.9505 39.228L25.0865 29.504Z" fill="white"/>
</svg>
<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white"/>
<path d="M28.3865 39.228L25.5265 37.688L30.4105 29.504L25.5265 21.32L28.3865 19.78L35.2505 29.504L28.3865 39.228Z" fill="white"/>
</svg>

      </div>
    </div>
          <div className='w-[500px]'>

          </div>
        </div>
      </div>
    );
};

export default Section4;