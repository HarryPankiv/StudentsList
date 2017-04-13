import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class AccountsForm extends React.Component {
  userLogin(event) {
    event.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword(email, password, (error) => {
      if(!error) {
        browserHistory.push("/home");
      } else {
        alert("Check if your email is correct or try to reenter your password!");
      }
    })
  }

  redirectOnRegister() {
    browserHistory.push('/register');
  }

  render() {
    return (
      <div>
      <h2 className="center-align">Log in</h2>
      <form className="col s6 offset-s3 container row" onSubmit={this.userLogin.bind(this)}>
        <input className="col s12"
               type='email'
               ref='email'
               placeholder='Email'
               required
          /*value={this.props.value.email}*/ />
        <input className="col s12"
               type='password'
               ref='password'
               placeholder='Password'
               pattern=".{6,}"
               required title="6 characters minimum"
               required
          /*value={this.props.value.password}*/ />
        <button type="button"
                className="col s12 waves-effect waves-light btn submit-button btn-login"
                onClick={this.redirectOnRegister.bind(this)}>
                Don't have an account?
        </button>
        <input className="center-align col s12 waves-effect waves-light btn submit-button btn-login"
               type="submit"
               value="submit"/>
      </form>
      </div>
    )
  }
}
