import commonActionTypes from '../../common/commonActions/actionTypes';

oliApp.actionTypes = Object.assign(
    commonActionTypes,
    {
        TIMER_START: 'TIMER_START',
        TIMER_STOP:  'TIMER_STOP',
        TIMER_RESET: 'TIMER_RESET'
    }
);