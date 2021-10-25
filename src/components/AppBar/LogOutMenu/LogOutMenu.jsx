import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapContainer } from '../AppBar.styled.jsx';

export default function LogOutMenu() {
  return (
    <WrapContainer>
    <NavLink
      to="/register"
        exact>
        Registration
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </WrapContainer>
  );
}