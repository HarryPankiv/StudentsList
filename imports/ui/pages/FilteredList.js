import { Meteor } from 'meteor/meteor'
import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { browserHistory } from 'react-router';

import { Notes } from '../../api/notes';

import NoteSingle from '../components/NoteSingle';

export default class FilteredList extends TrackerReact(React.Component) {
  constructor() {
    super();

      this.state = {
        subscription: {
          notes: Meteor.subscribe('usersNotes')
        }
      };
  }

  componentWillMount() {
    if(!Meteor.userId()) {
      browserHistory.push('/login');
    }
  }

  componentWillUnmount() {
    this.state.subscription.notes.stop();
  }

  notes() {
    return Notes.find({$or :[{ mark1: {$ne: "3"}, mark3: {$ne: "3"} }]}).fetch();
  }

  render() {
    return (
      <div className="flex-container">
        <h2 className="center-align flex-item">Students without 3 in 1st and 3rd exam</h2>
        <ul className="row container flex-item">
          <li className="col s2 flex-item">Name</li>
          <li className="col s2 flex-item">Surname</li>
          <li className="col s2 flex-item">Date</li>
          <li className="col s1 flex-item">Mark1</li>
          <li className="col s1 flex-item">Mark2</li>
          <li className="col s1 flex-item">Mark3</li>
          <li className="col s1 flex-item">Mark4</li>
          <li className="col s1 flex-item">Average</li>
        </ul>
        {this.notes().map((note) => {
          return <NoteSingle className="flex-item" key={note._id} note={note} />
        })}
        {this.props.notes}
      </div>
    )
  }
}
