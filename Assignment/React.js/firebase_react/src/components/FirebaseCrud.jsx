import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebaseConfig';


const FirebaseCrud = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const userRef = collection(db, "users");

  const fetchUsers = async () => {
    const data = await getDocs(userRef);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => { fetchUsers(); }, []);

  const addUser = () => {
    addDoc(userRef, newUser).then(fetchUsers);
    setNewUser({ name: '', email: '' });
  };

  const updateUser = (id) => {
    const userDoc = doc(db, "users", id);
    updateDoc(userDoc, { name: "Updated Name" }).then(fetchUsers);
  };

  const deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    deleteDoc(userDoc).then(fetchUsers);
  };

  return (
    <div>
      <input value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} />
      <input value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})
            <button onClick={() => updateUser(u.id)}>Update</button>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirebaseCrud;
