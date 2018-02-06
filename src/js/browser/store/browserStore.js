import { createStore, applyMiddleware } from 'redux';
import thunk    from 'redux-thunk';
import reducers from '../browserReducers/_reducersCombiner';

module.exports = createStore(reducers, applyMiddleware(thunk));