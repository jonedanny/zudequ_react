import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
                <Link to={`/`} onClick={this.handleClick.bind(this, 'index')}><HomeOutlined /> 首页</Link >
                <Link to={`/products`} onClick={this.handleClick.bind(this, 'products')}><AppstoreOutlined /> 商品</Link >
                <Link to={`/help`} onClick={this.handleClick.bind(this, 'help')}><CommentOutlined /> 帮助</Link >
                <Link to={`/about_us`} onClick={this.handleClick.bind(this, 'about_us')}><TeamOutlined /> 关于我们</Link >
            </div>
        )
    }
}
export default Navigation;