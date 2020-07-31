import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import LoginForm from './containers/LoginForm'
// import Home from './components/Home'
// import Signup from './components/Signup'
import Map from './components/Map'
import SpotDetail from './components/SpotDetail'

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
      : <Redirect to ={{pathname: '/home', state: {from:props.location}}} />}
    />
  )
}


const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component = {LoginForm} />
      <Route path='/home' component ={Map} />
      <ProtectedRoute path='/info/:id' component ={SpotDetail} />
    </Switch>
  );
};


export default Router