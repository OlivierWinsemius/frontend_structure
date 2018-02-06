import timer from '../../browserReducers/timerReducer'

describe('Timer Reducer', () => {
    it('has a default state', () => {
        expect(timer()).toMatchSnapshot();
    })
});
