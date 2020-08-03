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
        }
      )
  }

  render() {
    console.log(this.state.spots)
    return (
      <div>
        <Navigation />
        {this.state.spots.map((spot, idx) => (
          <div className = 'card'>
            <h1>{spot.spot_address}</h1>
          </div>
        ))}
      </div>
      
    )
  }
}


export default Home