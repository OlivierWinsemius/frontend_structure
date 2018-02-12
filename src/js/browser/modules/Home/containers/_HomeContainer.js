import { connect }      from 'react-redux';
import React            from 'react';
import TimerContainer   from './TimerContainer';
import CounterContainer from './CounterContainer';

class HomeContainer extends React.Component {
    render() {
        const { startTimer, stopTimer, resetTimer, timer }  = this.props;
        const { increaseCounter, decreaseCounter, counter } = this.props;

        return (
            <div className = "Home">
                <TimerContainer 
                    timer   = {timer}
                    onStart = {startTimer}
                    onStop  = {stopTimer}
                    onReset = {resetTimer}
                />

                <CounterContainer
                    counter    = {counter}
                    onAdd      = {increaseCounter}
                    onSubtract = {decreaseCounter}
                />
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
        return {
            stopTimer:       ()      => dispatcher(oliApp.actions.stopTimer()),
            startTimer:      ()      => dispatcher(oliApp.actions.startTimer()),
            resetTimer:      ()      => dispatcher(oliApp.actions.resetTimer()),
            increaseCounter: (value) => dispatcher(oliApp.actions.increaseCounter(value)),
            decreaseCounter: (value) => dispatcher(oliApp.actions.decreaseCounter(value)),
        };
    }
)(HomeContainer);