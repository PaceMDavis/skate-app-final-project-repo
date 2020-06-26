export const addSpot = (spot) => {
  return {
    type: 'ADD_SPOT',
    value: spot
  }
}

export const login = (bool) => {
  return {
    type: 'TOGGLE_LOGIN',
    value: bool
  }
}

export const logout = (bool) => {
  return {
    type: 'TOGGLE_LOGOUT',
    value: bool
  }
}

export const user = (name) => {
  return {
    type: 'USER_INFO',
    value: name
  }
}

export const addMapLocations = (location) => {
  return {
    type: 'ADD_MAPLOCATIONS',
    value: location
  }
}