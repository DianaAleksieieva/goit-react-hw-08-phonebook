import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';

export default function LogInMenu() {
const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
     <div>
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}