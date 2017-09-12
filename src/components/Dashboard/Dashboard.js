//Dependencies
import React, { Component } from 'react';

//NProgress
import NProgress from 'nprogress'

class Dashboard extends Component {

	componentDidMount(){
	    NProgress.done()
	}

  	render() {
	    return (
	        <div>
		        VISTA DASHBOAD    
	        </div>
		
	    );
  	}
}

export default Dashboard;