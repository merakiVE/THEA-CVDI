import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Rutes
import AppRoutes from './AppRoutes';


ReactDOM.render(

	<Router>
		<AppRoutes/>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
