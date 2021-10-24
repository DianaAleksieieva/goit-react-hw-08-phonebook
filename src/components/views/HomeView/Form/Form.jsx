import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from './Form.styled.jsx';
import contactsOperations from '../../../../redux/contacts/contacts-operations';
import { contactsSelectors } from '../../../../redux/contacts';
import { useDispatch } from 'react-redux'

const  Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  
  const handleSubmit = event => {
    event.preventDefault()
  const isNameExist = contacts.find(contact => contact.name === name);
        if (isNameExist) {
          alert(`${name}is already in contacts`);
          reset()
          return
    }
    dispatch(contactsOperations.addContact({name, number}))
    reset()
  }

  const reset = () => {
    setName('')
    setNumber('')
  }
    
  return (<form onSubmit={handleSubmit}>
    <lable> Name
      <Input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. 
        Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required />
    </lable>
    <lable> Number
      <Input
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, 
        круглые скобки и может начинаться с +" required />
    </lable>
    <button type="submit">Add contact</button>
  </form>)
}


export default Form;
