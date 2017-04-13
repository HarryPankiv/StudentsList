import React from 'react';

export default class NotesForm extends React.Component {
  constructor() {
    super();

    // this.state = {value: ''};
  }


  addNote(event) {
    event.preventDefault();
    let name = this.refs.name.value.trim();
    let surname = this.refs.surname.value.trim();
    let date = this.refs.date.value.trim();
    let mark1 = this.refs.mark1.value.trim();
    let mark2 = this.refs.mark2.value.trim();
    let mark3 = this.refs.mark3.value.trim();
    let mark4 = this.refs.mark4.value.trim();
    Meteor.call("addNote", name, surname, date, mark1, mark2, mark3, mark4);
    this.refs.name.value = "";
    this.refs.surname.value = "";
    this.refs.date.value = "";
    this.refs.mark1.value = "";
    this.refs.mark2.value = "";
    this.refs.mark3.value = "";
    this.refs.mark4.value = "";
  }

  componentDidMount() {
    dateInput.addEventListener('keydown', function(event) {
    if (event.keyIdentifier == "Down") {
        event.preventDefault()
    }
    }, false);
  }

  handleChange(event) {
    if(event.length>1) {
      event.target.value.length = 1;
      this.setState({value: event.target.value});
    }
  }


  render() {
    return (
      <form className="row container center-align" onSubmit={this.addNote.bind(this)}>
        <input className="col s2"
               type="text"
               ref="name"
               placeholder="Name"
               maxLength="10"
               pattern=".{a-zA-Z}"
               required/>

        <input className="col s2"
               type="text"
               ref="surname"
               placeholder="Surname"
               maxLength="10"
               required/>

        <input className="col s2 datepicker unstyled"
               id="dateInput"
               type="date"
               ref="date"
               min="1995-01-01"
               max="2001-01-01"
               required/>

        <input className="col s1 input-field"
               type="number"
               ref="mark1"
               min="1" max="5"
               placeholder="1"
               pattern=".{1,5}"
               maxLength="1"
              //  value={this.state.value}
              //  onInput={this.handleChange.bind(this)}
               required />

        <input className="col s1 input-field"
               type="number"
               ref="mark2"
               min="1" max="5"
               placeholder="2"
               pattern=".{1,5}"
               maxLength="1"
              //  value={this.state.value}
              //  onInput={this.handleChange.bind(this)}
               required />

        <input className="col s1 input-field"
               type="number"
               ref="mark3"
               min="1" max="5"
               placeholder="3"
               pattern=".{1,5}"
               maxLength="1"
              //  value={this.state.value}
              //  onInput={this.handleChange.bind(this)}
               required />

        <input className="col s1 input-field"
               type="number"
               ref="mark4"
               min="1" max="5"
               placeholder="4"
               pattern=".{1,5}"
               maxLength="1"
              //  value={this.state.value}
              //  onInput={this.handleChange.bind(this)}
               required />

             <input className="col offset-s1 s1 waves-effect waves-light btn submit-button"
               type="submit"
               value="+" />
      </form>
    )
  }
}
