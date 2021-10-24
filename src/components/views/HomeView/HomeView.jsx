import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react'
import Form  from './Form/Form';
import Filter  from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { contactsOperations } from '../../../redux/contacts';

export default function HomeView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <>
        <h2>PhoneBook</h2>
        <Form/>
        <h2>Contacts</h2>
        <ContactList/>
        <Filter/>
    </>
    )
}
