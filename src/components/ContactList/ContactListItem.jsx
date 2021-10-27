import React from 'react';
import { P, DeleteButton } from './ContactList.styled.jsx';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(contactsOperations.deleteContact(id));
    return (
    <li key={contact.id}>
             <P>{contact.name}:</P> <P>{contact.number}</P>
        <DeleteButton
          type="button"
          onClick={() => deleteContact(contact.id)}> Delete
        </DeleteButton>
      </li>
    )
    };

export default ContactListItem;