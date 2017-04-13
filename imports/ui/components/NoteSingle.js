import React, { Component } from 'react'

import { Notes } from '../../api/notes';

export default class NoteSingle extends Component {
  deleteNote() {
    Meteor.call('deleteResolution', this.props.note);
  }

  render() {
    return (
      <ul className="col s12 row container fade-note-single">
        <li className="col s2">{this.props.note.name}</li>
        <li className="col s2">{this.props.note.surname}</li>
        <li className="col s2">{this.props.note.date}</li>
        <li className="col s1">{this.props.note.mark1}</li>
        <li className="col s1">{this.props.note.mark2}</li>
        <li className="col s1">{this.props.note.mark3}</li>
        <li className="col s1">{this.props.note.mark4}</li>
        <li className="col s1">{this.props.note.averageMark}</li>
      <button className="col s1 waves-effect waves-light btn submit-button"
        onClick={this.deleteNote.bind(this)}>
        &times;
      </button>
    </ul>
    )
  }
}

// NoteSingle.propTypes = {
  // note: React.PropTypes.object,
// };
