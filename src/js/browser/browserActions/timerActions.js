export function startTimer() {
    return {
        type:    oliApp.actionTypes.TIMER_START,
        payload: new Date().getTime()
    }
}

export function stopTimer() {
    return {
        type:    oliApp.actionTypes.TIMER_STOP,
        payload: new Date().getTime()
    }
}

export function resetTimer() {
    return {
        type:    oliApp.actionTypes.TIMER_RESET,
        payload: new Date().getTime()
    }
}