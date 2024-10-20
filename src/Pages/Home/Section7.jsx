import React from 'react';
import img from '../../assets/section7.jpeg'

const Section7 = () => {
    return (
        <div
        className="hero  h-[650px] max-w-7xl mx-auto lg:h-[982px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}>
        
        <div className="text-white">
          <div className='flex flex-col justify-center lg:flex-row lg:justify-between gap-4 lg:tracking-widest'>
              <div className='xl:w-[485px] lg:block hidden'>
      
              </div>
              <div>
              <div className="w-80 lg:w-[485px] pr-4 h-[471px] lg:mx-40 lg:-mt-40 ">
            <div className=''>
              <p className='my-4 px-1 text-[#D0FD3E]'>C O N T A C T U S</p>
            <h1 className="mb-5 px-1 text-3xl xl:text-5xl font-teko font-semibold w-full">SEND US A MESSAGE
            & JOIN OUR TEAM</h1>
            </div>
           <div className='flex lg:flex-row flex-col gap-4 justify-center items-center lg:justify-between'>
            <div className='w-72 lg:w-[216px] h-[48px] bg-white rounded-full'>
           <p className='text-gray-600 mx-6 pt-2'>Name</p>
            </div>
            <div className='w-72 lg:w-[216px] h-[48px] bg-white rounded-full'>
           <p className='text-gray-600 mx-6 pt-2'>Phone</p>
            </div>
           </div>
           <div className='flex lg:flex-row flex-col gap-4 justify-center items-center lg:justify-between'>
            <div className='w-72 lg:w-[216px] mt-4 h-[48px] bg-white rounded-full'>
           <p className='text-gray-600 mx-6 pt-2'>Email</p>
            </div>
            <div className='w-72 lg:w-[216px] h-[48px] bg-white rounded-full'>
           <p className='text-gray-600 mx-6 pt-2'>Subject</p>
            </div>
           </div>
           <div className='lg:w-[450px] mt-4 rounded-md mx-2 h-20 lg:h-[130px] bg-white'>

           </div>
           <button className="btn my-4 mx-4 bg-[#D0FD3E] text-black rounded-full btn-outline border-slate-600">Send Now <svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="42" rx="21" fill="#D0FD3E"/>
<path d="M30.8375 19.5391C31.5641 19.9844 31.5641 21.0391 30.8375 21.4844L22.5875 26.3594C21.8375 26.8047 20.9 26.2656 20.9 25.375V15.625C20.9 14.6641 21.9078 14.2656 22.5875 14.6641L30.8375 19.5391Z" fill="black"/>
</svg>   </button>
          </div>
              </div>
              
          </div>
          
        </div>
      </div>
    );
};

export default Section7;