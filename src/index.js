import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Rutes
import AppRoutes from './AppRoutes';


ReactDOM.render(

	<Router>
		<AppRoutes/>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
