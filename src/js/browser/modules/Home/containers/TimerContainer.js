import React from 'react';
import Timer from '../components/Timer';

export default class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.updateTimer = this.updateTimer.bind(this);

        this.state = {
            elapsedTime:  null,
            timerRunning: false,
            addValue:     1
        }
    }

    updateTimer() {
        const timer       = this.props.timer;
        const newTime     = oliApp.utils.time.getTimeDiff(timer.startedAt, timer.stoppedAt);
        const elapsedTime = oliApp.utils.time.getTimeString(newTime);
        const running     = this.state.timerRunning;

        this.setState({
            elapsedTime: running ? elapsedTime : this.state.elapsedTime
        }, () => running && requestAnimationFrame(this.updateTimer));
    }

    componentWillReceiveProps({ timer }) {
        var currentTimer = this.props.timer;
        var newTimer     = timer;
        if((newTimer.stoppedAt !== currentTimer.stoppedAt) || (newTimer.startedAt !== currentTimer.startedAt)) {
            const isStarted = (newTimer.startedAt > currentTimer.startedAt);
            const isReset   = (newTimer.startedAt === null) &&
                              (newTimer.stoppedAt === null);

            isStarted ?
                this.setState({timerRunning: true}, this.updateTimer) :
                this.setState({
                    timerRunning: false,
                    elapsedTime:  isReset ? null : this.state.elapsedTime
                });
        }
    }

    render() {
        const { timerRunning, elapsedTime } = this.state;
        const { onStart, onStop, onReset }  = this.props;

        return (  
            <Timer 
                running = {timerRunning}
                value   = {elapsedTime}
                onStart = {onStart}
                onStop  = {onStop}
                onReset = {onReset}
            />
        );
    }
}