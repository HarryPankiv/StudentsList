import React from 'react';
import { browserHistory } from 'react-router';

import LoginForm from '../LoginForm';


export default class Login extends React.Component {
  render() {
    return (
      <div className="footer-bottom">
        <LoginForm />
      </div>
    )
  }
}
