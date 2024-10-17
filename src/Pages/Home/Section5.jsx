import React from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import img1 from '../../assets/planningimg1.png'
import img2 from '../../assets/planningimg2.png'
import img3 from '../../assets/planningimg3.png'

const Section5 = () => {
    return (
       <div className='bg-gray-100 py-6'>
         <div className='w-full h-auto lg:w-[1140px] xl:h-[776px] py-10 mx-auto '>
            <HeadingTitle title={'PRICING TABLES'} subtitle={'CHOOSE YOUR PRICING PLAN'}></HeadingTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                <div className='bg-white w-[300px] xl:w-[350px] mx-auto h-[600px]'>
                    <img className='relative' src={img1} alt="" />
                    <div className='w-28 absolute h-28 mx-32 rounded-full -mt-14  bg-[#D0FD3E]'>
                     <div className='text-center py-2'>
                     <p className='text-4xl font-bold font-teko mt-2'>60$</p>
                     <p>Monthly</p>
                     </div>
                    </div>
                    <div className='w-[250px] mx-auto  mt-20 text-center'>
                        <p className='text-3xl font-semibold font-teko my-8'>BASIC GYM</p>
                        <div className='text-left mx-2'>
                            <li>App access</li>
                            <li className='my-6'>Exercise plan (easy to follow)</li>
                            <li>24/7 access</li>
                        </div>
                        <button className="btn mt-20 mx-4 bg-[#D0FD3E] text-black rounded-full btn-outline border-[#D0FD3E] ">Join Now </button>
                    </div>
                </div>
                
                <div className='bg-white w-[300px] mx-auto xl:w-[350px] h-[600px]'>
                    <img className='relative' src={img2} alt="" />
                    <div className='w-28 absolute h-28 mx-32 rounded-full -mt-14  bg-[#D0FD3E]'>
                     <div className='text-center py-2'>
                     <p className='text-4xl font-bold font-teko mt-2'>$120</p>
                     <p>Monthly</p>
                     </div>
                    </div>
                    <div className='w-[250px] mx-auto  mt-20 text-center'>
                        <p className='text-3xl font-semibold font-teko my-6'>STANDARD GYM</p>
                        <div className='text-left mx-2'>
                            <li>App access</li>
                            <li className='my-6'>Exercise plan (easy to follow)</li>
                            <li>One person virtual progress checking weekly</li>
                            <li className='my-6'>Nutrition coaching</li>
                        </div>
                        <button className="btn mx-4 bg-[#D0FD3E] text-black rounded-full btn-outline border-[#D0FD3E] ">Join Now </button>
                    </div>
                </div>
                
                <div className='bg-white w-[300px] mx-auto xl:w-[350px] h-[600px]'>
                    <img className='relative' src={img3} alt="" />
                    <div className='w-28 absolute h-28 mx-32 rounded-full -mt-14  bg-[#D0FD3E]'>
                     <div className='text-center py-2'>
                     <p className='text-4xl font-bold font-teko mt-2'>$300</p>
                     <p>Monthly</p>
                     </div>
                    </div>
                    <div className='w-[250px] mx-auto  mt-20 text-center'>
                        <p className='text-3xl font-semibold font-teko my-8'>PREMIUM GYM</p>
                        <div className='text-left mx-2'>
                            <li>App access</li>
                            <li className='my-3'>3 in person virtual sessions</li>
                            <li className='my-6'>Exercise plan (easy to follow)</li>
                            <li className='my-3'>Nutrition coaching</li>
                            <li>24/7 access</li>
                        </div>
                        <button className="btn mt-4 mx-4 bg-[#D0FD3E] text-black rounded-full btn-outline border-[#D0FD3E] ">Join Now </button>
                    </div>
                </div>
                
            </div>
        </div>
       </div>
    );
};

export default Section5;