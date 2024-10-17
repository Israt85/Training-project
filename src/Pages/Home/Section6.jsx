import React from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'

const Section6 = () => {
    return (

        <div className='w-full h-auto xl:w-[1300px] mx-auto xl:h-[861px] py-10 text-black bg-gradient-to-t from-[#3B480D] to-[#D0FD3E]'>
            <div className='w-full flex text-white justify-center'>
            <HeadingTitle className='' title={'T E A M M E M B E R S'} subtitle="TEAM OF EXPERT COACHES"></HeadingTitle>
            </div>
            <div className='flex lg:flex-row flex-col justify-center gap-20'>
            <div className='text-center text-white w-[350px]'>
                    <img className='lg:w-[314px] mx-auto h-[342px] rounded-md' src={team1} alt="" />
                    <h3 className='font-teko font-semibold text-2xl my-2'>Andrew Sullivan</h3>
                    <p>FOUNDER</p>
                    <p className='w-72 mx-auto lg:w-[403px] my-2 text-gray-300 '>Hi my names Andrew Sullivan. I am the founder of Andrews Personal Training. My specialties are nutrition, weight training, weight loss and injury prevention. My hobbies are tending to my five pets, cooking, video games, and shopping.</p>
                        <p className='text-gray-300'>Certifications are:</p>
                        <p className='text-gray-300 w-72 mx-auto'>Nasm certified personal training
                        Nasm certified nutrition coach</p>
                </div>
                <div className='text-center text-white w-[350px]'>
                    <img className='lg:w-[314px] mx-auto h-[342px] rounded-md' src={team2} alt="" />
                    <h3 className='font-teko font-semibold text-2xl my-2'>ANTHONY RICHTER
                    </h3>
                    <p>FOUNDER</p>
                    <p className='w-72 mx-auto lg:w-[403px] my-2 text-gray-300 '>Hi my names Anthony and I handle alot of the paperwork. I love bodybuilding, animals, healthy eating and I love meeting new people. I aspire to be a professional bodybuilding champion and a personal trainer.</p>
                       
                </div>
            </div>
        </div>

    );
};

export default Section6;