import React from 'react';

const navbarres = () => {
    return (
        <div>
        <div className="navbar text-white">
<div className="flex-1">
  <img className='w-[113px] h-[103] ml-20' src={logo} alt="" />
</div>
<div className="flex-none mr-32 font-medium">
  <ul className="menu menu-horizontal mx-10 px-1">
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
      </div>
    );
};

export default navbarres;