import React from 'react';
import img1 from '../../assets/section2.jpeg'
const Section2 = () => {
    return (
        <div className='flex lg:flex-row flex-col my-16 justify-center items-center gap-6'>
           <div>
<img className='w-[500px] mx-auto h-[450px] lg:ml-10' src={img1} alt="" />
           </div>
       <div className='lg:w-[500px] p-4 mx-auto text-left'>
           <div className=' '>
        <p className='my-4 font-teko tracking-widest'>A B O U T U S</p>
      <h1 className="mb-5 text-xl lg:text-5xl font-teko font-bold">WELCOME TO THE
      Andrews Fitness Training</h1>
      </div>
<p>At Andrews Personal Training, we believe in the power of personalized fitness solutions. Founded with a passion for transforming lives through fitness, our mission is to offer high-quality personal training sessions that cater to individual needs and preferences. Our team of certified trainers brings a wealth of experience and expertise, ensuring you receive the best guidance and support on your fitness journey. Whether you're looking to lose weight, build muscle, or improve your overall health, we have the right program for you. With flexible scheduling and delivery services, we make it easy for you to prioritize your health and fitness goals. Join us at Andrews Personal Training and take the first step towards a healthier, happier you.-</p>
       </div>
        </div>
    );
};

export default Section2;