import { connect } from 'react-redux'
import Spots from '../components/Spots'


const mapStateToProps = (state) => {
  return {
    spots: state.spots,
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    mapLocations: state.mapLocations
  }
}

export default connect(mapStateToProps)(Spots)