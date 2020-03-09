import React, { Component } from 'react';
import './cncyclopedias.less';
import {
    CommentOutlined,
    BulbOutlined,
    RocketOutlined,
    PayCircleOutlined
} from '@ant-design/icons';

class Cncyclopedias extends Component {

    render() {
        return (
            <section className="intimate-service">
                <div className="title">
                    <span>租得趣百科</span>
                    <span>Zudequ Cncyclopedias</span>
                </div>
                <div className="content flex-between">
                    <div>
                        <CommentOutlined />
                        <h3>品牌含义</h3>
                        <p>当今是租赁经济崛起的时代亦是电玩肆意的时代，而租赁与电玩的完美融合便衍生了租得趣。租得趣，租不出户 ，得未曾有， 趣之不尽 。租得趣，租得高新科技，租得乐趣无穷。</p>
                    </div>
                    <div>
                        <BulbOutlined />
                        <h3>品牌理念</h3>
                        <p>租得趣秉承着“倡导租赁经济，减少闲置浪费，共享优质电玩”的品牌理念，相信合理电玩能释放快捷生活中的压力，缓解繁琐生活中的焦躁。租得趣迎合租赁市场的重要需求，大力发展信用租赁，多渠道租赁，在淘宝，支付宝，以及微信上均提供了快捷可靠的租赁平台，致力满足用户的咨询和租赁需求。</p>
                    </div>
                    <div>
                        <RocketOutlined />
                        <h3>品牌愿景</h3>
                        <p>在未来，期许与每一位爱好电玩的伙伴一起成长，让电玩成为日常生活中的娱乐亦或是释放压力的一种方式，一起挖掘更多的乐趣与激情，一起顺应共享经济时代，把租赁消费传播给更多的人群，把电玩的快乐与更多人分享。</p>
                    </div>
                    <div>
                        <PayCircleOutlined />
                        <h3>信用免押租赁</h3>
                        <p>租赁经济随着移动互联网技术的发展迅速崛起，租赁消费模式逐渐渗透各个领域。租得趣积极顺应时代，以信用为基础引导租赁消费，推出信用免押租赁政策。租得趣与芝麻信用平台达成了友好的战略合作关系，在用户授权后，芝麻信用将多维度评估信用等级，评估结果达到标准即可满足用户信用免押租赁的消费需求。</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Cncyclopedias;