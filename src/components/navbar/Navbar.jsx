import { NavLink } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <NavLink 
                      className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                      to="/">
                      Home
                  </NavLink>
                  <NavLink 
                      className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                      to="/login">
                      Login
                  </NavLink>
                  <NavLink 
                      className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                      to="/signup">
                      SignIn
                  </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar