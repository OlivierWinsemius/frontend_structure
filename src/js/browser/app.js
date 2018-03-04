require('./imports');

import React        from 'react';
import ReactDOM     from 'react-dom';
import Loadable     from 'react-loadable';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Loading = <div>Loading...</div>

const Login = Loadable({
        loader:  () => import('./modules/Login/containers/_LoginContainer'),
        loading: () => Loading
    });

const Home = Loadable({
        loader:  () => import('./modules/Home/containers/_HomeContainer'),
        loading: () => Loading
    });

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component = {Home} />
                    <Route path = '/login' component = {Login} />
                </Switch>
            </BrowserRouter>
        )
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