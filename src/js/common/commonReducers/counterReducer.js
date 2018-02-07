export default function counterReducer(state = 0, action = {}) {
    const numeric = /^\d+$/;
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return numeric.test(action.payload) ?
                state + action.payload :
                state;
        case 'DECREASE_COUNTER':
            return numeric.test(action.payload) ? 
                state - action.payload :
                state;
        default:
            return state;
    }
}