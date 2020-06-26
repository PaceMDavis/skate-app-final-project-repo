import React from 'react'
import vectorImg from '../images/vectorImg.png'


class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }


  render() {
    return (
      <div class="login-div">
        <div class="overlay">
          <div id='img-holder'>
            <img src={vectorImg} />
          </div>
          <form class='login-form'>
            <input 
            class ='input'
            label="username"
            name="username"
            required-id="standard-required"
            placeholder="Username"
            />
            <input 
            class ='input'
            label="password"
            type='password'
            name='password'
            required-id="standard-password-input"
            placeholder="Password"
            />
              <div id="lower">
                <p id="signup-p">Not a member?
                  <span>Sign up!</span>
                </p>
                <button type="submit" id="button-login">Login</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm