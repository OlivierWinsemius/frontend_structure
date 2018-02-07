import { connect } from 'react-redux';
import React       from 'react';
import Timer       from '../components/Timer';
import Counter    from '../components/Counter';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.updateTimer       = this.updateTimer.bind(this);
        this.onAddValueChanged = this.onAddValueChanged.bind(this);

        this.state = {
            elapsedTime:  null,
            timerRunning: false,
            addValue:     1
        }
    }

    onAddValueChanged(event) {
        const numeric  = /^\d+$/;
        const newValue = event.target.value;
        numeric.test(newValue) && this.setState({addValue: parseInt(newValue)});
    }

    updateTimer(timer) {
        timer             = timer || this.props.timer;
        const newTime     = oliApp.utils.time.getTimeDiff(timer.startedAt, timer.stoppedAt);
        const elapsedTime = oliApp.utils.time.getTimeString(newTime);
        const running     = this.state.timerRunning;

        this.setState({
            elapsedTime: running ? elapsedTime : this.state.elapsedTime
        }, () => running && requestAnimationFrame(() => this.updateTimer()));
    }

    componentWillReceiveProps({ timer }) {
        var currentTimer = this.props.timer;
        var newTimer     = timer;
        if((newTimer.stoppedAt !== currentTimer.stoppedAt) || (newTimer.startedAt !== currentTimer.startedAt)) {
            const isReset   = newTimer.startedAt === undefined && newTimer.stoppedAt === undefined;
            const isStarted = currentTimer.startedAt === undefined || newTimer.startedAt > currentTimer.startedAt;
            isStarted ?
                this.setState({timerRunning: true}, this.updateTimer) :
                this.setState({
                    timerRunning: false,
                    elapsedTime:  isReset ? null : this.state.elapsedTime
                });
        }
    }

    render() {
        const { timerRunning, elapsedTime }                  = this.state;
        const { startTimer, stopTimer, resetTimer }          = this.props;
        
        const { addValue }                                   = this.state;
        const { increaseCounter, decreaseCounter, counter }  = this.props;

        return (
            <div>
                <Timer 
                    running = {timerRunning}
                    onStart = {startTimer}
                    onStop  = {stopTimer}
                    onReset = {resetTimer}
                    value   = {elapsedTime}
                />

                <Counter
                    value      = {counter}
                    addValue   = {addValue}
                    onChange   = {this.onAddValueChanged}
                    onAdd      = {() => increaseCounter(addValue)}
                    onSubtract = {() => decreaseCounter(addValue)}
                />
            </div>
        )
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
)(Home);