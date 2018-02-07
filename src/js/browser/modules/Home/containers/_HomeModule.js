import { connect } from 'react-redux';
import React       from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateTimer = this.updateTimer.bind(this);
        this.state = {
            elapsedTime:  '00.00',
            timerRunning: false
        }
    }

    updateTimer(timer) {
        timer = timer || this.props.timer;
        const newTime     = oliApp.utils.time.getTimeDiff(timer.startedAt || 0, timer.stoppedAt);
        const elapsedTime = oliApp.utils.time.getTimeString(newTime);

        this.setState({
            elapsedTime
        }, () => {
            this.state.timerRunning && requestAnimationFrame(() => this.updateTimer())
        });
    }

    componentWillReceiveProps({ timer }) {
        var currentTimer = this.props.timer;
        var newTimer     = timer;
        if((newTimer.stoppedAt !== currentTimer.stoppedAt) || (newTimer.startedAt !== currentTimer.startedAt)) {
            console.log('ypodsfa')
            currentTimer.startedAt === undefined || newTimer.startedAt > currentTimer.startedAt ?
                this.setState({timerRunning: true}, this.updateTimer) :
                this.setState({timerRunning: false});
            newTimer.startedAt === undefined && newTimer.stoppedAt === undefined && this.updateTimer(newTimer);
        }
    }

    render() {
        return (
            <div>
                <button disabled={this.state.timerRunning} onClick={this.props.startTimer}>START</button>
                <button disabled={!this.state.timerRunning} onClick={this.props.stopTimer}>STOP</button>
                <button disabled={this.state.elapsedTime === '00.00'} onClick={this.props.resetTimer}>RESET</button>
                <h2>timer: {this.state.elapsedTime}</h2>
                
                <button onClick={() => this.props.increaseCounter()}>+</button>
                <button onClick={() => this.props.decreaseCounter()}>-</button>
                <h2>counter: {this.props.counter}</h2>
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