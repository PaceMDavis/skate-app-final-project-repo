export const addSpot = (spot) => {
  return {
    type: 'ADD_SPOT',
    value: spot
  }
}

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    value: user
  }
}

export const login = (user) => {
  return {
    type: 'LOGIN',
    value: user
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
    type: 'GETS_USER_INFO',
    value: name
  }
}


// export const getsUserInfo = user_id => {
//   return async dispatch => {
//     try {
//       let response = await axios.get(`/users/${user_id}`)
//       let info = response.data;
//       dispatch({type: 'GETS_USER_INFO', payload: info})
//     } catch(err) { alert (err)}
//   }
// }


export const addMapLocations = (location) => {
  return {
    type: 'ADD_MAPLOCATIONS',
    value: location
  }
}