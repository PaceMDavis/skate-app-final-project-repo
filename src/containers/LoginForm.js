import { connect } from 'react-redux'
import {login, user} from '../redux/actions'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (bool) => dispatch(login(bool)),
    user: (username) => dispatch(user(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)