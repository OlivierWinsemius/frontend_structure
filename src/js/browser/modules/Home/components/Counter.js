import React from 'react';

export default class Timer extends React.Component {
    render() {
        const { value, onAdd, onSubtract } = this.props;

        return (
            <div>
                <button onClick = {onSubtract}>
                    -
                </button>
                
                <button onClick  = {onAdd}>
                    +
                </button>
                
                <h2>Counter: {value}</h2>
            </div>
        );
    }
}