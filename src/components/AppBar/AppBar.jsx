import React from 'react'
import { useSelector } from 'react-redux';
// import { WrapContainer } from './AppBar.styled.jsx';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import LogOutMenu from './LogOutMenu/LogOutMenu.jsx';
import LogInMenu from './LogInMenu/LogInMenu.jsx';
import { Navbar, Nav,Container } from 'react-bootstrap';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >PhoneBook</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
              <NavLink to="/" exact>Hello</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to="/contacts" exact>PhoneBook</NavLink>
            </Nav.Link>
            <Nav.Link >
              {isLoggedIn ? <LogInMenu /> : <LogOutMenu />}
            </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
    )
}

