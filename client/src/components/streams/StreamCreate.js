import React from "react";
import { connect } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { createStream } from "../../actions";

const StreamCreate = props => {
  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      onSubmit={values => {
        props.create(values);
      }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = "You must provide a title";
        }
        if (!values.description) {
          errors.description = "You must provide a description";
        }
        return errors;
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="ui form">
            <div className="field">
              <label>Title</label>
              <Field type="text" name="title" placeholder="Title" />
              <ErrorMessage
                name="title"
                component="div"
                className="ui red message"
              />
            </div>
            <div className="field">
              <label>Description</label>
              <Field type="text" name="description" placeholder="Description" />
              <ErrorMessage
                name="description"
                component="div"
                className="ui red message"
              />
            </div>
            <button className="ui button primary" type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default connect(null, { create: createStream })(StreamCreate); //Second argument is action
