import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Components
import App from './App';
import Home from './views/Home/Home.js';
import Dashboard from './views/Dashboard/Dashboard.js';

const history = createBrowserHistory();

export default class AppRoutes extends Component {

    render() {
        return (
            <App>
                <HashRouter history={history}>
                    <Switch>
                        <Route path='/dashboard' name="Dashboard" component={Dashboard}/>
                        <Route path='/' name="Home" component={Home}/>
                    </Switch>
                </HashRouter>
            </App>

        );
    }
}
