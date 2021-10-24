import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container} from './App.styled.jsx';
import HomeView from './views/HomeView/HomeView';
import HelloPage from './views/HelloPage/HelloPage';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import AppBar from './AppBar/AppBar';
import { authOperations } from '.././redux/auth';

export default function App() {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container >
      <AppBar />

      <Switch>
        <Route exact path="/" component={HelloPage} />
        <Route exact path="/contacts" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
      </Switch>
      
    </Container>
    )
}
