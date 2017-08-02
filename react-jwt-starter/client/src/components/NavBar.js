import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <ul className="NavBar">
    <li><NavLink exact to='/'>Home</NavLink></li>
    <li><NavLink to='/vip'>VIP</NavLink></li>
    <li><NavLink to='/login'>Log In</NavLink></li>
    <li><NavLink to='/signup'>Sign Up</NavLink></li>
    <li><NavLink to='/logout'>Log Out</NavLink></li>
    </ul>
  )
}

export default NavBar
