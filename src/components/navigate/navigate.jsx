import React, { Component } from 'react';
import './navigate.less';
import {
    HomeOutlined,
    AppstoreOutlined,
    CommentOutlined,
    TeamOutlined
} from '@ant-design/icons';

class Navigation extends Component {
    state = {
        current: 'index',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div className="flex-between">
                <p onClick={this.handleClick.bind(this, 'index')}><HomeOutlined /> 首页</p>
                <p onClick={this.handleClick.bind(this, 'product')}><AppstoreOutlined /> 商品</p>
                <p onClick={this.handleClick.bind(this, 'help')}><CommentOutlined /> 帮助</p>
                <p onClick={this.handleClick.bind(this, 'about_us')}><TeamOutlined /> 关于我们</p>
            </div>
        )
    }
}
export default Navigation;