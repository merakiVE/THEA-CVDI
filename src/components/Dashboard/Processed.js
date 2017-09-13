//Dependencies
import React, {Component} from 'react';

//NProgress
import NProgress from 'nprogress'

class Processed extends Component {
    componentDidMount(){
        NProgress.done()
    }

    render() {
        return (
            <div>
                Processed
            </div>
        );
    }
}

export default Processed;
