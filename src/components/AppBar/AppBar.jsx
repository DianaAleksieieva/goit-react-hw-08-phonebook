import React from 'react'
import { useSelector } from 'react-redux';
// import { WrapContainer } from './AppBar.styled.jsx';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import LogOutMenu from './LogOutMenu/LogOutMenu.jsx';
import LogInMenu from './LogInMenu/LogInMenu.jsx';
import { Navbar, Container } from 'react-bootstrap';
import {linkStyle} from './AppBar.styled'

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href='/'>PhoneBook</Navbar.Brand>
          <div>
            <NavLink to="/" exact style={linkStyle}>Hello</NavLink>
            <NavLink to="/contacts" exact style={linkStyle}>PhoneBook</NavLink>
            </div>
            <div>
            
            {isLoggedIn ? <LogInMenu /> : <LogOutMenu />}
          </div>
    </Container>
  </Navbar>
    </>
    )
}

