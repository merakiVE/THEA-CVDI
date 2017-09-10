//Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Ant Disign
import Button from 'antd/lib/button';

class Index extends Component {
  	render() {
	    return (
	      	<div className="">
	      		PAGINA PRINCIPAL
	      		<br/>
	      		<br/>
		      	<Link to="/home">
		      		<Button type="primary">Home</Button>
		      	</Link>

		      	<Link to="/login">
		      		<Button type="primary">Login</Button>
				</Link>

		      	<Link to="/register">
		      		<Button type="primary">Register</Button>
		      	</Link>
	      	</div>
	    );
  	}
}


export default Index;
