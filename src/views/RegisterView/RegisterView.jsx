import React, { useState  } from 'react';
import { authOperations,authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Container} from '../../components/App/App.styled.jsx';

export default function RegisterView(redirectTo = '/login') {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch()
  const isRegistered = useSelector(authSelectors.getIsRegistered);
    
  const handleChange = event => {
    const { name, value } = event.target;
    setUser((prev) => ({...prev, [name]: value }));
  };
  
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(authOperations.register(user));
    reset()
  }
  const reset = () => {
    setUser({
      name: '',
      email: '',
      password: ''
    })
  }
    return (
      <Container>
        <h2>Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. 
              Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required />
          </Form.Group>  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Email </Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="email"
              title="Почта может состоять только из букв и тире."
              required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Password </Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={handleChange}
              name="password"
              title="Пароль"
              required />
            </Form.Group>
          <Button variant="secondary" type="submit" >Rigister</Button>
        </Form>
        {isRegistered && <Redirect to={redirectTo} />}
        </Container>
            
    )
}
