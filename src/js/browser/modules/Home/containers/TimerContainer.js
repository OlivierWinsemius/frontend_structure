import React     from 'react';
import PropTypes from 'prop-types'

import Timer from '../components/Timer';

class TimerContainer extends React.Component {
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
        if(!this.state.timerRunning) { return; }
        const timer       = this.props.timer;
        const newTime     = oliApp.utils.time.getTimeDiff(timer.startedAt, timer.stoppedAt);
        const elapsedTime = oliApp.utils.time.getTimeString(newTime);
        this.setState({
            elapsedTime
        }, () => requestAnimationFrame(this.updateTimer));
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

TimerContainer.propTypes = {
    timer:   PropTypes.object.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop:  PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default TimerContainer;