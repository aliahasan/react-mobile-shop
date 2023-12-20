import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=' md:max-w-[1400px] mx-auto'>
            <Navbar></Navbar>
           <div className='py-10'>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;