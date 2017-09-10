import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Components
import App from './App';
import Index from './views/Index/Index.js';
import Home from './views/Home/Home.js';

const history = createBrowserHistory();

export default class AppRoutes extends Component{

	render(){
		return(
			<App>
				<HashRouter history={history}>
					<Switch>
						<Route exact path='/' name="Index" component={Index}/>
						<Route exact path='/home' name="Home" component={Home}/>
					</Switch>
				</HashRouter>
			</App>

		);
	}
}