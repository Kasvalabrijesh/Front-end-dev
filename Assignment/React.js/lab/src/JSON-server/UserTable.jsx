import React, { useEffect, useState } from "react";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>🔄 Loading...</h2>;
  if (error) return <h2>❌ {error}</h2>;

  return (
    <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
