import React from 'react';
import logo from '../../assets/imgs/logo.png';
import './logo.less';

export default function Logo () {
    return (
        <p className="logo-container">
            <img src={logo} alt="logo" className="logo-img" />
        </p>
    )
}