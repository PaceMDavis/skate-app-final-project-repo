import React from 'react'
import {Container} from '@material-ui/core'
import Navigation from '../containers/Navigation'
import Map from './Map'



const SpotDetail = (props) => {
  const id = props.match.params.id
  // const convert = Object.values(props.spots)
  const info = props.spots.find(c => c.spot_id == id)
  console.log(props.spots, id, "woah", info)

  return (
    <div>
      <Navigation />
      <div className="detail-control">
        <div className = 'card' >
          <img src={info.photo_1}></img>
          <h2>{info.spot_name}</h2>
          <h4>{info.spot_address}</h4>
        </div>
        <Map address={info.spot_address}
        />
      </div>
    </div>
  )
}

export default SpotDetail