import { connect } from 'react-redux';
import React       from 'react';

function getElapsedTime(startTime, stopTime = new Date().getTime()) {
    return startTime ? ((stopTime - startTime) / 600).toFixed(2) : (0).toFixed(2);
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateTimer = this.updateTimer.bind(this);
        this.state = {
            elapsedTime: 0
        }
    }

    componentDidMount() {
        this.updateTimer()
    }

    updateTimer() {
        const timer = this.props.timer;
        const elapsedTime = getElapsedTime(timer.startedAt, timer.stoppedAt);
        this.setState({
            elapsedTime
        });
        requestAnimationFrame(this.updateTimer);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.startTimer}>START</button>
                <button onClick={this.props.stopTimer}>STOP</button>
                <button onClick={this.props.resetTimer}>RESET</button>
                <h2>timer: {this.state.elapsedTime}</h2>
                
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