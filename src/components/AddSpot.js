import React from 'react'
import Navigation from '../containers/Navigation'


class AddSpot extends React.Component {
  state = {
    spots: this.props.spots,
    spot_name: '',
    spot_address: '',
    photo_1: ''
  }

  handleTextChange = (event) => {
    const newState = {...this.state}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const spotTotal = this.props.businesses.length
    const payload = {...this.state}
    payload.id = spotTotal + 1
    console.log('The spot', payload)
    this.props.addSpot(payload)
    this.props.history.push('/home')
  }

}