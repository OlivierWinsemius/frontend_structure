import { connect }      from 'react-redux';
import React            from 'react';
import PropTypes        from 'prop-types';
import TimerContainer   from './TimerContainer';
import CounterContainer from './CounterContainer';

class Home extends React.Component {
    static propTypes = {
        timer:           PropTypes.object,
        counter:         PropTypes.number,
    
        startTimer:      PropTypes.func,
        stopTimer:       PropTypes.func,
        resetTimer:      PropTypes.func,
        increaseCounter: PropTypes.func,
        decreaseCounter: PropTypes.func
    }

    render() {
        const {startTimer, stopTimer, resetTimer, timer} = this.props;
        const {increaseCounter, decreaseCounter, counter} = this.props;

        return (
            <div>
                <TimerContainer
                    onStart = {startTimer}
                    onStop  = {stopTimer}
                    onReset = {resetTimer}
                    timer   = {timer} 
                />

                <CounterContainer
                    onAdd      = {increaseCounter}
                    onSubtract = {decreaseCounter}
                    counter    = {counter}
                />
                
                <button onClick={() => this.props.increaseCounter()}>+</button>
                <button onClick={() => this.props.decreaseCounter()}>-</button>
                <h2>counter: {this.props.counter}</h2>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            timer:   state.timer,
            counter: state.counter
        };
    },
    dispatcher => {
        console.log(dispatcher);
        return {
            startTimer: () => {dispatcher(oliApp.actions.startTimer()) },
            stopTimer:  () => {dispatcher(oliApp.actions.stopTimer()) },
            resetTimer:  () => {dispatcher(oliApp.actions.resetTimer()) },
            increaseCounter: (value) => {dispatcher(oliApp.actions.increaseCounter(value)) },
            decreaseCounter: (value) => {dispatcher(oliApp.actions.decreaseCounter(value)) },
        };
    }
)(Home);