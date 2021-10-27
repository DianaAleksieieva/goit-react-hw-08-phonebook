import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { authOperations, authSelectors } from '../../redux/auth';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Container} from '../../components/App/App.styled.jsx';

export default function LoginView(redirectTo = '/login') {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleChange = event => {
    const { name, value } = event.target;
    setUser((prev) => ({...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(authOperations.logIn(user));
    reset()
  }

  const reset = () => {
    setUser({
      email: '',
      password: ''
    })
  }

    return (
      <Container>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email" />
            <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password" />
          </Form.Group>

          <Button variant="secondary" type="submit">LogIn</Button>
        </Form>
        {isLoggedIn && <Redirect to={redirectTo} />}
      </Container>
    )
}
