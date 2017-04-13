import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <h2 className="center-align">ERROR:404, PAGE NOT FOUND!</h2>
        <Link to="/home">Get back to home page</Link>
      </div>
    )
  }
}
