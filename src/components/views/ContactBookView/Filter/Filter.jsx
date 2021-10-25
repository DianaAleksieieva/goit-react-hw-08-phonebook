import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../../../redux/contacts';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = e => {
    dispatch(changeFilter(e.target.value))
  }
  return (
  <label>
    <h3>Find contact by Name</h3>
    <input type="text" value={value} onChange={onChange} />
  </label>)
};

export default Filter;