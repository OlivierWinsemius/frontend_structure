require('./imports');

import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import { Home }     from './modules/modules';

class App extends React.Component {
    render() {
        return <Home />;
    };
};

ReactDOM.render(
    <Provider store={ require('./store/browserStore') }>
        <App />
    </Provider>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept();
}