import React from 'react';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

export default class AccountsForm extends React.Component {
  createUser(event) {
    event.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;
    let userAccount = {
      email: email,
      password: password
    }

    if(password !== confirmPassword) {

    } else {
      Meteor.call('userCreate', userAccount, (error) => {
        if (!error) {
            Meteor.loginWithPassword(userAccount.email, userAccount.password, () => {
            browserHistory.push("/home");
          })
        } else {
          console.log(error.reason);
          alert("Register error\n" + error.reason);
        }
      });
    }
  }

  redirectOnLogin() {
    browserHistory.push('/login');
  }

  render() {
    return (
      <div>
      <h2 className="center-align">Register</h2>
      <form className="col row s6 offset-s3 container" onSubmit={this.createUser.bind(this)}>
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
        <input className="col s12"
               type='password'
               ref='confirmPassword'
               placeholder='Confirm Password'
               pattern=".{6,}"
               required title="6 characters minimum"
               required
            /*value={this.props.value.password}*/ />
        <button className="col s12 waves-effect waves-light btn submit-button btn-login"
                onClick={this.redirectOnLogin.bind(this)}>
                Already have an account?</button>
        <input className="col s12 waves-effect waves-light btn submit-button btn-login"
               type="submit"
               value="submit"/>
      </form>
      </div>
    )
  }
}
