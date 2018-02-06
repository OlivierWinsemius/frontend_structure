export default function counterReducer(state = 0, action = {}) {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return state + action.payload;
        case 'DECREASE_COUNTER':
            return state - action.payload;
        default:
            return state;
    }
}