import React from 'react';
import { NavLink } from 'react-router-dom';
import { linkStyle } from '../AppBar.styled'
import { Nav } from 'react-bootstrap';


export default function LogOutMenu() {
  return (
    <Nav className="me-auto">
    <NavLink style={linkStyle}
      to="/register"
        exact>
        Registration
      </NavLink>
      <NavLink style={linkStyle}
        to="/login" exact>
        Login
      </NavLink>
    </Nav>
  );
}