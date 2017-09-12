//Dependencies
import React, {Component} from 'react';

//NProgress
import NProgress from 'nprogress'

class NewProcedure extends Component {
    componentDidMount(){

        NProgress.done()

        // setTimeout(() => {
        //     NProgress.done()
        // }, 500);
        
    }

    render() {
        return (
            <div>
                New Procedure
            </div>
        );
    }
}

export default NewProcedure;
