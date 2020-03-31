import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = props => {
  const onSubmit = formData => {
    return props.create(formData);
  };

  return (
    <div>
      <h3>Create a stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { create: createStream })(StreamCreate); //Second argument is action
