import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
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

  findOldestStudent() {
    let oldest = [Notes.findOne( {}, { sort: {date:-1}})];
    return oldest;
  }

  findYoungestStudent() {
    let youngest = [Notes.findOne( {}, { sort: {date:1}})];
    return youngest;
  }

  render() {
    return (
      <div className="flex-container">
        <h4 className="center-align flex-item">Students without 3 in 1st and 3rd exam:</h4>
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

        <h4 className="center-align">Youngest student in the list:</h4>
        {this.findYoungestStudent().map( (note) => {
          return <NoteSingle className="flex-item" key={note._id} note={note} />
        })}

        <h4 className="center-align">Oldest student in the list:</h4>
        {this.findOldestStudent().map( (note) => {
          return <NoteSingle className="flex-item" key={note._id} note={note} />
        })}
        {this.props.notes}
      </div>
    )
  }
}
