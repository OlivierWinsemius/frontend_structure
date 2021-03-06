import React     from 'react';
import PropTypes from 'prop-types';
import Counter   from '../components/Counter';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onAddValueChanged = this.onAddValueChanged.bind(this);
        this.state = { inputValue: 1 }
    }

    onAddValueChanged(event) {
        const numeric  = /^\d+$/;
        const newValue = event.target.value;
        numeric.test(newValue) && this.setState({inputValue: parseInt(newValue)});
    }

    render() {
        const { inputValue }                 = this.state;
        const { counter, onAdd, onSubtract } = this.props;

        return (  
            <Counter 
                value      = {counter}
                inputValue = {inputValue}

                onChange   = {this.onAddValueChanged}
                onAdd      = {() => onAdd(inputValue)}
                onSubtract = {() => onSubtract(inputValue)}
            />
        );
    }
}

CounterContainer.propTypes = {
    counter:    PropTypes.number.isRequired,
    onAdd:      PropTypes.func.isRequired,
    onSubtract: PropTypes.func.isRequired
};

export default CounterContainer;