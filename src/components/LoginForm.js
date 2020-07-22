import React from 'react'
import vectorImg from '../images/vectorImg.png'


class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (event) => {
    const state = {...this.state}
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  login = (event) => {
    event.preventDefault()
    document.cookie = "loggedIn=true;max-age=10000*1000"
    this.props.login(true)
    this.props.user(this.state.username)
    this.props.history.replace('/home')
  }

  render() {
    console.log(this.state)
    return (
      <div class="login-div">
        <div class="overlay">
          <div id='img-holder'>
            <img src={vectorImg} />
          </div>
          <form onSubmit={this.login}
          class='login-form'>
            <input 
            class ='input'
            label="username"
            name="username"
            required-id="standard-required"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleTextChange}
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