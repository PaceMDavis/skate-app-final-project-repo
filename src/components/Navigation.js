import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import blackMobileLogo from '../images/blackMobileLogo.png'
import whiteMobileLogo from '../images/whiteMobileLogo.png'
import Menu from './Menu'
import mobileMenuImage from '../images/mobileMenuImage.jpg'


const NavButton = ({onClick}) => 
<div className='nav-container'>
  <div className="mobile-nav-button" onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div id='logo-holder'>
    <img src={whiteMobileLogo}/>
  </div>
</div>


// </button> 

const Dropdown = ({show}) =>
<div  style={{
  visibility: show ? "visible" : "hidden", 
  backgroundImage: `url(${mobileMenuImage})`,
  backgroundSize: 'cover', 
  position: "absolute",
  backgroundPosition: '75% 50%', 
  height: "100%", 
  width: "100%",
  transition: 'margin 1s',
  margin: '0 0 0 -10vh',
  }}>
  <div className="overlay">
    <ul className='navItemsMobile' >  
      <img src={whiteMobileLogo} />
      <li className ="mobileNavList">
        Map
      </li>
      <li className ="mobileNavList">
        Add Spot
      </li>
      <li className ="mobileNavList">
        Logout
      </li>
    </ul>
  </div>
</div>


class Navigation extends React.Component {

  state = {
    dropdownVisible: false,
  }
  

  toggleDropdown = event => {
    this.setState(state => ({
      dropdownVisible: !state.dropdownVisible
    }))
  }

  
 

  render() {
    
    return (
      <div className='mobile-nav-div' >
        <Dropdown show={this.state.dropdownVisible} />
        <NavButton onClick={this.toggleDropdown} />
        {this.props.children}
      </div>

    )
  }
}




export default Navigation