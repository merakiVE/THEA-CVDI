import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

//Internationalization
import { LocaleProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

class App extends Component {
  	render() {
	    return (
	       <LocaleProvider locale={esES}>
	        	{this.props.children}
	      	</LocaleProvider>
	    );
  	}
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
