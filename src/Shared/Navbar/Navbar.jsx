import React from 'react';
import logo from '../../assets/Logotraining.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <div className="navbar text-white">
  <div className="flex-1">
    <img className='w-[113px] h-[103] ml-20' src={logo} alt="" />
  </div>
  <div className="flex-none mr-32 font-medium">
    <ul className="menu menu-horizontal mx-10 px-1">
     <Link to='/'> <li><a>Home</a></li></Link>
      <Link to='/about'><li>
        <a >About</a>
      </li></Link>
      <li className='w-[100px] h-[40px] text-black bg-[#D0FD3E] rounded-full'>
        <a className='px-6'>Contact</a>
      </li>
    </ul>
  </div>
</div>  
        </div>
    );
};

export default Navbar;