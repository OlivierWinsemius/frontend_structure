import { createStore, applyMiddleware } from 'redux';
import reducers from '../browserReducers/_reducersCombiner';
import middleWare from './middleware';

module.exports = createStore(reducers, applyMiddleware(middleWare));