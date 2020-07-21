import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Signup from './components/Signup'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies['loggedIn'] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
    render = {(props) => checkAuth() === true
      ? <Component {...props} />
      : <Redirect to ={{pathname: '/', state: {from:props.location}}} />}
    />
  )
}


const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component = {Signup} />
      {/* <ProtectedRoute path='/home' component ={Home} /> */}
    </Switch>
  );
};


export default Router