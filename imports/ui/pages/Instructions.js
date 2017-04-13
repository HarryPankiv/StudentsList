import React from 'react';
import { browserHistory } from 'react-router';
export default class Instructions extends React.Component {
  redirectOnLogin() {
    browserHistory.push("/login");
  }
  render() {
    return (
      <div className="footer-bottom">
      <h2 className="center-align">Instructions</h2>
      <ol>
        <li>Website was developed using following:
          <ol>
            <li>ReactJS</li>
            <li>MeteorJS</li>
            <li>Materialize</li>
            <li>HTML5 & CSS3</li>
            <li>React Router</li>
          </ol>
          Atom Text Editor was used as a developing environment.
          <p>For correct work you need to have one of the following:</p>
          <ol>
            <li>Google Chrome 43.0 and later versions</li>
            <li>Safari 9.0 and later versions</li>
            <li>Opera 15.0 and later versions</li>
            <li>Mozilla Firefox 22.0 and later versions</li>
            <li>Internet Explorer 10.0 and later versions</li>
          </ol>
          For correct work you must have these files:
          <ol>
            <li>Folder client, which contains:
              <ol>
                <li>main.css</li>
                <li>main.html</li>
                <li>main.js</li>
              </ol>
            </li>
            <li>Imports folder, which contains:
              <ol>
                <li>api folder, which contains:
                  <ul>
                    <li>notes.js</li>
                  </ul>
                </li>
                <li>ui folder, which contains:
                  <ol>
                    <li>components folder, which contains:
                      <ol>
                        <li>Footer.js</li>
                        <li>Header.js</li>
                        <li>Navbar.js</li>
                        <li>NavbarNotLogged.js</li>
                        <li>NotesForm.js</li>
                        <li>NoteSingle.js</li>
                      </ol>
                    </li>
                    <li>pages folder, which contains:
                      <ol>
                        <li>About.js</li>
                        <li>ErrorPage.js</li>
                        <li>Home.js</li>
                        <li>Instructions.js</li>
                        <li>Layout.js</li>
                        <li>Login.js</li>
                        <li>Register.js</li>
                      </ol>
                    </li>
                    <li>AccountsForm.js</li>
                    <li>index.js</li>
                    <li>LoginForm.js</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          You need to install following:
          <ol>
            <li>Download and install MeteorJS using <a href="https://www.meteor.com/install" target="_blank">this link</a></li>
            <li>Open Command Prompt in folder with the project, you can do it holding Shift and pressing right click on your mouse, then search for an option "Open command window here"</li>
            <li>In Command Prompt type "meteor npm install react react-dom react-router"</li>
            <li>In Command Prompt type "meteor add accounts-password@1.3.4 meteortoys:allthings ultimatejs:tracker-react check useraccounts:materialize fourseven:scss materialize:materialize"</li>
            <li>In Command Prompt type "meteor"</li>
          <li>In your browser open <a href="localhost:3000/home" target="_blank">this link</a></li>
          </ol>
          After 5th node you will have a local server started so be sure your Command Prompt is open
        </li>
        <li>
          No special settings needed
        </li>
        <li>
          To use the program you need :
          <ol>
            <li>Create an account</li>
            <li>Login</li>
            <li>Open home tab</li>
          </ol>
        </li>
        <li>
          Possible errors:
          <ol>
            <li>If you can't create an account check if your email was already used.</li>
            <li>If you can't login, check if your email is correct or try to reenter your password</li>
          </ol>
        </li>
      </ol>
      <button className="col s12 btn center-align" type="button" onClick={this.redirectOnLogin.bind(this)}>
        Ready to login
      </button>
      </div>
    )
  }
}
