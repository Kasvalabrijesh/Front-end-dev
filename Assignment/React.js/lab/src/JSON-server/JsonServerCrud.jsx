import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonServerCrud = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  const API = "http://localhost:3001/users";

  const fetchUsers = () => {
    axios.get(API).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = () => {
    axios.post(API, form).then(() => {
      setForm({ name: "", email: "" });
      fetchUsers();
    });
  };

  const updateUser = (id) => {
    axios.put(`${API}/${id}`, { name: "Updated", email: "updated@gmail.com" }).then(fetchUsers);
  };

  const patchUser = (id) => {
    axios.patch(`${API}/${id}`, { name: "Patched Name" }).then(fetchUsers);
  };

  const deleteUser = (id) => {
    axios.delete(`${API}/${id}`).then(fetchUsers);
  };

  return (
    <div>
      <h2>JSON Server CRUD</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => updateUser(u.id)}>PUT</button>
            <button onClick={() => patchUser(u.id)}>PATCH</button>
            <button onClick={() => deleteUser(u.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonServerCrud;
