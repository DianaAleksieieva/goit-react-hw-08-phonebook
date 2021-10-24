import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LogOutMenu() {
  return (
    <div>
    <NavLink
      to="/register"
        exact>
        Registration
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </div>
  );
}