import React from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { Outlet } from 'react-router-dom';

 function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout;