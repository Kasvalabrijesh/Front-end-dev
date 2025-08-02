import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CrudApp = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);

  const fetchUsers = () => {
    axios.get('http://localhost:3001/users').then(res => setUsers(res.data));
  };

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  const addUser = () => {
    axios.post('http://localhost:3001/users', newUser).then(fetchUsers);
    setNewUser({ name: '', email: '' });
  };

  const updateUser = () => {
    axios.put(`http://localhost:3001/users/${editId}`, newUser).then(() => {
      setEditId(null);
      setNewUser({ name: '', email: '' });
      fetchUsers();
    });
  };

  const patchUser = (id) => {
    axios.patch(`http://localhost:3001/users/${id}`, { name: 'Updated Name' }).then(fetchUsers);
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then(fetchUsers);
  };

  return (
    <div>
      <input placeholder="Name" value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })} />
      <input placeholder="Email" value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
      {editId ? <button onClick={updateUser}>Update</button> : <button onClick={addUser}>Add</button>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => { setEditId(user.id); setNewUser(user); }}>Edit</button>
            <button onClick={() => patchUser(user.id)}>Patch</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
