import React from 'react'
import {Container} from '@material-ui/core'
import Navigation from '../containers/Navigation'
import Map from './Map'

const SpotDetail = (props) => {
  const id = props.match.params.id
  
  const info = props.spots.find(c => c.id == id)
  console.log(props.spots, id, "woah")

  return (
    <div>
      <Navigation />
      <Container>
        <h2>{info.Name}</h2>
        <h4>{info.Address}</h4>
      </Container>
      <Map address={info.Address}/>
    </div>
  )
}

export default SpotDetail