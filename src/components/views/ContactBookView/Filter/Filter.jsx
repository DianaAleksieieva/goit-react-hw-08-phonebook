import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../../../redux/contacts';
import { Form } from 'react-bootstrap'

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = e => {
    dispatch(changeFilter(e.target.value))
  }
  return (
    <>
    <Form.Label>
      <h3>Find contact by Name</h3>
    </Form.Label>
    <Form.Control type="text" value={value} onChange={onChange} placeholder='Type the name to find...' />
  </>
      )
};

export default Filter;