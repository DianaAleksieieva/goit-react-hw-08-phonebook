import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { authOperations } from '../../../redux/auth';
import { Form,Button } from 'react-bootstrap';

export default function RegisterView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
        case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(authOperations.logIn({ email, password }));
    reset()
  }
  const reset = () => {
    setPassword('');
    setEmail('');
  }
    return (
        <div>
            <h2>Login</h2>
    <Form onSubmit={handleSubmit}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"name="email" value={email} onChange={handleChange} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>   
                
      <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange} name="password" />
  </Form.Group>
    <Button variant="secondary" type="submit">LogIn</Button>
            </Form>
            </div>
    )
}
