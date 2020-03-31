import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

import Modal from "../Modal";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() =>
            this.props.currentUserId === this.props.stream.userId
              ? this.props.deleteStream(id)
              : null
          }
          className="ui button red"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderModalContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderModalContent()}
        actions={this.renderActions()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
