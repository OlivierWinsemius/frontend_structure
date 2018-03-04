import { connect }      from 'react-redux';
import React            from 'react';

class HomeContainer extends React.Component {
    render() {
        return (
            <div className = "Home">
            </div>
        );
    }
}

export default connect(
    state => {
        return {};
    },
    dispatcher => {
        return {};
    }
)(HomeContainer);