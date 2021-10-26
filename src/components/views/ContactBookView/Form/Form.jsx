import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import contactsOperations from '../../../../redux/contacts/contacts-operations';
import { contactsSelectors } from '../../../../redux/contacts';
import { useDispatch } from 'react-redux'
import { Form,Button } from 'react-bootstrap'

const  AddContactForm = () => {
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
    
  return (<Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Label> Name</Form.Label>
        <Form.Control
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. 
          Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label> Number</Form.Label>
        <Form.Control
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, 
          круглые скобки и может начинаться с +" required />
    </Form.Group>
    <Button variant="secondary" type="submit">Add contact</Button>
  </Form>)
}


export default AddContactForm;
