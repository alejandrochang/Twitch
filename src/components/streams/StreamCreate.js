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

  render() {
    return (
      <form className="ui form">
        <Field name="Title" component={this.renderInput} label="Enter a Title:"/>
        <Field name="Description" component={this.renderInput} label="Enter a Description:"/>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);

// through this form we get access to a ton of props, see them my console.log(this.props)
