/**
 * redux 核心的管理对象
 */
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import Reducers from './reducers';

/**
 * 向外暴露store对象
 */
export default createStore(Reducers, composeWithDevTools(applyMiddleware(Thunk)))