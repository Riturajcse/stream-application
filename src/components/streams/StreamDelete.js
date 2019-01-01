import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from "../modal.js";
import history from './../../history.js';
import { fetchStream, deleteStream} from './../../actions/index.js';

class StreamDelete extends React.Component {
    componentDidMount(){
          this.props.fetchStream(this.props.match.params.id);
    }
    renderAction = () => {
        const { id } = this.props.match.params;
        return(
                <React.Fragment>
                    <button onClick={() => this.props.deleteStream(id)} className="ui button negative">delete</button>
                    <Link to="/" className="ui button">cancel</Link>
                </React.Fragment>
        );
    }
    renderContent = () => {
        // console.log("this.props.stream",this.props.stream);
        if(!this.props.stream){
            return 'are you sure you want to delete the stream'
        }
        return `are you sure you want to delete the stream with title:${this.props.stream.title}`
    }
    render(){
        return (
            <Modal 
                title="delete stream"     
                description={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push('/')}
            />
        )
    }
};

const mapStateToProps = (state,ownProps) => {
    // console.log("state",state);
    // console.log("own props",ownProps);
    return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);