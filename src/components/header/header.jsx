import React, {Component} from 'react';
import logo from '../../assets/imgs/logo.png';
import './header.less';
import Navigate from '../navigate/navigate';


class Header extends Component {

    render() {
        return (
            <section>
                <div className="header flex-between">
                    <p className="header-container">
                        <img src={logo} alt="logo" className="logo-img" />
                    </p>
                    <div className="nav-container"><Navigate /></div>
                </div>
            </section>
        )
    }

}

export default Header;