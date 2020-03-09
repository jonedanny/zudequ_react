import React, {Component} from 'react';
import './banner.less';
import { Carousel } from 'antd';
import banner1 from '../../assets/imgs/banner1.png';
import banner2 from '../../assets/imgs/banner2.png';

class Banner extends Component {

    render() {
        return (
            <Carousel effect="fade" autoplay>
                <div className="img"><img src={banner1} alt="banner1" className="logo-img" /></div>
                <div className="img"><img src={banner2} alt="banner2" className="logo-img" /></div>
            </Carousel>
        )
    }

}

export default Banner;