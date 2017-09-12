//Dependencies
import React, {Component} from 'react';

//NProgress
import NProgress from 'nprogress'

class Record extends Component {
    componentDidMount(){
        NProgress.done()
    }

    render() {
        return (
            <div>
                Record
            </div>
        );
    }
}

export default Record;
