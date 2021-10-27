import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react'
import Form  from '../../components/Form/Form';
import Filter  from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { contactsOperations } from '../../redux/contacts';
import { Container} from '../../components/App/App.styled.jsx';

export default function HomeView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <Container >
        <h2>PhoneBook</h2>
        <Form/>
        <h2>Contacts</h2>
        <ContactList/>
        <Filter/>
    </Container>
    )
}
