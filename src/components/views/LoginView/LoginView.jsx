import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { authOperations } from '../../../redux/auth';

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
    <form onSubmit={handleSubmit}>
     <lable> Mail
      <input
        value={email}
        onChange={handleChange}
        type="text"
        name="email"
        title="Почта"
        required />
    </lable>          
                
    <lable> Password
      <input
        value={password}
        onChange={handleChange}
        type="tel"
        name="password"
        title="Пароль"
        required />
    </lable>
    <button type="submit">LogIn</button>
            </form>
            </div>
    )
}
