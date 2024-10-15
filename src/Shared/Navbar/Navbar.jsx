import React from 'react';
import logo from '../../assets/Logotraining.png'

const Navbar = () => {
    return (
        <div>
          <div className="navbar text-white bg-black">
  <div className="flex-1">
    <img className='w-[113px] h-[103] ml-20' src={logo} alt="" />
  </div>
  <div className="flex-none mr-32">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a >About</a>
      </li>
      <li>
        <a >Contact</a>
      </li>
    </ul>
  </div>
</div>  
        </div>
    );
};

export default Navbar;