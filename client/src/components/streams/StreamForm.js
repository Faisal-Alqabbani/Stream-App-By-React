import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  // this is desructure from meta;
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const classname = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={classname}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    // event.preventDefault(); don't call that anymore with redux-form that will handle it by the way.
    this.props.onSubmit(formValues);
  };
  render() {
    // just do console.log(this.prop) every thing will be clear thow
    return (
      // I have to put in classname error to show any error in the screen
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a Title "
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui inverted button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    // only ran if the user did not enter a title
    error.title = "You must Enter a title";
  }
  if (!formValues.description) {
    error.description = "You must enter a description";
  }

  return error;
};
export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

// export default reduxForm({
//   form: "StreamCreate",
//   validate,
// })(StreamCreate);
