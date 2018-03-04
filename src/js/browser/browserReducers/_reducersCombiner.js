import { combineReducers } from 'redux';
import commonReducers      from '../../common/commonReducers/_reducersCombiner'

export default combineReducers(
    Object.assign(
        commonReducers,
        {}
    )
);