import React from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'

const Section6 = () => {
    return (

        <div className='w-full h-auto xl:max-w-7xl mx-auto xl:h-[961px] py-10 text-black bg-gradient-to-t from-[#3B480D] to-[#D0FD3E]'>
            <div className='w-full flex text-white justify-center'>
            <HeadingTitle className='' title={'T E A M M E M B E R S'} subtitle="TEAM OF EXPERT COACHES"></HeadingTitle>
            </div>
            <div className='flex md:flex-row flex-col justify-center gap-10'>
            <div className='text-center mx-auto text-white w-[300px] lg:w-[350px]'>
                    <img className='lg:w-[324px] mx-auto h-[442px] rounded-md' src={team1} alt="" />
                    <h3 className='font-teko font-semibold text-2xl my-2'>Andrew Sullivan</h3>
                    <p>FOUNDER</p>
                    <p className='w-72 mx-auto lg:w-full my-2 text-gray-300 '>Hi my names Andrew Sullivan. I am the founder of Andrews Personal Training. My specialties are nutrition, weight training, weight loss and injury prevention. My hobbies are tending to my five pets, cooking, video games, and shopping.</p>
                        <p className='text-gray-300'>Certifications are:</p>
                        <p className='text-gray-300 w-72 mx-auto'>Nasm certified personal training
                        Nasm certified nutrition coach</p>
                </div>
                <div className='text-center text-white w-[300px] mx-auto lg:w-[350px]'>
                    <img className='lg:w-[324px] mx-auto h-[442px] rounded-md' src={team2} alt="" />
                    <h3 className='font-teko font-semibold text-2xl my-2'>ANTHONY RICHTER
                    </h3>
                    <p>FOUNDER</p>
                    <p className='w-72 mx-auto lg:w-full my-2 text-gray-300 '>Hi my names Anthony and I handle alot of the paperwork. I love bodybuilding, animals, healthy eating and I love meeting new people. I aspire to be a professional bodybuilding champion and a personal trainer.</p>
                       
                </div>
            </div>
        </div>

    );
};

export default Section6;