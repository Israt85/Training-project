import React from 'react';
import logo from '../../assets/Logotraining.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar mx-auto max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
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
            className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2">
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#D0FD3E] font-bold' : 'text-gray-100'}>
              <li><a className="focus:outline-none">Home</a></li>
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#D0FD3E] font-bold' : 'text-gray-100'}>
              <li><a className="focus:outline-none">About</a></li>
            </NavLink>
            <NavLink to='/contact'>
              <li className='w-[100px] h-[40px] text-black bg-[#D0FD3E] flex justify-center items-center rounded-full focus:outline-none'>
                <a className='px-6 focus:outline-none'>Contact</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="">
          <img className='w-[80px] h-[80px] mx-2 lg:ml-20' src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#D0FD3E] font-bold' : 'text-gray-100'}>
            <li><a className="focus:outline-none">Home</a></li>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#D0FD3E] font-bold' : 'text-gray-100'}>
            <li><a className="focus:outline-none">About</a></li>
          </NavLink>
          <NavLink to='/contact'>
            <li className='w-[100px] h-[40px] text-black bg-[#D0FD3E] flex justify-center items-center rounded-full focus:outline-none'>
              <a href='/contact' className='px-6 focus:outline-none'>Contact</a>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
