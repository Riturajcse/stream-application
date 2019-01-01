import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStream ,editStream } from "./../../actions/index.js";
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
    componentDidMount(){
        // console.log("this props",this.props);
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log("form values",formValues);
        this.props.editStream(this.props.match.params.id,formValues);
    }
    render(){
        console.log("props",this.props);
        if(!this.props.stream){
            return <div>...loading</div>
        }
        return (
            <div>
                <h3>edit a stream</h3>
                <StreamForm 
                initialValues={_.pick(this.props.stream,'title','description')}
                onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    // console.log("own props",ownProps);
    return {
        stream:state.streams[ownProps.match.params.id],
    }
}

export default connect(mapStateToProps,
    { fetchStream, editStream})(StreamEdit);