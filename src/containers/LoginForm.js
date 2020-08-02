import { connect } from 'react-redux'
import {login, user} from '../redux/actions'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    // user: (name) => dispatch(user(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)