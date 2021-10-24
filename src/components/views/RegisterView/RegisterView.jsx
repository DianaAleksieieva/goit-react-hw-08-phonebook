import React, { useState  } from 'react';
import { authOperations } from '../../../redux/auth';
import {useDispatch} from 'react-redux'


export default function RegisterView() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    reset()
  }
  const reset = () => {
    setPassword('');
    setName('');
    setEmail('');
  }
    return (
        <div>
            <h2>Registration</h2>
    <form onSubmit={handleSubmit}>
      <lable> Name
      <input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. 
        Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required />
                </lable>
     <lable> Mail
      <input
        value={email}
        onChange={handleChange}
        type="text"
        name="email"
        title="Почта может состоять только из букв и тире."
        required />
    </lable>          
                
    <lable> Password
      <input
        value={password}
        onChange={handleChange}
        type="text"
        name="password"
        title="Пароль"
        required />
    </lable>
    <button type="submit" >Rigister</button>
            </form>
            </div>
    )
}
