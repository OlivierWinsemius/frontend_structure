// Loading style
require('../../styles/browser/main.scss');

// Setting global namespaces
require('../common/utils/oliApp');
require('./browserActions/actionTypes');

// Loading store
require('./browserActions/actionsCombiner');
const store = require('./store/browserStore');

// Rendering App
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

import { Home }     from './modules/modules';
class App extends React.Component {
    render() {
        return <Home />;
    };
};

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// Hot reloading
if(module.hot) {
    module.hot.accept();
}