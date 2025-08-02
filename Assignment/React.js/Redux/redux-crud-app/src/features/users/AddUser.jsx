import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userSlice';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users.length + 1, name, email }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
