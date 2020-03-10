import React from 'react';
import Header from '../../components/header/header';
import LeaseDynamic from '../../components/leaseDynamic/leaseDynamic';
import Encyclopedias from '../../components/cncyclopedias/cncyclopedias';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';

const Main = () => {
    return (
        <div className="container">
            <Header />
            <div className="main-con">
                <Banner />
                <LeaseDynamic />
                <Encyclopedias />
            </div>
            <Footer />
        </div>
    )
}
export default Main;