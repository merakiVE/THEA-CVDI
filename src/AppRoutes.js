import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

//Components
import App from './App';
import Index from './views/Index/Index.js';
import Home from './views/Home/Home.js';
import Login from './views/Login/Login.js';
import Register from './views/Register/Register.js';

const history = createBrowserHistory();

export default class AppRoutes extends Component{

	render(){
		return(
			<App>
				<Router history={history}>
					<Switch>
						<Route exact path='/' name="Index" component={Index}/>
						<Route exact path='/login' name="Home" component={Login}/>
						<Route exact path='/register' name="Home" component={Register}/>
						<Route path='/home' name="Home" component={Home}/>
					</Switch>
				</Router>
			</App>

		);
	}
}
