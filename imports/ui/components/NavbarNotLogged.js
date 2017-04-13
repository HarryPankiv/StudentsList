import React from 'react';
import { Link } from 'react-router';

export default class NavbarNotLogged extends React.Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <ul>
          <li className="col s2 nav-item">
            <Link to="/instructions">Instructions</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
