import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './userSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User List</h2>
      <Link to="/add">Add User</Link>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Link to={`/edit/${user.id}`}>Edit</Link>
          <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
