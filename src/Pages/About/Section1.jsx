import React from 'react';
import aboutBanner from '../../assets/aboutBanner.png'

const Section1 = () => {
    return (
        <div
  className="hero -mt-32 max-w-7xl h-[640px] my-10"
  style={{
    backgroundImage: `url(${aboutBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  }}>
  
  <div className=" my-96 text-white">
    <div className="w-[1050px] h-[471px] mx-auto p-4 text-left">
      <div className=''>
     
      <p className="mb-2 text-center font-teko tracking-wider font-bold text-7xl">
      ABOUT US
      </p>
      </div>
     <div className='w-48 mx-auto h-[10]'>
        
      <button className="btn mb-4 border text-white rounded-full btn-outline border-slate-600">
        <li>Home</li>
        <li>About</li>
        
        
           </button>
     
     </div>

    </div>
  </div>
</div>
    );
};

export default Section1;