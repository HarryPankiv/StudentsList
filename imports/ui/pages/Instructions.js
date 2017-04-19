import React from 'react';
import { browserHistory } from 'react-router';

import InstructionsUa from '../components/InstructionsUa';
import InstructionsEn from '../components/InstructionsEn';


export default class Instructions extends React.Component {
  constructor() {
    super();

    this.state = { "language" : true }
  }

  instructionsUa() {
    this.setState({"language" : true});
  }

  instructionsEn() {
    this.setState({"language" : false});
  }

  render() {
    let language = this.state.language ? <InstructionsUa /> : <InstructionsEn />;
    return (
      <div className="footer-bottom">
        <h2 className="center-align">Instructions</h2>
        <div className="row">
          <button className="col s3 offset-s2 btn center-align button-margin" type="button" onClick={this.instructionsUa.bind(this)}>Ukrainian</button>
          <button className="col s3 offset-s6 btn center-align button-margin" type="button" onClick={this.instructionsEn.bind(this)}>English</button>
        </div>
        {language}
      </div>
    )
  }
}
