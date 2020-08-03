import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user.info,
    spots: state.spots.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // login: (bool) => dispatch(login(bool)),
    // user: (name) => dispatch(user(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)