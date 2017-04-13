import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base'

export const Notes = new Mongo.Collection("notes");

Meteor.methods({
  'addNote'(name, surname, date, mark1, mark2, mark3, mark4) {
    check(name, String);
    check(surname, String);
    check(mark1, String);
    check(mark2, String);
    check(mark3, String);
    check(mark4, String);

    let averageMark = (+mark1 + +mark2 + +mark3 + +mark4) / 4;

    Notes.insert({
      name: name,
      surname: surname,
      date: date,
      mark1: mark1,
      mark2: mark2,
      mark3: mark3,
      mark4: mark4,
      averageMark: averageMark,
      createdAt: new Date(),
      userId: Meteor.userId()
    });
  },

  deleteResolution(note) {
    check(note, Object);
    Notes.remove(note._id);
  },

  userCreate(userAccount){
  Accounts.createUser({
    email: userAccount.email,
    password: userAccount.password
  });
  // Meteor.loginWithPassword(userAccount.email, userAccount.password);
  }
})

if (Meteor.isServer) {
  Meteor.publish('usersNotes', function sendUsersNotes() {
    return Notes.find({user: this.userId});
  });

  Meteor.publish('userNotes', function() {
    if (this.userId) {
      return Notes.find({user: this.userId});
    } else {
      return [];
    }
  });

  Meteor.publish('getUserId', function() {
    return this.userId;
  })
}
