import React, {Component} from 'react';
import Header from '../../components/header/header';
import LeaseDynamic from '../../components/leaseDynamic/leaseDynamic';
import Encyclopedias from '../../components/cncyclopedias/cncyclopedias';
import Footer from '../../components/footer/footer'

class Main extends Component {
    render () {
        return (
            <div className="container">
                <Header />
                <div className="main-con">
                    <LeaseDynamic />
                    <Encyclopedias />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Main;