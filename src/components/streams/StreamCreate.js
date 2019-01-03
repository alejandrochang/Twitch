import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return  (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues); // this is our form value once we click enter
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter a Title:"/>
        <Field name="description" component={this.renderInput} label="Enter a Description:"/>
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate 
})(StreamCreate);

// through this form we get access to a ton of props, see them my console.log(this.props)
// Our errors objects have an identical name to the Fields property name. If they are requested it will show that error message