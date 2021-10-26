import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import { Button } from 'react-bootstrap';

export default function LogInMenu() {
const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
     <div>
      <span>Добро пожаловать, {name}</span>
      <Button variant="secondary" type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </div>
  );
}