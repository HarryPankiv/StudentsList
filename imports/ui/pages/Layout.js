import React from 'react';
import { browserHistory } from 'react-router';

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
  componentWillMount() {
    if(!Meteor.userId()) {
      browserHistory.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Header />
      <div id="content">
        {this.props.children}
      </div>
        <Footer />
      </div>
    )
  }
}
