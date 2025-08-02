import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './userSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const user = useSelector(state => state.users.find(user => user.id === parseInt(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: parseInt(id), name, email }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input value={name} onChange={e => setName(e.target.value)} required />
      <input value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
