import React from 'react';
import {Outlet} from "react-router-dom";
import cl from './ContentLayout.module.css'

const ContentLayout = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <Outlet/>
            </div>
        </div>
    );
};

export default ContentLayout;