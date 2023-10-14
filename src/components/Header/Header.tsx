import React, {FC, useState} from 'react';
import cl from './Header.module.css'
import headerLogo from './../../assets/icons/header-logo.svg'
import {Link} from "react-router-dom";
import GroceryBasket from "../GroceryBasket/GroceryBasket";

const Header:FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <header className={cl.header}>
            <div className={cl.header__content}>
                <div className={cl.header__logo}><img src={headerLogo} alt="Header logo"/></div>
                <div className={cl.header__linksContainer}>
                    <ul className={cl.header__links}>
                        <li className={cl.header__link}><Link to={'/'}>Home</Link></li>
                        <li className={cl.header__link}><Link to={'#'}>About</Link></li>
                        <li className={cl.header__link}><Link to={'/menu'}>Menu</Link></li>
                        <li className={cl.header__link}><Link to={'#'}>Services</Link></li>
                        <li className={cl.header__link}><Link to={'#'}>Contact</Link></li>
                    </ul>
                    <GroceryBasket visible={visible} setVisible={setVisible}/>
                </div>
            </div>
        </header>
    );
};

export default Header
