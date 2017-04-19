import React from 'react';
import { browserHistory } from 'react-router';

export default class InstructionsUa extends React.Component {
  redirectOnHome() {
    browserHistory.push("/home");
  }

  loginStatus() {
    if(Meteor.userId()){
      return "Go home";
    } else {
      return "Ready to login?";
    }
  }

  render() {
    return (
    <div>
      <ol>
        <li>Сайт був розроблений використовуючи насупне:
          <ol>
            <li>ReactJS</li>
            <li>MeteorJS</li>
            <li>Materialize</li>
            <li>HTML5 & CSS3</li>
            <li>React Router</li>
          </ol>
          Як середовище розробки був використаний Atom Text Editor
          <p>Для коректної роботи сайту потрібно мати одне з наступого:</p>
          <ol>
            <li>Google Chrome 43.0 або наступні версії</li>
            <li>Safari 9.0 або наступні версії</li>
            <li>Opera 15.0 або наступні версії</li>
            <li>Mozilla Firefox 22.0 або наступні версії</li>
            <li>Internet Explorer 10.0 або наступні версії</li>
          </ol>
          Для коректної роботи потрібно мати наступні файли:
          <ol>
            <li>Папку client, яка містить:
              <ol>
                <li>main.css</li>
                <li>main.html</li>
                <li>main.js</li>
              </ol>
            </li>
            <li>Папку Imports, яка містить:
              <ol>
                <li>Папку api, яка містить:
                  <ul>
                    <li>notes.js</li>
                  </ul>
                </li>
                <li>Папку ui, яка містить:
                  <ol>
                    <li>Папку components, яка містить:
                      <ol>
                        <li>Footer.js</li>
                        <li>Header.js</li>
                        <li>Navbar.js</li>
                        <li>NavbarNotLogged.js</li>
                        <li>NotesForm.js</li>
                        <li>NoteSingle.js</li>
                      </ol>
                    </li>
                    <li>Папку pages, яка містить:
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
          Вам потрібно встановити наступне:
          <ol>
            <li>Скачати та встановити MeteorJS використовуючи <a href="https://www.meteor.com/install" target="_blank">це посилання</a></li>
            <li>Відкрити Командний рядок в папці з проектом, ви можете це зробити використовуючи кнопку Shift і нажимаючи ліву кнопку миші, далі шукайте опцію "Відкрити командний рядок тут"</li>
            <li>У Командний рядок введіть "meteor npm install react react-dom react-router"</li>
            <li>У Командний рядок введіть "meteor add accounts-password@1.3.4 meteortoys:allthings ultimatejs:tracker-react check useraccounts:materialize fourseven:scss materialize:materialize"</li>
            <li>У Командний рядок введіть "meteor"</li>
            <li>У вашому браузері відкрити <a href="http://localhost:3000/home" target="_blank">це посилання</a></li>
          </ol>
          Після 5того пункту на вашому компютері буде запущений локальний сервер, тому впевніться, що Командний рядок відкритий
        </li>
        <li>
          Ніяких спеціальних налаштувань не потрібно
        </li>
        <li>
          Для використання сайту необхідно:
          <ol>
            <li>Створити акаунт</li>
            <li>Увійти у систему</li>
          </ol>
        </li>
        <li>
          Можливі помилки:
          <ol>
            <li>Якщо ви не можете зареєструватись, перевірте чи електронна пошта вже використана та спробуйте заново ввести паролі</li>
            <li>Якщо ви не можете увійти, перевірте чи електронна пошта введена вірно та спробуйте переввести пароль</li>
          </ol>
        </li>
      </ol>
      <button className="btn center-align" type="button" onClick={this.redirectOnHome.bind(this)}>
        {this.loginStatus()}
      </button>
    </div>
  )
  }
}
