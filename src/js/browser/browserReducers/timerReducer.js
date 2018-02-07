require('../../common/utils/oliApp');
require('../browserActions/actionTypes');

const initialTimer = {
    startedAt: null,
    stoppedAt: null
}

export default function timerReducer(timer = initialTimer, action = {}) {
    switch(action.type) {
        case oliApp.actionTypes.TIMER_START:
            return {
                ...timer,
                startedAt: timer.stoppedAt ?
                                timer.startedAt + (action.payload - timer.stoppedAt) : 
                                timer.startedAt || action.payload,
                stoppedAt: null
            };

        case oliApp.actionTypes.TIMER_STOP:
            return  {
                ...timer,
                stoppedAt: !timer.startedAt && !timer.stoppedAt ?
                                null :
                                timer.stoppedAt || action.payload
            };

        case oliApp.actionTypes.TIMER_RESET:
            return  {
                ...timer,
                startedAt: null,
                stoppedAt: null
            };

        default:
            return timer;
    }
}