require('../../common/utils/oliApp');
require('../browserActions/actionTypes');

const initialTimer = {
    startedAt: undefined,
    stoppedAt: undefined
}

export default function timerReducer(timer = initialTimer, action = {}) {
    switch(action.type) {
        case oliApp.actionTypes.TIMER_START:
            return {
                ...timer,
                startedAt: action.payload,
                stoppedAt: undefined
            };
        case oliApp.actionTypes.TIMER_STOP:
            return  {
                ...timer,
                stoppedAt: timer.stoppedAt || action.payload
            };
        case oliApp.actionTypes.TIMER_RESET:
            return  {
                ...timer,
                startedAt: action.payload,
                stoppedAt: action.payload
            };
        default:
            return timer;
    }
}