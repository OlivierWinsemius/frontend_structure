import React from 'react';

export default class Timer extends React.Component {
    render() {
        const { value, inputValue }           = this.props;
        const { onAdd, onSubtract, onChange } = this.props;

        return (
            <div className = "counter">
                <button onClick = {onSubtract}>-</button>
                <button onClick = {onAdd}>+</button>
                <input
                    type     = 'number'
                    value    = {inputValue}
                    onChange = {onChange}
                />
                <h2>Counter: {value}</h2>
            </div>
        );
    }
}