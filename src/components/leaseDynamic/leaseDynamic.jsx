import React, { Component } from 'react';
import './leaseDynamic.less';
import ad1 from '../../assets/imgs/ad1.jpg';
import ad2 from '../../assets/imgs/ad2.jpg';
import ad3 from '../../assets/imgs/ad3.jpg';
class LeaseDynamic extends Component {

    render() {
        return (
            <section className="lease-dynamic">
                <div className="title">
                    <span>租赁动态</span>
                    <span>Lease Dynamic</span>
                </div>
                <div className="content flex-center">
                    <div className="left-con">
                        <img src={ad1} alt="ad1" />
                        <div className="masker">
                            <h3>“游戏奥斯卡”TGA公布获奖提名</h3>
                            <p>Geoff Keighley于美国东部时间11月14日早上10点（北京时间晚上11点）在官网公布了The Game Awards 2017的获奖提名。</p>
                            <span href="#" className="view-more">查看详情 >></span>
                        </div>
                    </div>
                    <div className="right-con">
                        <div className="article flex-between">
                            <div className="article-img"><img src={ad2} alt="ad2" /></div>
                            <div className="article-con">
                                <h3>《地平线：零之曙光》（Horizon: Zero Dawn）</h3>
                                <p>游戏讲述了在遥远的未来，人类文明已经结束，被损毁的星球正在重建，人类并不是最优种群，高度发达的智能机械兽稳坐食物链的顶端，玩家在游戏中扮演一个被部落抛弃的年轻人亚罗伊，为了解开围绕在她身边的一些神秘事件，从而踏上了冒险征程。</p>
                                <span className="view-more">查看详情 >></span>
                            </div>
                        </div>
                        <div className="article flex-between mt-20">
                            <div className="article-img"><img src={ad3} alt="ad3" /></div>
                            <div className="article-con">
                                <h3>加载速度神跃进 PS5将搭载三星NvME SSD</h3>
                                <p>Xbox Scarlett主机明年将推出两款，一款是无光驱的纯数字版，一款是传统的光盘满血版，价格自然也稍高。现在，PS5游戏机的相关信息也被曝光了出来。</p>
                                <span className="view-more">查看详情 >></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default LeaseDynamic;