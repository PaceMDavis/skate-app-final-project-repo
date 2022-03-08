import React from 'react'
import Navigation from '../containers/Navigation'
import {Link} from 'react-router-dom'


class Home extends React.Component {
  state = {
     spots: [],
     isLoaded: false,
     
  }

  componentDidMount() {
    fetch('http://localhost:8080/spots')
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            spots: data
          })
          this.props.spots(data)
        }
        
      )
      
  }

  render() {
    console.log(this.state.spots, this.props.isLoggedIn, document.cookie)
    return (
      <div className = "home-container-div">
        <Navigation />
        <div className="flex-div">
        {this.state.spots.map((spot, idx) => (
          <div className = 'card' key={idx} >
             <Link className="signup-link"  to ={`/info/${spot.spot_id}`}>
            <img src={spot.photo_1} alt="skateboarding"></img>
            <div className="spot-container" >
              <h3>{spot.spot_name}</h3>
              <h4>{spot.spot_address}</h4>
            </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
      
    )
  }
}


export default Home