import React from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import img1 from '../../assets/contact1.png'
import img2 from '../../assets/contact2.png'
import img3 from '../../assets/contact3.png'
import svg1 from '../../assets/contactsvg.png'
import svg2 from '../../assets/contactsvg1.png'
import svg3 from '../../assets/contactsvg2.png'

const Section2 = () => {
    return (
        <div className='max-w-7xl mx-auto h-auto lg:h-[600px] bg-white'>
            <HeadingTitle className='text-black' title={'FIND US NOW'} subtitle='READY FOR WORKOUT'></HeadingTitle>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center w-full mx-auto h-auto xl:max-w-7xl xl:h-[300px] gap-4 my-10'>
           <div className='w-[300px] lg:w-[350px] bg-[#D0FD3E] mx-auto h-[400px]'>
            <img className='relative' src={img1} alt="" />
          
           <div className='w-[130px] absolute mx-20 lg:mx-28 -mt-16 rounded-full h-[130px] bg-black border'>
                <img className='p-10' src={svg1} alt="" />
            </div>
         
            <div className='text-center mt-20'>
                <p className='font-teko text-3xl font-semibold'>LOCATION</p>
                <p>211 Shumaker Rd </p>
                <p>211 Shumaker Rd, Buckingham, </p>
                    <p>VA 23921, USA</p>
            </div>

           </div>
           <div className='w-[300px] lg:w-[350px] bg-[#D0FD3E] mx-auto h-[400px]'>
            <img className='relative' src={img2} alt="" />
            <div className='w-[130px] absolute mx-20 lg:mx-28 -mt-16 rounded-full h-[130px] bg-black'>
                <img className='p-10' src={svg2} alt="" />
            </div>
            <div className='text-center mt-20'>
                <p className='font-teko text-3xl font-semibold'>PHONE</p>
                <p>(434)603-8716</p>
               
            </div>

           </div>
           <div className='w-[300px] lg:w-[350px] bg-[#D0FD3E] mx-auto h-[400px]'>
            <img className='relative' src={img3} alt="" />
            <div className='w-[130px] absolute mx-20 lg:mx-28 -mt-16 rounded-full h-[130px] bg-black'>
                <img className='p-10' src={svg3} alt="" />
            </div>
            <div className='text-center mt-20'>
                <p className='font-teko text-3xl font-semibold'>EMAIL</p>
                <p>andrewspersonaltraining19@gmail.com </p>
                
            </div>

           </div>


            </div>
            
        </div>
    );
};

export default Section2;