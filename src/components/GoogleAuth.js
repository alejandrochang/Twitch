import React, { Component } from 'react';

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          "556438448285-l6ajm6f8crg4qa9tlac6c8i2t8guppki.apps.googleusercontent.com",
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;