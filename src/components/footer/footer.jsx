import React, { Component } from 'react';
import './footer.less';
import erweima from '../../assets/imgs/erweima.png';
import {
    WhatsAppOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';

class Footer extends Component {

    render() {
        return (
            <section className="footer">
                <div className="flex-between">
                    <div className="company-des">
                        <h1>关于租得趣</h1>
                        <p>"租得趣"是上海容趣文化传媒有限公司旗下一个专注于电玩数码租赁的可信用免押租赁的租赁品牌。租得趣组建优质的团队，建立完善的服务体系，致力为用户提供极新，极炫酷，游戏体验极佳的电玩数码产品，确保用户在畅玩的过程中没有后顾之忧。用户可通过多种渠道对心仪的产品进行咨询和付费租赁，产品邮寄方式默认顺丰快递，运费到付，以实现电玩产品安全快速运输，旨在让用户更快的享受到优质电玩带来的无穷乐趣和刺激体验。</p>
                    </div>
                    <div className="contact-us">
                        <h2>
                            <WhatsAppOutlined />
                            &nbsp;
                            全国服务热线
                        </h2>
                        <p className="hot-line">400-7189-518</p>
                        <h2>
                            <EnvironmentOutlined />
                            &nbsp;
                            办公地址
                        </h2>
                        <p className="address">
                            上海市 静安区 共和新路 4718弄 <br />
                            宏慧新汇园 10号楼 5楼 B509
                        </p>
                    </div>
                    <div className="erweima">
                        <p><img src={erweima} alt="erweima" /></p>
                        <p><br />关注公众号</p>
                    </div>
                </div>
                <div className="copy-right">
                    Copyright © 2018 - 2020 Zudequ.All Rights Reserved. 上海容趣文化传媒有限公司 版权所有
                </div>
            </section>
        )
    }
}
export default Footer;