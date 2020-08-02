import React from 'react'
import vectorImg from '../images/vectorImg.png'
// import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-router-dom'
import getAllUsers from '../Database/controllers/users'




class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    users: [],
    isLoaded: false
  }


  componentDidMount() {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(
        data => {
          this.setState({
            isLoaded: true,
            users: data
          })
        }
      )
  }

  // componentDidMount(prevProps, props) {
  //   // const requestOptions = {
  //   //   method: 'GET',
  //   //   mode: 'cors',
  //   //   headers: { 'Content-Type': 'application/json'     }
  //   // }
  //   // this.props.getAllUsers()
  //   // if(this.props.user.info !== prevProps.user.info) {
  //   //   // fetch('http://localhost:8080/users', requestOptions)
  //   //   //   .then(response => response.json())
  //   //   this.props.getAllUsers()
  //   fetch('http://localhost:8080/users')
  //       .then(response => response.json())
  //       .then(data => this.setState({
  //         user: data.user
  //       }))
  //   // }

  // }
 
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
    console.log(this.props.isLoggedIn, this.state.users, this.state.isLoaded)
    return (
      <div className="login-div">
        <div className="overlay">
          <div id='img-holder'>
            <img src={vectorImg} />
          </div>
          <form onSubmit={this.login}
          className='login-form'>
            <input 
            className ='input'
            label="username"
            name="username"
            required-id="standard-required"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleTextChange}
            />
            <input 
            className ='input'
            label="password"
            type='password'
            name='password'
            required-id="standard-password-input"
            placeholder="Password"
            />
              <div id="lower">
                <p id="signup-p">Not a member?
                  
                    <Link className="signup-link" to ={`/Signup`}>
                    <span>
                    Sign up!
                    </span>
                    </Link>  
                  
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