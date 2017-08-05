import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <ul className="NavBar">
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/vip'>VIP</NavLink></li>
      {props.currentUser
        ? (
          <div>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
          </div>
        )
        : (
          <div>
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
          </div>
        )
      }
    </ul>
  )
}

export default NavBar
