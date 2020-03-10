/**
 * 项目入口js文件 index
 */

 // 引入需要的库
import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, Switch, Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './assets/css/index.less';

// 引入需要的组件
import Products from './containers/products/products';
import Main from './containers/main/main';
import store from './redux/store';

ReactDom.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route path="/products" component={Products}></Route>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));