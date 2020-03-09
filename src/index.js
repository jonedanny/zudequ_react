/**
 * 项目入口js文件 index
 */

 // 引入需要的库
import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

// 引入需要的组件
import Register from './containers/register/register';
import Login from './containers/login/login';
import Main from './containers/main/main';
import store from './redux/store';

ReactDom.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));