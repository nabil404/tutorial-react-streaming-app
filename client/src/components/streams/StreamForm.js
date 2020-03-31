import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const StreamForm = props => {
  return (
    <Formik
      initialValues={{
        title: `${props.initialValues ? props.initialValues.title : ""}`,
        description: `${props.initialValues ? props.initialValues.title : ""}`
      }}
      onSubmit={values => {
        props.onSubmit(values);
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

export default StreamForm; //Second argument is action
