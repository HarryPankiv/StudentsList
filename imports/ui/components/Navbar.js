import React from 'react';
import {Link, browserHistory} from "react-router";
import { Tracker } from 'meteor/tracker'

export default class Navbar extends React.Component {
  logout(event){
    event.preventDefault();
    Meteor.logout(() => {
      browserHistory.push('/login');
    });
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          <ul>
            <li className="col s2 nav-item">
                <Link to="/home">Home</Link>
            </li>
            <li className="col s2 nav-item">
                <Link to="/filtered-list">Filtered List</Link>
            </li>
            <li className="col s2 nav-item">
                <Link to="/instructions">Instructions</Link>
            </li>
            <li className="col s2 nav-item right">
            </li>
            <li className="col s2 nav-item right">
                <Link to="/login" onClick={this.logout.bind(this)}>Sign Out</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
