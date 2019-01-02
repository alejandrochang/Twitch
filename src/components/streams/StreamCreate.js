import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

  renderInput() {
    return <input />
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="Title" component={this.renderInput}/>
        <Field name="Description" component={this.renderInput}/>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);

// through this form we get access to a ton of props, see them my console.log(this.props)