import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return  (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues); // this is our form value once we click enter
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="Title" component={this.renderInput} label="Enter a Title:"/>
        <Field name="Description" component={this.renderInput} label="Enter a Description:"/>
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);

// through this form we get access to a ton of props, see them my console.log(this.props)
