import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className = "header">
            <img src= {logo} alt="ema-jhon logo"/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="review">Order Review</a>
                <a href="manage">Manage inventory here</a>
            </nav>
        </div>
    );
};

export default Header;