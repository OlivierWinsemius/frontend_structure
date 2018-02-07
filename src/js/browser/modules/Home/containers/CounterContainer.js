import React from 'react';
import Counter from '../components/Counter';

export default class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onAddValueChanged = this.onAddValueChanged.bind(this);

        this.state = { addValue: 1 }
    }

    onAddValueChanged(event) {
        const numeric  = /^\d+$/;
        const newValue = event.target.value;
        numeric.test(newValue) && this.setState({addValue: parseInt(newValue)});
    }

    render() {
        const { addValue }                   = this.state;
        const { counter, onAdd, onSubtract } = this.props;

        return (  
            <Counter 
                value      = {counter}
                addValue   = {addValue}
                onChange   = {this.onAddValueChanged}
                onAdd      = {() => onAdd(addValue)}
                onSubtract = {() => onSubtract(addValue)}
            />
        );
    }
}