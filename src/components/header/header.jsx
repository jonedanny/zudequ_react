import React from 'react';
import logo from '../../assets/imgs/logo.png';
import './header.less';

export default function Header () {
    return (
        <p className="logo-container">
            <img src={logo} alt="logo" className="logo-img" />
        </p>
    )
}