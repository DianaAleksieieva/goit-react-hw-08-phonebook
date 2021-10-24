import React from 'react'
import { useSelector } from 'react-redux';
import { Container } from './AppBar.styled.jsx';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import LogOutMenu from './LogOutMenu/LogOutMenu.jsx';
import LogInMenu from './LogInMenu/LogInMenu.jsx';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <div>
      <NavLink to="/" exact>
      Hello
      </NavLink>
    <NavLink to="/contacts" exact>
      PhoneBook
      </NavLink>
      </div>
      {console.log(isLoggedIn)}
      {isLoggedIn ? <LogInMenu /> : <LogOutMenu />}
    </Container>
    )
}
