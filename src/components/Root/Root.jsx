import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex items-center justify-center gap-16'>
                <div className='border-2 border-blue-600 p-2'><Sidebar ></Sidebar></div>
                <div className='mr-32'><Outlet></Outlet></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;