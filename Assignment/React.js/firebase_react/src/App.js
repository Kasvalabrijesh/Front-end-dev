import React from 'react';
import UserTable from './components/UserTable';        
import CrudApp from './components/CrudApp';            
import Auth from './components/Auth';                   
import FirebaseCrud from './components/FirebaseCrud';   

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🌐 React API + CRUD + Firebase Project</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>🔹 Public API Table (JSONPlaceholder)</h2>
        <UserTable />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>🔹 JSON Server CRUD</h2>
        <CrudApp />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>🔹 Firebase Google Authentication</h2>
        <Auth />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>🔹 Firebase Firestore CRUD</h2>
        <FirebaseCrud />
      </section>
    </div>
  );
};

export default App;
