import { combineReducers } from 'redux';
import commonReducers      from '../../common/commonReducers/_reducersCombiner'
import timerReducer        from './timerReducer';

export default combineReducers(Object.assign(
    commonReducers,
    {
        timer: timerReducer,
    }
));