import React from 'react';
import logo from '../../assets/Logotraining.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const links={
    
  }
    return (
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink to='/'  className={({ isActive }) =>
        isActive
          ? 'text-[#D0FD3E] font-bold'
          : 'text-gray-100'  
      }> <li><a>Home</a></li></NavLink>
     <NavLink to='/about'  className={({ isActive }) =>
        isActive
          ? 'text-[#D0FD3E] font-bold'
          : 'text-gray-100'  
      }> <li><a>About</a></li></NavLink>
  <Link to='/contact'>  <li className='w-[100px] h-[40px] text-black bg-[#D0FD3E] rounded-full'>
      <a className='px-6'>Contact</a>
    </li></Link>
          </ul>
        </div>
        <div className="">
  <img className='w-[100px] h-[100] lg:ml-20' src={logo} alt="" />
</div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <NavLink to='/'  className={({ isActive }) =>
        isActive
          ? 'text-[#D0FD3E] font-bold'
          : 'text-gray-100'  
      }> <li><a>Home</a></li></NavLink>
     <NavLink to='/about'  className={({ isActive }) =>
        isActive
          ? 'text-[#D0FD3E] font-bold'
          : 'text-gray-100'  
      }> <li><a>About</a></li></NavLink>
  <Link to='/contact'>  <li className='w-[100px] h-[40px] text-black bg-[#D0FD3E] rounded-full'>
      <a className='px-6'>Contact</a>
    </li></Link>
        </ul>
      </div>
    </div>
    );
};

export default Navbar;