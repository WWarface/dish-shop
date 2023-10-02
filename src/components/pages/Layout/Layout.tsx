import React from 'react';
import Header from "../../Header/Header";
import './../../../assets/global.css';
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;