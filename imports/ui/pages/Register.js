import React from 'react';
import { browserHistory } from 'react-router';

import AccountsForm from '../AccountsForm';

export default class Register extends React.Component {
  componentWillMount() {
    if(Meteor.userId()) {
      browserHistory.push('/home');
    }
  }
  
  render() {
    return (
      <div className="footer-bottom">
        <AccountsForm />
      </div>
    )
  }
}
