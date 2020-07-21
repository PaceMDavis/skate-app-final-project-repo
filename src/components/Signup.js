import React from 'react'
import vectorImg from '../images/vectorImg.png'

class Signup extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    email: '',
    password: ''
  }


  render() {
    return (
      <div class="signup-div">
        <div class="overlay">
        <div id='img-holder'>
            <img src={vectorImg} />
          </div>
          <form class="signup-form">
            <input
            class = 'input'
            label = 'firstName'
            name= "firstName"
            required-id='standard-required'
            placeholder="First Name"
            />
            <input
            class = 'input'
            label = 'lastName'
            name= "lastName"
            required-id='standard-required'
            placeholder="Last Name"
            />
            <input
            class = 'input'
            label = 'userName'
            name= "userName"
            required-id='standard-required'
            placeholder="Username"
            />
            <input
            class = 'input'
            label = 'city'
            name= "city"
            required-id='standard-required'
            placeholder="City"
            />
            <input
            class = 'input'
            label = 'state'
            name= "state"
            required-id='standard-required'
            placeholder="State"
            />
            <input
            class = 'input'
            label = 'email'
            name= "email"
            required-id='standard-required'
            placeholder="Email"
            />
            <input
            class = 'input'
            label = 'password'
            name= "password"
            required-id='standard-required'
            placeholder="Password"
            />
            <div id="lower">
              <button type="submit" id="button-login">Signup!</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Signup