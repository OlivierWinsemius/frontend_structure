import React from 'react';

export default class Timer extends React.Component {
    render() {
        const { value, addValue, onAdd, onSubtract, onChange } = this.props;

        return (
            <div>
                <button onClick = {onSubtract}>
                    -
                </button>
                
                <button onClick  = {onAdd}>
                    +
                </button>

                <input 
                    type     = 'number'
                    value    = {addValue}
                    onChange = {onChange}
                />
                
                <h2>Counter: {value}</h2>
            </div>
        );
    }
}