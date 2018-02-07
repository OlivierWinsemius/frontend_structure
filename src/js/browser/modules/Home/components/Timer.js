import React from 'react';

export default class Timer extends React.Component {
    render() {
        const { running, value }            = this.props;
        const {  onStop, onStart, onReset } = this.props;

        return (
            <div>
                <button 
                    disabled = {running}
                    onClick = {onStart}>
                    START
                </button>
                
                <button
                    disabled = {!running}
                    onClick  = {onStop}>
                    STOP
                </button>
                
                <button
                    disabled = {!value}
                    onClick  = { onReset }>
                    RESET
                </button>
                
                <h2>timer: {value || '00:00'}</h2>
            </div>
        );
    }
}