import React from 'react';
import { useSelector } from 'react-redux';
import { contactsSelectors } from '../../../../redux/contacts';
import { ContactStyledList } from './ContactList.styled.jsx';
import ContactListItem from './ContactListItem'

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  return (
    <ContactStyledList>
      {contacts.map((contact) => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </ContactStyledList>
  )
};

export default ContactList;