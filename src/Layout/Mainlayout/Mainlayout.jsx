import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const Mainlayout = () => {
    return (
        <div className='bg-black'>
           <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mainlayout;