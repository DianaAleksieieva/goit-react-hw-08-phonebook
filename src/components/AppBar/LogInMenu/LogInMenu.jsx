import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import { Button } from 'react-bootstrap';
import { Welcome } from './LogInMenu.syled';

export default function LogInMenu() {
const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
     <div>
      <Welcome>Hello, {name}</Welcome>
      <Button variant="secondary" type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </div>
  );
}