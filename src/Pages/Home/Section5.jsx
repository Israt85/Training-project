import React from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import img1 from '../../assets/planningimg1.png';
import img2 from '../../assets/planningimg2.png';
import img3 from '../../assets/planningimg3.png';

const Section5 = () => {
  return (
    <div className='bg-gray-100'>
      <div className=' h-auto w-full lg:w-[1050px] xl:h-[900px] py-12 mx-auto '>
        <HeadingTitle title={'PRICING TABLES'} subtitle={'CHOOSE YOUR PRICING PLAN'}></HeadingTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
     
        <div className='bg-white w-[80%] sm:w-[300px] lg:w-[350px] mx-auto h-auto border relative shadow-lg'>
  <img className='w-full' src={img1} alt="" />
  <div className='w-28 h-28 mx-auto absolute inset-x-0 -mt-14 rounded-full bg-[#D0FD3E] flex items-center justify-center'>
    <div className='text-center'>
      <p className='text-2xl sm:text-3xl lg:text-4xl font-bold font-teko mt-4'>$60</p>
      <p className='text-sm'>Monthly</p>
    </div>
  </div>
  <div className='px-6 pt-16 pb-8 text-center'>
    <p className='text-xl sm:text-2xl lg:text-3xl font-semibold font-teko mb-6'>BASIC GYM</p>
    <ul className='space-y-4 w-52 mx-auto px-4 list-disc text-left'>
      <li className='text-lg'>App access</li>
      <li className='text-lg'>Exercise plan (easy to follow)</li>
      <li className='text-lg'>24/7 access</li>
    </ul>
    <button className="btn mt-24 bg-[#D0FD3E] text-black rounded-full px-6 py-2">Join Now</button>
  </div>
</div>


          <div className='bg-white w-[80%] sm:w-[300px] lg:w-[350px] mx-auto h-auto border relative shadow-lg'>
            <img className='w-full' src={img2} alt="" />
            <div className='w-28 absolute h-28 mx-auto inset-x-0 flex justify-center items-center rounded-full -mt-14  bg-[#D0FD3E]'>
              <div className='text-center py-2'>
                <p className='text-2xl sm:text-3xl lg:text-4xl font-bold font-teko mt-4'>$120</p>
                <p className='text-sm'>Monthly</p>
              </div>
            </div>
            <div className='px-6 pt-16 pb-8 text-center'>
              <p className='text-xl sm:text-2xl lg:text-3xl font-semibold font-teko mb-6'>STANDARD GYM</p>
              <ul className='space-y-4 w-52 px-4 mx-auto list-disc text-left'>
                <li className='text-lg'>App access</li>
                <li className='text-lg'>Exercise plan (easy to follow)</li>
                <li className='text-lg'>Weekly progress checks</li>
                <li className='text-lg'>Nutrition coaching</li>
              </ul>
              <button className="btn mt-14 bg-[#D0FD3E] text-black rounded-full px-6 py-2">Join Now</button>
            </div>
          </div>

         
          <div className='bg-white w-[80%] md:col-span-2 lg:col-span-1 sm:w-[300px] lg:w-[350px] mx-auto h-auto border relative shadow-lg'>
            <img className='w-full' src={img3} alt="" />
            <div className='w-28 absolute h-28 mx-auto inset-x-0 flex justify-center items-center rounded-full -mt-14  bg-[#D0FD3E]'>
                     <div className='text-center py-2'>
                     <p className='text-4xl font-bold font-teko mt-4'>$300</p>
                     <p>Monthly</p>
                     </div>
                    </div>
            <div className='px-6 pt-16 pb-8 text-center'>
              <p className='text-xl sm:text-2xl lg:text-3xl font-semibold font-teko mb-6'>PREMIUM GYM</p>
              <ul className='space-y-4 w-52 mx-auto px-4 list-disc text-left'>
                <li className='text-lg'>App access</li>
                <li className='text-lg'>3 virtual sessions</li>
                <li className='text-lg'>Exercise plan</li>
                <li className='text-lg'>Nutrition coaching</li>
                <li className='text-lg'>24/7 access</li>
              </ul>
              <button className="btn mt-6 bg-[#D0FD3E] text-black rounded-full px-6 py-2">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
