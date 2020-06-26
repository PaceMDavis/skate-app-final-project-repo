import { combineReducers } from 'redux'

const spots = (state=[], action) => {
  switch(action.type) {
    case 'ADD_SPOT':
      return [...state, action.value]
    default:
      return state;
  }
}

const user = (state = null, action) => {
  switch(action.type) {
    case 'USER_INFO' :
      return action.value
    default:
      return state
  }
}

const isLoggedIn = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_LOGIN' :
      return true
    case 'TOGGLE_LOGOUT' :
      return false
    default:
      return state
  }
}

const mapLocations = (state= [], action) => {
  switch(action.type) {
    case 'ADD_MAPLOCATIONS':
      return action.value
    default:
      return state
  }
}

export default combineReducers ({spots, isLoggedIn, user, mapLocations})