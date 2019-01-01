import React from 'react';
import { connect } from 'react-redux';
import { createStream } from './../../actions/index.js';
import StreamForm from './StreamForm.js';

class StreamCreate extends React.Component{
    

    onSubmit = (formValues) => {
        // event.preventDefault();
        // console.log("form values",formValues);
        this.props.createStream(formValues);
    }

    render(){
        // console.log("this props",this.props);
        return (
            // <div>stream create</div>
            <div>
                <h3>cretae a stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null,{createStream:createStream})(StreamCreate);