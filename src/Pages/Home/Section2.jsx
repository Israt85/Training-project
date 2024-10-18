import React from 'react';
import img1 from '../../assets/section2.jpeg'

const Section2 = () => {
    return (
        <div
  className="hero w-full md:max-w-8xl mx-auto h-[1300px]"
  style={{
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  }}>
  
  <div className="text-white">
    <div className='flex lg:flex-row flex-col justify-between gap-4 tracking-widest'>
        <div className='w-[500px] md:block hidden'>

        </div>
        <div className=''>
        <div className="w-[400px] px-4 lg:pr-4 h-[471px] mx-auto -mt-[500px] ">
      <div className=''>
        <p className='my-4 text-[#D0FD3E]'>A B O U T U S</p>
      <h1 className="mb-5 text-xl lg:text-4xl font-teko font-semibold">WELCOME TO THE <br />
      Andrews Personal Training</h1>
      </div>
      <p className='lg:text-lg text-sm pr-4 w-72 lg:w-[450px] h-[96px] font-extralight text-gray-300' style={{ wordSpacing: '0.25rem' }}>At Andrews Personal Training, we believe in the power of personalized fitness solutions. Founded with a passion for transforming lives through fitness, our mission is to offer high-quality personal training sessions that cater to individual needs and preferences. Our team of certified trainers brings a wealth of experience and expertise, ensuring you receive the best guidance and support on your fitness journey. Whether you're looking to lose weight, build muscle, or improve your overall health, we have the right program for you. With flexible scheduling and delivery services, we make it easy for you to prioritize your health and fitness goals. Join us at Andrews Personal Training and take the first step towards a healthier, happier you.-
      </p>
      <div className='flex lg:flex-row flex-col gap-2 justify-center lg:justify-evenly lg:text-left my-10 lg:-mx-20 mr-28'>
        <div>
          <div className='my-6'>
          <h1 className='text-[#D0FD3E] mt-96 text-5xl font-teko font-bold'>600K+</h1>
          <p className='text-sm'>WORKING HOURS</p>
         
          </div>
          <div>
          <h1 className='text-[#D0FD3E] my-2 text-5xl font-teko font-bold'>2560+</h1>
          <p className='text-sm'>HAPPY CLIENTS</p>
          </div>
        </div>
        <div >
        <div>
          <h1 className='text-[#D0FD3E] my-2 lg:mt-96 text-5xl font-teko font-bold'>790+</h1>
          <p className='text-sm'>SUCCESS PROGRAM</p>
          
          </div>
          <div className='my-6'>
          <h1 className='text-[#D0FD3E] my-2 text-5xl font-teko font-bold'>830+</h1>
          <p className='text-sm'>PERFECT BODIES</p>
          </div>

        </div>
      </div>

     
      
     

    </div>
        </div>
        
    </div>
    
  </div>
</div>
    );
};

export default Section2;