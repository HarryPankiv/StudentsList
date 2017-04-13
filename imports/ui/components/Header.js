import React from 'react';
import { Link, browserHistory } from "react-router";
import { Accounts } from 'meteor/accounts-base';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Navbar from './Navbar';
import NavbarNotLogged from './NavbarNotLogged'

export default class Header extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      // subsriptions: {
      //   userId: Meteor.subscribe('getUserId')
      // },
      userId: Meteor.userId()
    }
  }

  componentWillMount() {
    Tracker.autorun(() => {
      this.setState({
        userId: Meteor.userId()
      });
    });
  }

  // componentWillUnmount() {
  //   this.state.subsriptions.userId.stop();
  // }

  render() {
      if (this.state.userId) {
        return (
          <div>
            <Navbar />
          </div>
        );
      } else {
        return (
          <div>
            <NavbarNotLogged />
          </div>
        );
      }
    }
}
