require('../../common/utils/oliApp');
require('../browserActions/actionTypes');

const initialTimer = {
    startedAt: null,
    stoppedAt: null
}

export default function timerReducer(timer = initialTimer, action = {}) {
    const onPlay  = !!timer.startedAt && !timer.stoppedAt;
    const onPause = !!timer.startedAt && !!timer.stoppedAt;
    const onReset = !timer.startedAt && !timer.stoppedAt;
    
    switch(action.type) {
        case oliApp.actionTypes.TIMER_START:
            return {
                ...timer,
                startedAt: onPause ?
                                // offset timer by the duration it was on pause
                                timer.startedAt + (action.payload - timer.stoppedAt) :
                                timer.startedAt || action.payload,
                stoppedAt: null
            };

        case oliApp.actionTypes.TIMER_STOP:
            return  {
                ...timer,
                stoppedAt: onReset ?
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