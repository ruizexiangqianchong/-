import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import globalStroe from './global';

const reducerList = combineReducers({ globalStroe });

const Store = createStore(reducerList, applyMiddleware(logger));

export default Store;
