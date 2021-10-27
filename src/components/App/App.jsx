import React, {  useEffect, Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { authOperations } from '../../redux/auth';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const HelloPage = lazy(() => import('../../views/HelloPage/HelloPage'));
const RegisterView = lazy(() => import('../../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView/LoginView'));
const ContactBookView = lazy(() => import('../../views/ContactBookView/ContactBookView'));

export default function App() {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
     
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path="/" component={HelloPage} />
          <PrivateRoute exact path="/contacts" component={ContactBookView} />
          <PublicRoute  path="/register" component={RegisterView} />
          <PublicRoute  path="/login" component={LoginView} />
        </Suspense>
      </Switch>
      
      </>
    )
}
