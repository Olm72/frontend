// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
